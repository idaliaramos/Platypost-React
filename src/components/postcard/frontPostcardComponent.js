import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react';

export default class FrontPostcardComponent extends Component {
  render() {
    return (
      <div>
        {/* <Header as="h1">Checkout</Header> */}
        <Header sub textAlign="left">
          PostCard Preview
        </Header>
        <Image
          size="big"
          src={`https://mailapp-backend-187406.appspot.com${this.props
            .S3UploadPublicPath}`}
        />
      </div>
    );
  }
}
