import React, { Component } from 'react'
import axios from 'axios'
import {Modal, Button, Segment, Header} from 'semantic-ui-react'

export default class Clientupdate extends Component {
    state = {
        show: false,
        Client: {}
      }

 

      handleUpdate = (e) => {
        const id = e.target.id
        axios.put(`http://localhost:4000/customer/${id}`)
        .then(res => console.log(res.data.message))
      }
  
    
      handleHide = () => {
        !this.state.show ? this.setState({show: true}) : this.setState({show: false})
      }

    render() {
      console.log("CLIENT", this.props.client)
        return (
            <Modal trigger={<Button>Update Client Information</Button>}>
            <Segment>
                <Header as='h1' content='Sign Up New Customer'  textAlign='center'/> </Segment>
            <Segment textAlign='center'></Segment>
          </Modal>
        )
    }
}
