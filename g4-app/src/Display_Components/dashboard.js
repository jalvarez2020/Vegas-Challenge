import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Form,
  Checkbox
} from 'semantic-ui-react'

export default class Dashboard extends Component {
    state = {}

    render() {
        return (
            <div>
                <Header as='h1' content='Sign Up New Customer'  textAlign='center' />
                <Container width={5}>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                            </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
