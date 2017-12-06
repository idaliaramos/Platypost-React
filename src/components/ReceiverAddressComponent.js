import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Form,
  Container,
  Divider,
  Header,
  Button,
  Image,
  Segment,
  Progress
} from 'semantic-ui-react';
const sizes = ['small'];

export default class ReceiverAddressComponent extends Component {
  static defaultProps = {
    onNext: () => {}
  };
  // would be better practice to put in the constructor
  constructor(props) {
    super(props);
    this.state = {
      receiverName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      message: ''
    };
  }

  _handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _handleClick = event => {
    event.preventDefault();
    console.log(this.state, 'this is the state');
    const {
      receiverName,
      addressLine1,
      addressLine2,
      city,
      state,
      zipcode,
      message
    } = this.state;

    this.props.onNext({
      receiverName: receiverName.trim(),
      addressLine1: addressLine1.trim(),
      addressLine2: addressLine2.trim(),
      city: city.trim(),
      state: state.trim(),
      zipcode: zipcode.trim(),
      message: message.trim()
    });
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
              name="receiverName"
              onChange={this._handleChange}
            />
            {/* <Form.Input label="Company" placeholder="Optional" width={6} /> */}
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 1 "
              placeholder="Optional"
              width={12}
              name="addressLine1"
              value={this.state.addressLine1.value}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 2 "
              placeholder="optional"
              width={12}
              name="addressLine2"
              value={this.state.addressLine2.value}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="City"
              placeholder="Optional"
              width={6}
              name="city"
              value={this.state.city.value}
              onChange={this._handleChange}
            />
            <Form.Input
              label="State "
              placeholder="Optional"
              width={6}
              name="state"
              value={this.state.state.value}
              onChange={this._handleChange}
            />
            <Form.Input
              label="Zip Code "
              placeholder="Optional"
              width={6}
              name="zipcode"
              value={this.state.zipcode.value}
              onChange={this._handleChange}
            />
          </Form.Group>

          <Form.TextArea
            label="PostCard Message"
            placeholder="Greetings From..."
            name="message"
            value={this.state.message.value}
            onChange={this._handleChange}
          />

          <Form.Button floated="left" basic color="grey">
            Back
          </Form.Button>
          <Form.Button
            floated="left"
            color="purple"
            onClick={this._handleClick}>
            Next
          </Form.Button>
        </Form>
        <Divider hidden />
      </div>
    );
  }
}
