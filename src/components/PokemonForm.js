import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       hp: "",
       frontUrl: "",
       backUrl: ""
    }
  }
  
  handleInput = (e)=> {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {this.props.createNewPokemon(this.state)
        e.target.reset();
        }}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => this.handleInput(e)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => this.handleInput(e)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.handleInput(e)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.handleInput(e)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
