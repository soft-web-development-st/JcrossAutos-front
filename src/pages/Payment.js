import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripeCheckOut from '../components/stripeCheckout/StripeCheckOut'
import './stripe.css'

const promise = loadStripe(
  'pk_test_51KONMGGhU3eDJ5ec3yAXCSUcvVhJuzohOPU96V05KUNtxfe4qwPvdeswzcxS56KvEr4lwDYFaupq0ZzMJI9gswV900VicpjLO0'
);


const Payment = () => {
    return (
        <div className="container p-5 text-center">
            <h4>Complete Your Purchase</h4>
        <Elements stripe={promise}>
          <div className="col-md-8 offset-md-2"><StripeCheckOut/></div> 
        </Elements>
      </div>
    );
}

export default Payment
