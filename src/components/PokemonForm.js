import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state= {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    }
  }

  nameChange = (name) => {
    this.setState({
      name
    })
  }

  hpChange = (number) => {
    if (number){
      this.setState({
        hp: parseInt(number, 10)
      })
    }
    else {
      this.setState({
        hp: number
      })
    }
  }

  changeFront = (front) => {
    let sprites = {...this.state.sprites, front }
    this.setState({
      sprites
    })
  }

  changeBack = (back) => {
    let sprites = {...this.state.sprites, back }
    this.setState({
      sprites
    })
  }

  render() {
    const { createPokemon } = this.props
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {createPokemon(e, this.state)}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={(e) => {this.nameChange(e.target.value)}}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={(e) => {this.hpChange(e.target.value)}}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.sprites.front} onChange={(e) => {this.changeFront(e.target.value)}} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.sprites.back} onChange={(e) => {this.changeBack(e.target.value)}}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
