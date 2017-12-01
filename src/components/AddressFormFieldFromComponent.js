import React from 'react';
import { Form, Container } from 'semantic-ui-react';
const sizes = ['small'];
const AddressFormField = () =>
  // <Container>
  <Form size={'small'} key={'small'}>
    <Form.Group>
      <Form.Input label="Name" placeholder="Optional" width={6} />
      <Form.Input label="Company" placeholder="Optional" width={6} />
    </Form.Group>
    <Form.Group>
      <Form.Input label="Address Line 1 " placeholder="Optional" width={6} />
    </Form.Group>
    <Form.Group>
      <Form.Input label="Address Line 2 " placeholder="optional" width={6} />
    </Form.Group>
    <Form.Group>
      <Form.Input label="City" placeholder="Optional" width={4} />
      <Form.Input label="State " placeholder="Optional" width={2} />
      <Form.Input label="Zip Code " placeholder="Optional" width={2} />
    </Form.Group>
  </Form>;
{
  /* </Container>; */
}

export default AddressFormField;
