import React from 'react'
import faker from 'faker'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const Usermodal = () => (
  <Modal trigger={<Button>Long Modal</Button>}>
    <Modal.Header>Profile</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={faker.internet.avatar()} />
      <Modal.Description>
        <Header>{}</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Usermodal 