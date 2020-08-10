import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super();
    this.state = {
      front: true
    }
  }

  imageUrl = () => {
    return this.state.front ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }


  render() {
    const { hp, name} = this.props.pokemon

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.imageUrl()} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
