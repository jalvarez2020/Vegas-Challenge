import React, { Component } from 'react'
import axios from 'axios'
import faker from 'faker'
import Usermodal from './userModal'
import Clients from './search'
import Signup from './signup'
import '../index.css';
import {
  Button,
  Header,
  Image,
  Menu,
  Grid,
  Segment,
  Sidebar,
  Icon,
  GridRow,
} from 'semantic-ui-react'

export default class Dashboard extends Component {
  state = {
    show: false,
    Clients: []
  }

  handleHide = () => {
    !this.state.show ? this.setState({show: true}) : this.setState({show: false})
  }
  handleShow = () => this.setState({show: true})

  handleSidebarHide = () => this.setState({show: false})



  componentDidMount(){
    axios.get(`http://localhost:4000/customers`)
    .then(res => {this.setState({
      Clients: res.data
    })})
  }

    render() {
      const { show } = this.state
        return (
            <Segment inverted >
                <Header as='h1' id='heading' align='center'>CSR DASHBOARD</Header>
            <Button color='black' size='large' name='align justify' onClick={this.handleHide}>Menu</Button>
                <Segment inverted align='right'>
                <Usermodal  />
                </Segment>
            
            <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            vertical
            onHide={this.handleSideBarHide}
            visible={show}
            >
                <Grid.Column align='right'>
                <Button color='black' size='large' name='align justify' onClick={this.handleHide}>Close</Button>
                </Grid.Column>
           </Sidebar>
            <Segment columns={4} >
              <Clients/>
            </Segment>
            <Segment>
              <Grid.Column align='center'>
                <GridRow>
                  <h1>Client List</h1>
                </GridRow>
                <Grid.Row>{this.state.Clients.map((client) => {
                  return(<Grid.Row>
                    <h1>{client.First}</h1>
                  </Grid.Row>)
                })}</Grid.Row>
              </Grid.Column>
            </Segment>

            </Segment>
        )
    }
}
