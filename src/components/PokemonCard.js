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
      <Card >
        <div onClick={() => this.handleClick()}>
          <div className="image">
            <img src={this.state.click ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
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
