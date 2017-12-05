import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import ReceiverAddressComponent from './ReceiverAddressComponent';
storiesOf('Address', module).add('Onclick change to this', () =>
  <ReceiverAddressComponent />
);
