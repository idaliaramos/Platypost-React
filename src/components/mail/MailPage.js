import React from 'react';

import ReceiverAddressComponent from '../ReceiverAddressComponent';
import MailPageLayout from './MailPageLayout';
import NavComponent from '../nav/NavComponent';
import FrontPostcardComponent from '../postcard/FrontPostcardComponent';
import BackPostcardComponent from '../postcard/BackPostcardComponent';

import Checkout from '../../Checkout';
import TotalComponent from '../TotalComponent';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Progress
} from 'semantic-ui-react';
export default function MailPage(props) {
  return (
    <div>
      <MailPageLayout>
        <NavComponent />
        <FrontPostcardComponent />
        <BackPostcardComponent />
        <TotalComponent />
        <Checkout
          name={'The Road to learn React'}
          description={'Only the Book'}
          amount={1}
        />
      </MailPageLayout>
    </div>
  );
}
