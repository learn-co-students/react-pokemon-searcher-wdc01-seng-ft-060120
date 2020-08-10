import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const url = 'http://localhost:3000/pokemon/'
class PokemonPage extends React.Component {
  

  constructor() {
    super() 
    this.state = {
    pokemonArray:[],
    search: ""
    }
  } 

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({pokemonArray: data}))
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search updateSearch={this.updateSearch}/>
        <br />
        <PokemonCollection pokemonArray={this.updateDisplay()} />
      </Container>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let name = e.target.name.value
    let hp = e.target.hp.value
    let frontImg = e.target.frontUrl.value 
    let backImg = e.target.backUrl.value

    console.log("submitting form...")
    this.addPokemon(name, hp, frontImg, backImg)
    e.target.reset()
  }

  addPokemon = (name, hp, frontImg, backImg) => {
    let newPokemonInfo = {
      name,
      hp,
      sprites: {
        front: frontImg,
        back: backImg
      }
    }
    let options = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify(newPokemonInfo)
    }
    

    fetch(url, options)
    .then(response => response.json())
    .then(newPokemon => this.setState({ pokemonArray: [...this.state.pokemonArray, newPokemon]})
    )
    
  }

  updateSearch = (e) => {
    let newSearch = e.target.value

    this.setState({
      search: newSearch
    })
  }

  updateDisplay = () => {
    let pokemonArray = this.state.pokemonArray
    let search = this.state.search 
    // this if statement looks to see if the array has at least one pokemon
    // and if the this.state.search has something inside of the search
    // if true, then return the filtered pokemon based off this.state.search
    // if not true, then return the the full pokemonArray from this.state.pokemonArray
    // ^ this.state.pokemonArray does NOT get updated! 
    // this way, we can call back the full this.state.pokemonArray and also filter
    // through the array to update our display based off the search
    if (pokemonArray.length > 0 && search !== "") {
      return pokemonArray.filter(pokemon => pokemon.name.includes(search))
    } else
    return pokemonArray
  }
}

export default PokemonPage
