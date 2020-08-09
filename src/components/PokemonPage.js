import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon/')
    .then(response => response.json())
    .then(pokemonData => this.setState({pokemon: pokemonData}))
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  addNewPokemon = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const hp = event.target.hp.value;
    const frontUrl = event.target.frontUrl.value;
    const backUrl = event.target.backUrl.value;
    
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    }

    fetch('http://localhost:3000/pokemon', options)
    .then(response => response.json())
    .then(pokemonData => {
      this.setState({
        pokemon: [...this.state.pokemon, pokemonData]
      })
    })

    event.target.reset();
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter((p) => {return p.name.includes(this.state.searchTerm)});

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmit={this.addNewPokemon}/>
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
