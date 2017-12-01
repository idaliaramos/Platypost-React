import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import AddressFormFieldComponent from './AddressFormFieldComponent';
storiesOf('Address', module).add('Onclick change to this', () =>
  <AddressFormFieldComponent />
);
