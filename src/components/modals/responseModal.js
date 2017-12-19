import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default class ResponseModal extends Component {
  render() {
    let data = {};
    if (this.props.successModal) {
      data.imageSrc = `https://mailapp-backend-187406.appspot.com${this.props
        .S3UploadPublicPath}`;
      data.text = 'You can view shipping notifications under history';
      data.iconText = 'take me to see my history';
      data.headerContent = 'Postcard Sent!';
    } else {
      data.imageSrc = 'fail';
      data.text =
        'Your postcard was unable to send, please verify your information';
      data.iconText = 'try again';
      data.headerContent = 'Error';
    }
    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.closeModal}
        basic
        size="small">
        <Header icon="browser" content={data.headerContent} />
        {/* <Header icon="browser" content=data.headercontent/> */}
        <Modal.Content image>
          <Image wrapped size="medium" alt="postcard" src={data.imageSrc} />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            {data.text}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.closeModal} inverted>
            <Icon name="checkmark" /> {data.iconText}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
