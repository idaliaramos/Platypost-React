import React from 'react';
import { Form, Container, Header } from 'semantic-ui-react';
const sizes = ['small'];
const AddressFormField = () =>
  <Container>
    <div>
      {/* <Header as="h1" textAlign="left">
        To:
      </Header> */}
    </div>
    <Form size={'small'} key={'small'}>
      <Form.Group>
        <Form.Input label="Name" placeholder="First Name" width={6} />
        <Form.Input label="Company" placeholder="Company" width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input label="Address Line 1 " placeholder="address" width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input label="Address Line 2 " placeholder="address" width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input label="City" placeholder="city" width={4} />
        <Form.Input label="State " placeholder="state" width={2} />
        <Form.Input label="Zip Code " placeholder="zipcode" width={2} />
      </Form.Group>
    </Form>
  </Container>;

export default AddressFormField;
