import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

// const fromUsdToCent = amount => amount * 100;
// const onToken = (
//   amount,
//   description,
//   receiverInfo,
//   senderInfo,
//   S3UploadUrl,
//   S3UploadPublicPath,
//   userId,
//   messageInfo,
// ) => token =>
//   axios
//     .post(PAYMENT_SERVER_URL, {
//       paymentInfo: {
//         description,
//         source: token.id,
//         currency: CURRENCY,
//         amount: fromUsdToCent(amount)
//       },
//       mailInfo: {
//         receiverInfo,
//         senderInfo,
//         S3UploadUrl,
//         S3UploadPublicPath,
//         userId,
//         messageInfo
//       }
//     })
//     .then(successPayment)
//     .catch(errorPayment);
//

//
// const errorPayment = data => {
//   console.log(data, 'data in error');
//   alert('Payment Error');
// };

export default class Checkout extends Component {
  fromUsdToCent = amount => amount * 100;
  successPayment = data => {
    //pseuydo code this.props.toggleResponseModal(true);
    this.props.toggleResponseModal();
    // console.log(this.props, 'props on success');
    // console.log(props);
    // toggleResponseModal();
    // console.log(
    //   this.props.toggleResponseModal,
    //   '<<<<<<<<<<<<<<<<<<< fn definition'
    // );
    // props.onSuccess();
    // alert('Payment Successful');

    //modal, redirect
    //set state to show modal
    //TODO:redirect to a success screen
  };

  errorPayment = data => {
    console.log(data, 'data in error');
    alert('Payment Error');
  };

  onToken = (
    amount,
    description,
    receiverInfo,
    senderInfo,
    S3UploadUrl,
    S3UploadPublicPath,
    userId,
    messageInfo
  ) => token =>
    axios
      .post(PAYMENT_SERVER_URL, {
        paymentInfo: {
          description,
          source: token.id,
          currency: CURRENCY,
          amount: this.fromUsdToCent(amount)
        },
        mailInfo: {
          receiverInfo,
          senderInfo,
          S3UploadUrl,
          S3UploadPublicPath,
          userId,
          messageInfo
        }
      })
      .then(this.successPayment)
      .catch(this.errorPayment);

  render() {
    const {
      name,
      description,
      amount,
      receiverInfo,
      senderInfo,
      S3UploadUrl,
      S3UploadPublicPath,
      userId,
      messageInfo,
      toggleResponseModal
    } = this.props;
    return (
      <StripeCheckout
        name={name}
        description={description}
        amount={this.fromUsdToCent(amount)}
        token={this.onToken(
          amount,
          description,
          receiverInfo,
          senderInfo,
          S3UploadUrl,
          S3UploadPublicPath,
          userId,
          messageInfo,
          toggleResponseModal
        )}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      />
    );
  }
}

// export default Checkout;
