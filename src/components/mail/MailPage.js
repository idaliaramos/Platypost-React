import React from 'react';

import ReceiverAddressComponent from '../ReceiverAddressComponent';
import MailPageLayout from './MailPageLayout';
import NavComponent from '../nav/NavComponent';
import FrontPostcardComponent from '../postcard/FrontPostcardComponent';
import BackPostcardComponent from '../postcard/BackPostcardComponent';
import UploadComponent from '../upload/UploadComponent';

import Checkout from '../Checkout';
import TotalComponent from '../TotalComponent';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Progress,
  Button
} from 'semantic-ui-react';
export default function MailPage(props) {
  console.log(props);
  return (
    <div>
      <MailPageLayout>
        <NavComponent />
        <FrontPostcardComponent url={props.url || {}} />
        <BackPostcardComponent
          receiverInfo={props.receiverInfo || {}}
          senderInfo={props.senderInfo || {}}
          url={props.url || {}}
        />
        <TotalComponent />
        <Checkout
          name={'Postcard'}
          description={'postcard'}
          amount={1.75}
          receiverInfo={props.receiverInfo || {}}
          senderInfo={props.senderInfo || {}}
          url={props.url || {}}
        />
      </MailPageLayout>
    </div>
  );
}
