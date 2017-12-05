import React from 'react';
import NavComponent from '../nav/NavComponent';
import SenderAddressComponent from '../SenderAddressComponent';
import SenderAddressPageLayout from './SenderAddressPageLayout';

export default function SenderAddressPage(props) {
  return (
    <div className="sendToPage">
      <SenderAddressPageLayout {...props}>
        <NavComponent />
        <SenderAddressComponent toAddress={props.toAddress} />
      </SenderAddressPageLayout>
    </div>
  );
}
