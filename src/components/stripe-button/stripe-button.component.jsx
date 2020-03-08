import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_4trcLKODVN4jy519hUXtZszM00r5cqKRQy';

   const onToken = token => {
      console.log(token);
      axios({
         url: '/payment',
         method: 'post',
         data: {
            amount: priceForStripe,
            token: token
         }
      }).then(res => {
         console.log(res);
      }).catch(err => {
         console.log('Payment Error: ', err);
         alert('There was an issue with your payment! Please make sure to use the provided credit card data');
      })
   };

   return (
      <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay now'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;