import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  renderAllPokemonCards = () => {
    return this.props.pokemon.map((pokemon, key) => {return <PokemonCard key={key} pokemon={pokemon} />})
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderAllPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
