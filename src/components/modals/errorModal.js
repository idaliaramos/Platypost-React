import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default class errorModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small">
        <Header icon="browser" content="Please try again!" />
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="/assets/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              Your Postcard was not sent. Please verify your address is correct
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> try again
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
