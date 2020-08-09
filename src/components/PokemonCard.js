import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayFront: true
    }
  }

  toggleDisplayFront = () => {
    this.setState({displayFront: !this.state.displayFront})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img 
              src={this.state.displayFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}
              alt={this.props.pokemon.name}
              onClick={this.toggleDisplayFront}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
