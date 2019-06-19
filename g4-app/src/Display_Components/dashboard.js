import React, { Component } from 'react'
import axios from 'axios'
import {
  Button,
  Container,
  Header,
  Form,
  Checkbox
} from 'semantic-ui-react'
const publicIp = require('public-ip');

export default class Dashboard extends Component {
    state = {
        Checkbox: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChecked = (e) => {
        if(this.state.Checkbox === false) {
            this.setState({
                Checkbox: true
            })
            
        }
    }

    handleSubmit = (e) => {
        !this.state.Checkbox ? alert('Please agree to terms and conditions') : 
        axios.put(`http://localhost:/4000/customers/signup`)
    }


    componentDidMount() {
        !navigator.geolocation.getCurrentPosition ? alert('GPS location not supported on this browser') :
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })
    }

    render() {
        console.log(publicIp)
        return (
            
            <div>
                <Header as='h1' content='Sign Up New Customer'  textAlign='center' />
                <Container text width={5}>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' name='First' onChange={this.handleChange}  />
                            </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' name='Last' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' name='Email' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox onClick={this.handleChecked} label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
