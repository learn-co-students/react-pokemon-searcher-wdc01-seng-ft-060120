import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = props => {
  return (
    <Card.Group itemsPerRow={6}>
      { props.pokemonList.map( (pokemon, idx) =>
        <PokemonCard
          key={idx}
          pokemon={pokemon}
          toggleImage={props.toggleImage}
        /> )}
    </Card.Group>
  )
}

export default PokemonCollection
