import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection(props) {

  return (
    <Card.Group itemsPerRow={6}>
      {props.pokemon.map(poke => 
      <PokemonCard
        key={poke.id}
        pokemon={poke}
        flipPokemonCard={props.flipPokemonCard}
      />)}
    </Card.Group>
  )
}

export default PokemonCollection
