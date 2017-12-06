import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Form,
  Container,
  Header,
  Divider,
  Button,
  Progress
} from 'semantic-ui-react';
const sizes = ['small'];
export default class SenderAddressComponent extends Component {
  static defaultProps = {
    onNext: () => {}
  };

  _handleClick = event => {
    event.preventDefault();
    this.props.onNext();
  };
  render() {
    return (
      <Container>
        <Divider hidden />
        <Divider hidden />
        <div>
          {/* <Header as="h1" textAlign="left">
        From:(optional)
      </Header> */}
          {/* <Divider hidden /> */}

          <Form size={'small'} key={'small'}>
            <Form.Group>
              <Form.Input label="Name" placeholder="First Name" width={6} />
              <Form.Input label="Company" placeholder="Company" width={6} />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address Line 1 "
                placeholder="address"
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address Line 2 "
                placeholder="address"
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input label="City" placeholder="city" width={4} />
              <Form.Input label="State " placeholder="state" width={2} />
              <Form.Input label="Zip Code " placeholder="zipcode" width={2} />
            </Form.Group>
          </Form>
          <Divider hidden />

          <Button floated="left" basic color="grey">
            Back
          </Button>
          <Button floated="left" color="purple">
            <NavLink exact to="/mail">
              Next
            </NavLink>
          </Button>
        </div>
      </Container>
    );
  }
}
