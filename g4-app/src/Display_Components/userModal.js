import React from 'react'
import Signup from './signup'
import { Button, Modal, Segment } from 'semantic-ui-react'

const Usermodal = () => (
  <Modal trigger={<Button>Customer Sign up</Button>}>
      <Signup/>
      <Segment></Segment>
  </Modal>
)

export default Usermodal 