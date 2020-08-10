import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonURL = 'http://localhost:3000/pokemon/'

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    searchTerm: '',
    newPokemon: {
      name: '',
      hp: 0,
      sprites: {
        frontUrl: '',
        backUrl: ''
      }
    }
  }

  updateNewPokemonInfo = event => {
    let { name, value } = event.target

    // if a number then parse it else return the original string
    value = parseInt(value, 10) ? parseInt(value, 10) : value

    this.setState({
      newPokemon: {
        ...this.state.newPokemon,
        [name]: value
      }
    })
  }

  updateNewPokemonImages = event => {
    let { name, value } = event.target

    this.setState({
      newPokemon: {
        ...this.state.newPokemon,
        sprites:{
          ...this.state.newPokemon.sprites,
          [name]: value
        }
      }
    })
  }

  makeNewPokemon = event => {
    event.target.reset()
    
    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify( this.state.newPokemon )
    }

    fetch('http://localhost:3000/pokemon/', postRequest)
      .then( resp => resp.json() )
      .then( newPokemon => this.addNewPokemonToState( newPokemon ))
  }

  addNewPokemonToState = newPokemon => {
    this.setState({
      pokemonList: this.state.pokemonList.concat(newPokemon)
    })
  }

  toggleImage = pokemon => {
    let newList = this.state.pokemonList.map( p => {
        if ( p === pokemon ) {
          p.isClicked = !p.isClicked
          return p
        } else {
          return p
        }
    })
    this.setState({
      pokemonList: newList
    })
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handlePokemonSearch = () => {
    let { searchTerm, pokemonList } = this.state
    return pokemonList.filter( p => p.name.includes(searchTerm) )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          updateNewPokemonInfo={this.updateNewPokemonInfo}
          updateNewPokemonImages={this.updateNewPokemonImages}
          makeNewPokemon={this.makeNewPokemon}
        />
        <br />
        <Search
          updateSearchTerm={this.updateSearchTerm}
        />
        <br />
        <PokemonCollection
          pokemonList={this.handlePokemonSearch()}
          toggleImage={this.toggleImage}
        />
      </Container>
    )
  }

  componentDidMount() {
    fetch(pokemonURL)
      .then( resp => resp.json() )
      .then( pokemonList => this.setState({ pokemonList }))
  }
}

export default PokemonPage
