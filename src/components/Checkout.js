// import React from 'react';
// import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';
//
// import STRIPE_PUBLISHABLE from '../constants/stripe';
// import PAYMENT_SERVER_URL from '../constants/server';
//
// const CURRENCY = 'USD';
//
// const fromUsdToCent = amount => amount * 100;
//
// const successPayment = data => {
//   console.log(data.data, 'this is the data');
//   alert('Payment Successful');
//   //by the time it gets here it already charged the card,
//   //data object has lob success, stripe sucess, all of the mail data
//   //TODO:redirect to a success screen
// };
//
// const errorPayment = data => {
//   console.log(data, 'data in error');
//   alert('Payment Error');
// };
//
// const onToken = (amount, description, receiverInfo, senderInfo, url) => token =>
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
//         url
//       }
//     })
//     .then(successPayment)
//     .catch(errorPayment);
//
// const Checkout = ({ name, description, amount }) =>
//   <StripeCheckout
//     name={name}
//     description={description}
//     amount={fromUsdToCent(amount)}
//     token={onToken(amount, description)}
//     currency={CURRENCY}
//     stripeKey={STRIPE_PUBLISHABLE}
//   />;
//
// export default Checkout;
import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
  console.log(data.data, 'this is the data');
  alert('Payment Successful');
  //by the time it gets here it already charged the card,
  //data object has lob success, stripe sucess, all of the mail data
  //TODO:redirect to a success screen
};

const errorPayment = data => {
  console.log(data, 'data in error');
  alert('Payment Error');
};

const onToken = (amount, description, receiverInfo, senderInfo, url) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      paymentInfo: {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromUsdToCent(amount)
      },
      mailInfo: {
        receiverInfo: receiverInfo,
        senderInfo: senderInfo,
        url: url
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
  url
}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUsdToCent(amount)}
    token={onToken(amount, description, receiverInfo, senderInfo, url)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />;

export default Checkout;
