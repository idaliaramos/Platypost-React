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
    onChange: () => {},
    onNext: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      errorCheck: false
    };
  }

  _handleChange = event => {
    this.props.receiverInfo[event.target.name] = event.target.value;
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
    if (
      this.props.receiverInfo.address_line1 &&
      this.props.receiverInfo.address_state &&
      this.props.receiverInfo.address_zip &&
      this.props.receiverInfo.address_city
    ) {
      this.props.onNext();
    } else {
      this.setState({
        errorCheck: true
      });
      this.render();
    }
  };

  render() {
    return (
      <div>
        {/* {/ <Header as="h1" textAlign="left">
To:
</Header>
<Divider hidden /> /} */}
        <Form size={'small'} key={'small'}>
          <Form.Group>
            <Form.Input
              label="Name"
              placeholder="Optional"
              width={12}
              name="name"
              value={this.props.receiverInfo.name}
              onChange={this._handleChange}
            />
            {/* <Form.Input label="Company" placeholder="Optional" width={6} /> */}
          </Form.Group>
          <Form.Group>
            <Form.Input
              required
              label="Address Line 1 "
              placeholder="address line 1"
              width={12}
              name="address_line1"
              value={this.props.receiverInfo.address_line1}
              onChange={this._handleChange}
              error={
                !this.props.receiverInfo.address_line1 && this.state.errorCheck
                  ? true
                  : false
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 2 "
              placeholder="address line 2"
              width={12}
              name="address_line2"
              value={this.props.receiverInfo.address_line2}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required
              label="address_city"
              placeholder="city"
              width={6}
              name="address_city"
              value={this.props.receiverInfo.address_city}
              onChange={this._handleChange}
              error={
                !this.props.receiverInfo.address_city && this.state.errorCheck
                  ? true
                  : false
              }
            />
            <Form.Input
              required
              label="State "
              placeholder="state"
              width={6}
              name="address_state"
              value={this.props.receiverInfo.address_state}
              onChange={this._handleChange}
              error={
                !this.props.receiverInfo.address_state && this.state.errorCheck
                  ? true
                  : false
              }
            />
            <Form.Input
              required
              label="Zip Code "
              placeholder="zipcode"
              width={6}
              name="address_zip"
              value={this.props.receiverInfo.address_zip}
              onChange={this._handleChange}
              error={
                !this.props.receiverInfo.address_zip && this.state.errorCheck
                  ? true
                  : false
              }
            />
          </Form.Group>

          <Form.TextArea
            label="PostCard Message"
            placeholder="Greetings From..."
            name="message"
            value={this.props.receiverInfo.message}
            onChange={this._handleChange}
          />
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
