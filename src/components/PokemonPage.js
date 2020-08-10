import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()

    this.state = {
      pokemons: [],
      displayPokemons: [],
      // searchTerm: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        pokemons,
        displayPokemons: pokemons
      })
    })
  }

  changeSearch = (term) => {
    // this.setState({
    //   searchTerm: term
    // })

    let filterPokemon = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()))

    this.setState({
      displayPokemons: filterPokemon
    })
  }

  addPokemon = (pokemonData) => {
    
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: pokemonData.name,
        hp: pokemonData.hp,
        sprites: {
          front: pokemonData.frontUrl,
          back: pokemonData.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon],
        displayPokemons: [...this.state.displayPokemons, newPokemon]
      })
    })
  }

  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        addPokemon={this.addPokemon} />
        <br />
        <Search changeSearch={this.changeSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.displayPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
