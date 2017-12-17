import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default class responseModal extends Component {
  state = { modalOpen: false };

  render() {
    return (
      <Modal
        trigger={this.props.modalOpen}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small">
        <Header icon="browser" content="Postcard Sent!" />
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="/assets/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>You can view shipping notifications under history</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
