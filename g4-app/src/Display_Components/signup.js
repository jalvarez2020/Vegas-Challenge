import React, { Component } from 'react'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import {
  Button,
  Container,
  Header,
  Form,
  Checkbox
} from 'semantic-ui-react'
const publicIp = require('public-ip');

export default class Signup extends Component {
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
        const newClient = {
            First: this.state.First,
            Last: this.state.Last,
            Email: this.state.Email,
            Latitude: this.state.latitude,
            longitude: this.state.longitude,
            IP: this.state.IP
        }
        !this.state.Checkbox ? alert('Please agree to terms and conditions') :
        axios.post(`http://localhost:4000/customers/signup`, newClient)
        .then(res => {alert()})

    }


    componentDidMount() {
        !navigator.geolocation.getCurrentPosition ? alert('GPS location not supported on this browser') :
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
        axios.get(`https://api.ipify.org?format=json`).then(res => {
            const IP = res.data.ip
           const clientIP = IP.toString()
            console.log('CLIENT IP', clientIP)
            this.setState({
                IP: clientIP
            })
        })
        
        
    }


    render() {
        console.log(publicIp)
        console.log("component", this.state)
        return (
            <div>
                <Header as='h1' content='Sign Up New Customer'  textAlign='center' />
                <Container text width={5}>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' name='First' type='text' pattern='[A-Za-z]' onChange={this.handleChange}  />
                            </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' name='Last' type='text' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' name='Email' type='email' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox onClick={this.handleChecked} label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit' onClick={this.handleSubmit} >Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
