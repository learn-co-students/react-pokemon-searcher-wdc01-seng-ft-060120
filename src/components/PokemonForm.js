import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      name: "",
      hp: 0,
      sprites: {
        front: "",
        back: ""
      }
    };
    this.handleSubmit = this.props.handleSubmit;
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {this.handleSubmit(this.state)}}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => {this.handleChange(e)}} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e) => {this.handleChange(e)}} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e) => {this.handleImgChange(e)}} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange={(e) => {this.handleImgChange(e)}} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleImgChange = (e) => {
    this.setState({
      sprites: {
        ...this.state.sprites, 
        [e.target.name]: e.target.value
      }
    })
  }
}

export default PokemonForm
