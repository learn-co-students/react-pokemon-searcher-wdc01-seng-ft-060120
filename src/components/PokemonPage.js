import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const BASEURL = "http://localhost:3000/pokemon/"

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    displayPokemon: [],
  }

  componentDidMount(){
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon,
        displayPokemon: pokemon
      })
    })
  }

  createPokemon = (e, pokemon) => {
    e.preventDefault()
    const pokemonConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pokemon)
    }
    fetch(BASEURL, pokemonConfig)
    .then(resp => resp.json())
    .then(poke => {
      this.setState({
        pokemon: [poke, ...this.state.pokemon],
        displayPokemon: [poke, ...this.state.pokemon]
      })
    })
  }

  searchPokemon = (searchTerm) => {
    let displayPokemon = [...this.state.pokemon].filter(pokemon => pokemon.name.includes(searchTerm))
    this.setState({
      displayPokemon
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemon={this.state.displayPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
