import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
  // this.props.onSuccess();
  alert('Payment Successful');

  //modal, redirect
  //set state to show modal
  //TODO:redirect to a success screen
};

const errorPayment = data => {
  console.log(data, 'data in error');
  alert('Payment Error');
};

const onToken = (
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
        amount: fromUsdToCent(amount)
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
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({
  name,
  description,
  amount,
  receiverInfo,
  senderInfo,
  S3UploadUrl,
  S3UploadPublicPath,
  userId,
  messageInfo
}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUsdToCent(amount)}
    token={onToken(
      amount,
      description,
      receiverInfo,
      senderInfo,
      S3UploadUrl,
      S3UploadPublicPath,
      userId,
      messageInfo
    )}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />;

export default Checkout;
