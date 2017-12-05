import React from 'react';
import NavComponent from '../nav/NavComponent';
import SenderAddressComponent from '../SenderAddressComponent';
import MailToFromPageLayout from './MailToFromPageLayout';

export default function SenderInfoPage(props) {
  return (
    <div className="sendToPage">
      <NavComponent />
      <MailToFromPageLayout {...props}>
        <SenderAddressComponent toAddress={props.toAddress} />
      </MailToFromPageLayout>
    </div>
  );
}
