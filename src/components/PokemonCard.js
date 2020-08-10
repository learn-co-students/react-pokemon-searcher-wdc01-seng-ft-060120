import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }
  toggleCard = (e) => {
    e.preventDefault()
    let newFront = !this.state.front
    this.setState({
      front: newFront
    })
  }  

  render() {
    let { pokemon } = this.props
    
    return (
      <Card>
        <div>
          <div className="image">
            <img src={(this.state.front === true) 
            ? pokemon.sprites.front 
            : pokemon.sprites.back } 
            alt="oh no!" onClick={this.toggleCard} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
