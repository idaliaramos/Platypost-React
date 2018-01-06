import React, { Component } from 'react';

import { Form, Divider } from 'semantic-ui-react';

export default class SenderAddressComponent extends Component {
  static defaultProps = {
    onChange: () => {},
    onNext: () => {}
  };

  _handleChange = event => {
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
    this.props.onChange({
      [event.target.name]: event.target.value
    });
  };
  _handleClickBack = event => {
    event.preventDefault();
    this.props.onPrevious();
  };

  _handleClick = event => {
    event.preventDefault();
    this.props.onNext();
  };
  render() {
    return (
      <div>
        {/* <Header as="h1" textAlign="left">
      To:
    </Header>
    <Divider hidden /> */}

        <Form size={'small'} key={'small'}>
          <Form.Group>
            <Form.Input
              label="Name"
              placeholder="Optional"
              width={12}
              name="name"
              value={this.props.senderInfo.name}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 1 "
              placeholder="Optional"
              width={12}
              name="address_line1"
              value={this.props.senderInfo.address_line1}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 2 "
              placeholder="optional"
              width={12}
              name="address_line2"
              value={this.props.senderInfo.address_line2}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="address_city"
              placeholder="Optional"
              width={6}
              name="address_city"
              value={this.props.senderInfo.address_city}
              onChange={this._handleChange}
            />
            <Form.Input
              label="State "
              placeholder="Optional"
              width={6}
              name="address_state"
              value={this.props.senderInfo.address_state}
              onChange={this._handleChange}
            />
            <Form.Input
              label="Zip Code "
              placeholder="Optional"
              width={6}
              name="address_zip"
              value={this.props.senderInfo.address_zip}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Button
              floated="left"
              basic
              color="grey"
              onClick={this._handleClickBack}>
              Back
            </Form.Button>
            <Form.Button
              floated="left"
              color="purple"
              onClick={this._handleClick}>
              Next
            </Form.Button>
          </Form.Group>
        </Form>
        <Divider hidden />
      </div>
    );
  }
}
