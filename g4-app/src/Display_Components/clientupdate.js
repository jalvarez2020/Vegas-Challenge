import React, { Component } from 'react'
import axios from 'axios'
import {Input, Table, Button, Segment} from 'semantic-ui-react'

export default class Clientupdate extends Component {
    state = {
        update: false,
        client: this.props.client
      }
      
      handleUpdate = (e) => {
        const id = this.props.client.Id
        const client = {...this.state.client}
        client.Email = this.state.Email
        client.First = this.state.First
        client.Last = this.state.Last
        axios.put(`http://localhost:4000/customer/update/${id}`, client)
        .then(res => this.setState({show: true}) )
        
        return(window.location.reload())
      }

      inputHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value} )
};

    render() {
     
        return (
          <>
          <Table celled>
            <Table.Header align='center'>
              <Table.Row>
                <Table.HeaderCell>First</Table.HeaderCell>
                <Table.HeaderCell>Last</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            
              <Table.Body align='center'>
                 <Table.Row textAlign='center'>
                 <Table.Cell><Input  type='text' name='First' placeholder={this.props.client.First} onInput={this.inputHandler} /></Table.Cell>
                 <Table.Cell><Input  type='text' name='Last' placeholder={this.props.client.Last} onInput={this.inputHandler} /></Table.Cell>
                 <Table.Cell><Input  type='text' name='Email' placeholder={this.props.client.Email} onInput={this.inputHandler} /></Table.Cell>
                 </Table.Row>
              </Table.Body>
          </Table>
            <Segment align='center'>
              <Button size='large' id={this.props.client.id} onClick={this.handleUpdate} >Submit</Button>
            </Segment>
        </>
        )
           
    }
}
