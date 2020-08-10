import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
  
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
    const {id, name, hp, sprites} = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt="oh no!" 
            src={this.state.click ? sprites.back : sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
