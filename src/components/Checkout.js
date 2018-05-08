import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';
export default class Checkout extends Component {
  fromUsdToCent = amount => amount * 100;
  successPayment = data => {
    this.props.toggleResponseModal(true);
  };

  errorPayment = data => {
    this.props.toggleResponseModal(false);
  };
  //OnToken makes a call to the backend with all of the information needed to authorize a payment and
  //and the information needed for the LOB API
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
