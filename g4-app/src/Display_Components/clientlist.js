import React, { Component } from 'react'
import axios from 'axios'
import Clientupdate from './clientupdate'
import {Table, Button } from 'semantic-ui-react'

export default class Clientlist extends Component {
    state = {
        Clients: [],
        Update: false
    }

    componentWillMount(){
        axios.get(`http://localhost:4000/customers`)
        .then(res => {this.setState({
          Clients: res.data
        })})
      }

    handleRemove = (e) => {
      const id = e.target.id
        axios.delete(`http://localhost:4000/customer/${id}`)
        .then(res => console.log(res.data.message))
      this.setState({
        Update: true
      })
    }

    handleSelection = (e) => {
      const id = e.target.id
      axios.get(`http://localhost:4000/customer/${id}`)
      .then(res => {
          console.log("CLIENT SELECTED", res.data)
          this.setState({
              client: res.data
          })
      })
    return <Clientupdate Client={this.state.client}/>
  }



    render() {
      if(this.state.Update) {
        return( window.location.reload() )
      } 
      return (
            <Table celled>
            <Table.Header align='center'>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First</Table.HeaderCell>
                <Table.HeaderCell>Last</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>IP</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Customer Since</Table.HeaderCell>
                <Table.HeaderCell>Update/Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            
              <Table.Body>{this.state.Clients.map(client => {
                  return ( 
                          <Table.Row align='center'  key={client.Id} >
                             <Table.Cell onClick={this.a=this.handleRemove}>{client.Id}</Table.Cell>
                             <Table.Cell>{client.First}</Table.Cell>
                             <Table.Cell>{client.Last}</Table.Cell>
                             <Table.Cell>{client.Email}</Table.Cell>
                             <Table.Cell>{client.IP}</Table.Cell>
                             <Table.Cell>{client.Longitude +' , '+ client.Latitude}</Table.Cell>
                             <Table.Cell>{client.SignUpDate}</Table.Cell>
                              <Table.Cell>
                                 <Button size='small' onClick={this.handleSelection} id={client.Id} color='green'>Update</Button>
                                 <Button size='small' onClick={this.handleRemove} id={client.Id} color='red'>Remove</Button>
                              </Table.Cell>
                          </Table.Row>
                  )
              })}
              </Table.Body>
          </Table>
    )
  }
}
