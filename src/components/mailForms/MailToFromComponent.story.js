import React from 'react';
import { storiesOf } from '@storybook/react';

import MailToFromPageLayout from './MailToFromPageLayout';
import ReceiverAddressComponent from '../ReceiverAddressComponent';
import NavComponent from '../nav/NavComponent';
import ReceiverAddressPage from './../mailForms/ReceiverAddressPage';
import SenderAddressPage from './../mailForms/SenderAddressPage';
storiesOf('Receiver/Sender Address Page', module)
  .add('Address pages, to and from', () =>
    <div>
      <ReceiverAddressPage />
    </div>
  )
  .add('SenderPage', () =>
    <div>
      <SenderAddressPage />
    </div>
  );
