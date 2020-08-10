import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super() 
    
    this.state = {
      click: false
    }
  }


  handleClick = () => {
    this.setState({
      click: !this.state.click 
    })
  }
  render() {

    // let pokemon = this.props.pokemon
    let { pokemon } = this.props

    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.handleClick()}>
            <img alt="oh no!" src={this.state.click ? pokemon.sprites.back : pokemon.sprites.front } />
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
