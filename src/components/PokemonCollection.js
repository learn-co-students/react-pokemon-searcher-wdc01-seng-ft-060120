import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {

  const { pokemon } = props

  const renderPokemon = () => {
    return pokemon.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
  }

    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemon()}
      </Card.Group>
    )
}

export default PokemonCollection
