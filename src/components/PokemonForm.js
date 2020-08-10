import React from 'react'
import { Form } from 'semantic-ui-react'

const PokemonForm = props => {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={ event => props.makeNewPokemon( event ) }>
        <Form.Group widths="equal">
          <Form.Input
            onChange={ event => props.updateNewPokemonInfo( event ) }
            fluid
            label="Name"
            placeholder="Name"
            name="name" />
          <Form.Input
            onChange={ event => props.updateNewPokemonInfo( event ) }
            type='number'
            fluid
            label="hp"
            placeholder="hp"
            name="hp" />
          <Form.Input
            onChange={ event => props.updateNewPokemonInfo( event ) }
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl" />
          <Form.Input
            onChange={ event => props.updateNewPokemonInfo( event ) }
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl" />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
