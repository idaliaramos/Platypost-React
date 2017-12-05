import React from 'react';
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
const ReceiverAddressComponent = () =>
  <div>
    {/* <Header as="h1" textAlign="left">
      To:
    </Header>
    <Divider hidden /> */}

    <Form size={'small'} key={'small'}>
      <Form.Group>
        <Form.Input label="Name" placeholder="Optional" width={12} />
        {/* <Form.Input label="Company" placeholder="Optional" width={6} /> */}
      </Form.Group>
      <Form.Group>
        <Form.Input label="Address Line 1 " placeholder="Optional" width={12} />
      </Form.Group>
      <Form.Group>
        <Form.Input label="Address Line 2 " placeholder="optional" width={12} />
      </Form.Group>
      <Form.Group>
        <Form.Input label="City" placeholder="Optional" width={6} />
        <Form.Input label="State " placeholder="Optional" width={6} />
        <Form.Input label="Zip Code " placeholder="Optional" width={6} />
      </Form.Group>

      <Form.TextArea label="PostCard Message" placeholder="Greetings From..." />
    </Form>
    <Divider hidden />

    <Form.Button floated="left" basic color="grey">
      Back
    </Form.Button>
    <Form.Button floated="left" color="purple">
      <NavLink exact to="/from">
        Next
      </NavLink>
    </Form.Button>
  </div>;

export default ReceiverAddressComponent;
