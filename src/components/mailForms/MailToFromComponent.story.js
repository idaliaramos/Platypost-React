import React from 'react';
import { storiesOf } from '@storybook/react';

import MailToFromPageLayout from './MailToFromPageLayout';
import ReceiverAddressComponent from '../ReceiverAddressComponent';
import NavComponent from '../nav/NavComponent';
import ReceiverAddressForm from './../mailForms/ReceiverAddressForm';
import SenderAddressForm from './../mailForms/SenderAddressForm';
storiesOf('Receiver/Sender Address Page', module)
  .add('Address pages, to and from', () =>
    <div>
      <ReceiverAddressForm />
    </div>
  )
  .add('SenderPage', () =>
    <div>
      <SenderAddressForm />
    </div>
  );
