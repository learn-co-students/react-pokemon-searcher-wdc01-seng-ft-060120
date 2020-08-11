import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemonCollection: [],
      searchTerm: '',
      displayPokemonCollection: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemonCollection: data,
      displayPokemonCollection: data
    }))
  }

  

  changeSearch = (term) => {
  let filteredPokemon = this.state.pokemonCollection.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()))
  this.setState({
    displayPokemonCollection: filteredPokemon
  })
  }


  addPokemon = (pokemonData) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
    .then(res => res.json())
    .then(newPokemon => this.setState({
      pokemonCollection: [...this.state.pokemonCollection, newPokemon],
      displayPokemonCollection: [...this.state.displayPokemonCollection, newPokemon]
    }))
  }
  


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search changeSearch={this.changeSearch} />
        <br />
        <PokemonCollection 
        pokemonCollection={this.state.displayPokemonCollection}
        />
      </Container>
    )
  }
}

export default PokemonPage
