import React from 'react';

import ReceiverAddressComponent from '../ReceiverAddressComponent';
import MailToFromPageLayout from './MailToFromPageLayout';

import NavComponent from '../nav/NavComponent';
import FrontPostcardComponent from '../postcard/FrontPostcardComponent';
import Checkout from '../Checkout';
import TotalComponent from '../TotalComponent';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Header
} from 'semantic-ui-react';
export default function ReceiverAddressForm(props) {
  // console.log(this.props, 'this props rec add form');
  return (
    <div className="ReceiverAddressForm">
      <MailToFromPageLayout>
        <FrontPostcardComponent S3UploadPublicPath={props.S3UploadPublicPath} />
        <ReceiverAddressComponent
          onNext={props.onNext}
          onPrevious={props.onPrevious}
          onChange={props.onChange}
          receiverInfo={props.receiverInfo || {}}
        />
      </MailToFromPageLayout>
    </div>
  );
}
