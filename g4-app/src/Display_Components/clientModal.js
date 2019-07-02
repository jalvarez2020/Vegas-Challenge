import React from 'react'
import Clientupdate from './clientupdate'
import { Button, Modal, Segment, Header } from 'semantic-ui-react'

const ClientModal = (props) => (
  <Modal trigger={<Button size='extra small' color='green'>Update</Button>}>
    <Segment>
        <Header as='h1' content='Update Client Information'  textAlign='center'/> </Segment>
        <Clientupdate client={props.client}/>
    <Segment textAlign='center'><h4>CSR DASHBOARD</h4></Segment>
  </Modal>
)

export default ClientModal 