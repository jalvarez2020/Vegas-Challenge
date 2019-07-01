import React, { Component } from 'react'
import axios from 'axios'
import {
  Button,
  Container,
  Form,
  Checkbox,
} from 'semantic-ui-react'

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
                Checkbox: true,
                Update: false
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
        axios.post(`http://localhost:4000/customer/signup`, newClient)
        .then(res => {this.setState({ Update: true })})

    }


    componentDidMount() {
        !navigator.geolocation.getCurrentPosition ? alert('GPS location not supported on this browser') :
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
        axios.get(`https://api.ipify.org?format=json`).then(res => {
            const IP = res.data.ip
           const clientIP = IP.toString()
            this.setState({
                IP: clientIP
            })
        })
    }
    render() {
        if(this.state.Update) {
            return( window.location.reload() )
          }
        return (
            <div>
                <Container text width={5}>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' name='First' type='text'  onChange={this.handleChange}  />
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
