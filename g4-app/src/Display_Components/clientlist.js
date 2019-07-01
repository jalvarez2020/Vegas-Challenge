import React, { Component } from 'react'
import axios from 'axios'
import {Table, Button } from 'semantic-ui-react'

export default class clientlist extends Component {
    state = {
        Client: []
    }

    componentWillMount(){
        axios.get(`http://localhost:4000/customers`)
        .then(res => {this.setState({
          Client: res.data
        })})
      }

    handleRemove = (e) => {
      const id = e.target.innerHTML  
      console.log("HANDEL REMOVE", e.target.innerHTML)
        axios.delete(`http://localhost:4000/customer/${id}`)
        .then(res => alert(res))
    }

    render() {
        return (
            <Table celled>
            <Table.Header align='center'>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First</Table.HeaderCell>
                <Table.HeaderCell>Last</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Customer Since</Table.HeaderCell>
                <Table.HeaderCell>Update/Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            
              <Table.Body>{this.state.Client.map(client => {
                  return ( 
                          <Table.Row align='center'  key={client.Id} >
                             <Table.Cell onClick={this.a=this.handleRemove}>{client.Id}</Table.Cell>
                             <Table.Cell>{client.First}</Table.Cell>
                             <Table.Cell>{client.Last}</Table.Cell>
                             <Table.Cell>{client.Email}</Table.Cell>
                             <Table.Cell>{client.SignUpDate}</Table.Cell>
                              <Table.Cell>
                                 <Button color='green'>Update</Button>
                                 <Button onClick={this.handleRemove} color='red'>Remove</Button>
                              </Table.Cell>
                          </Table.Row>
                  )
              })}
                
              </Table.Body>
          </Table>
    )
  }
}
