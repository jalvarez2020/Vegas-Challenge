import React from 'react'
import Signup from './signup'
import { Button, Modal, Segment, Header } from 'semantic-ui-react'

const Usermodal = () => (
  <Modal trigger={<Button>Customer Sign up</Button>}>
    <Segment>     <Header as='h1' content='Sign Up New Customer'  textAlign='center'/> </Segment>
      <Signup/>
      <Segment></Segment>
  </Modal>
)

export default Usermodal 