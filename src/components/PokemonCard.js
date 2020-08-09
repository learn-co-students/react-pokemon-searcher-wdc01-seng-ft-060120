import React from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard(props) {

  return (
    <Card>
      <div onClick={() => {props.flipPokemonCard(props.pokemon)}}>
        <div className="image">
          <img src={props.pokemon.click ? props.pokemon.sprites.back : props.pokemon.sprites.front } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  )

}

export default PokemonCard
