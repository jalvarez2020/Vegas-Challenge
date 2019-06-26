import React, { Component } from 'react'
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
} from 'semantic-ui-react'

export default class Dashboard extends Component {
  state = {
    show: false,
  }

  handleHide = () => {
    !this.state.show ? this.setState({show: true}) : this.setState({show: false})
  }
  handleShow = () => this.setState({show: true})

  handleSidebarHide = () => this.setState({show: false})

    render() {
      const { show } = this.state
        return (
            <Segment inverted >
                <Header as='h1' id='heading' align='center'>Customer Dashboard</Header>
            <Icon  size='large' name='align justify' onClick={this.handleHide} />
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
                <Icon size='large' name='align justify' align='right' onClick={this.handleHide} inverted />
                </Grid.Column>
           </Sidebar>
            <Segment columns={4} >
              <Clients/>
            </Segment>
            </Segment>
           
        )
    }
}
