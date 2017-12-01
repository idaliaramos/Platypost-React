import React from 'react';
import { storiesOf } from '@storybook/react';

import MailToFromPageLayout from './MailToFromPageLayout';
import AddressFormFieldComponent from '../AddressFormFieldComponent';
import NavComponent from '../nav/NavComponent';

storiesOf('Address Layout', module).add('Happy Path', () =>
  <div>
    <NavComponent />
    <MailToFromPageLayout>
      <AddressFormFieldComponent />
    </MailToFromPageLayout>
  </div>
);
