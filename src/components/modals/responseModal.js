import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default class ResponseModal extends Component {
  // state = { modalOpen: true };

  render() {
    return (
      <Modal
        // trigger={this.props.modalOpen}
        open={this.props.modalOpen}
        onClose={this.props.closeModal}
        // open={this.state.modalOpen}
        // onClose={this.handleClose}
        basic
        size="small">
        <Header icon="browser" content="Postcard Sent!" />
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            alt="postcard"
            src="/assets/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>You can view shipping notifications under history</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.closeModal} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
