import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const url = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  constructor() {
    super()
  
    this.state = {
       pokemons: [],
       displayPokemons:[]
    }
  }

  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData,
        displayPokemons: pokemonData
      })
    })
  }

  
  handleSearch = (query) => {
    let pokemonFilter = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
    this.setState({
      displayPokemons: pokemonFilter
    })
  }

  createNewPokemon = (newPokemonData) => {
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: newPokemonData.name,
        hp: newPokemonData.hp,
        sprites: {
          front: newPokemonData.frontUrl,
          back: newPokemonData.backUrl,
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
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.displayPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
