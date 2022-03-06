import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripeCheckOut from '../components/stripeCheckout/StripeCheckOut'
import './stripe.css'

const promise = loadStripe(
  "pk_test_51KZzDFI2gRAMeCBXAUxB4kVeKuRsPPXQ0XGXaUugcjvhwgGlSunImg7XOpkMvugEZbtDC9rHiCH8rA3EWjIezc6E00dsl9rOw1"
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
