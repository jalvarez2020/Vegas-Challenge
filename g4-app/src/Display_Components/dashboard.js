import React, { Component } from 'react'
import Usermodal from './userModal'
import Clients from './search'
import Clientlist from './clientlist'
import '../index.css';
import {
  Button,
  Header,
  Menu,
  Grid,
  Segment,
  Sidebar,
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





  componentWillUpdate() {
      console.log('COMPONENT WILL MOUNT')
  }

    render() {
      const { show } = this.state
        return (
            <Segment inverted >
                <Header as='h1' id='heading' align='center'>CSR DASHBOARD</Header>
                <Button color='black' size='large' name='align justify' onClick={this.handleHide}>Menu</Button>
                <Usermodal />
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
              <Clients />
            </Segment>
            <Segment>
              <Grid.Column align='center'>
                <GridRow>
                  <h1>Client List</h1>
                </GridRow>
                <Clientlist />
              </Grid.Column>
            </Segment>
            </Segment>
        )
    }
}
