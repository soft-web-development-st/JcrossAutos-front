import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripeCheckOut from '../components/stripeCheckout/StripeCheckOut'
import './stripe.css'

const promise = loadStripe(
  "pk_live_51KZzDFI2gRAMeCBXdQnXkPhPfmgd6gDYdPC4xtMFTyHWNEgNAcQnzlxgV8n3ycIOhGrr0n040efkBohQYOhPuygp00J3ufLdj5"
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
