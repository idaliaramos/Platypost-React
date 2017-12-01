import React from 'react';
import NavComponent from '../nav/NavComponent';
import AddressFormFieldComponent from './AddressFormFieldComponent';
import sentToFromPageLayout from './sendToFromPageLayout';
import DestinationCard from './DestinationCard';

export default function MailToPage(props) {
  return (
    <div className="sendToPage">
      <NavComponent />
      {/* <sentToFromPageLayout {...props}> */}
      <AddressFormFieldComponent toAddress={props.toAddress} />
      {/* </sentToFromPageLayout> */}
    </div>
  );
}
