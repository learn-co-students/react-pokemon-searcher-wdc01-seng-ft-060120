import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemon: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokes => this.setState({
      pokemon: pokes.map(poke => {return {...poke, click: false}})
    }));
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection 
        pokemon={this.handleDisplay()} 
        flipPokemonCard={this.flipPokemonCard} />
      </Container>
    )
  }

  handleSearch = (e) => {
    let searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm
    })
  }

  handleDisplay = () => {
    let pokemon = this.state.pokemon;
    let searchTerm = this.state.searchTerm;
    if (pokemon.length > 0 && searchTerm !== '') {
      return pokemon.filter(poke => poke.name.includes(searchTerm))
    } else {
      return pokemon
    }
  }

  handleSubmit = (formData) => {
    const postRequest = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:3000/pokemon', postRequest)
    .then(resp => resp.json())
    .then(poke => this.setState({
      pokemon: [...this.state.pokemon, {...poke, click: false}]})
    )
  }

  flipPokemonCard = (clickedPoke) => {
    this.setState({
      pokemon: this.state.pokemon.map(poke => {
        if (poke === clickedPoke) {
          return {...poke, click: !poke.click}
        }
        return poke
      })
    })
  }
}

export default PokemonPage
