import React from 'react'
import { Card } from 'semantic-ui-react'
// import { render } from 'react-dom'

const PokemonCard = props => {
  const { pokemon } = props
  let imgURL = pokemon.isClicked ? pokemon.sprites.back : pokemon.sprites.front
  return (
    <Card>
      <div>
        <div onClick={ e => props.toggleImage(pokemon) } className="image">
            <img src={ imgURL } alt={pokemon.name + ' pokemon image'} />
        </div>
        <div className="content">
          <div className="header">{ pokemon.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { pokemon.hp }
          </span>
        </div>
      </div>
    </Card>
  )
}



export default PokemonCard
