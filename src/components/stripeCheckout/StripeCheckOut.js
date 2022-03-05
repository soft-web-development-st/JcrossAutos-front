import React, { useEffect, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useSelector, useDispatch } from "react-redux";

import { createPaymentIntent } from "../../helpers/stripe";

import { Link } from "react-router-dom";

import { createOrder,emptyUserCart } from "../../helpers/user";

import { Card } from "antd";
import { DollarOutlined, CheckOutlined } from "@ant-design/icons";
import logo from "../../images/logo.jpeg";

const StripeCheckOut = ({ history }) => {
  const dispatch = useDispatch();
  const { user, coupon } = useSelector((state) => ({ ...state }));

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const [cartTotal, setCartTotal] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [payable, setPayable] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    createPaymentIntent(user.token, coupon).then((res) => {
      setClientSecret(res.data.client_secret);
      //   console.log("client_secret--->", res.data);

      setCartTotal(res.data.cartTotal);
      setTotalAfterDiscount(res.data.totalAfterDiscount);
      setPayable(res.data.payable);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
        },
      },
    });
    if (payload.error) {
      setError(`Paymnet failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      //empty user cart from redux n localstorage

      createOrder(payload, user.token).then(res => {
        if (res.data.ok) {
         //empty cart from localstorage
          if (typeof window !== 'undefined') localStorage.removeItem('cart')
          //empty cart from redux
          dispatch({
            type: 'ADD_TO_CART',
            payload: [],
          })
          /// reset coupon to false
          dispatch({
            type: 'COUPON_APPLIED',
            payload: false,
          })
          //empty cart form database
          emptyUserCart(user.token)
       }
     })

      console.log(JSON.stringify(payload, null, 4));
      setError(null);
      setProcessing(false);
      setSuccess(true);
    }
  };
  const handleChange = async (e) => {
    //listen for changes in the card elelment
    // and display any errors as the customer types their card detials
    setdisabled(e.empty); // disable pay button if errors
    setError(e.error ? e.error.message : "");
  };

  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  }; 

  return (
    <>
      {!success && (
        <div className="pt-5">
          {coupon && totalAfterDiscount !== undefined ? (
            <p className=" alert alert-success">{`Total after Discount: $${totalAfterDiscount}`}</p>
          ) : (
            <p className="alert alert-danger">No Discount Applied</p>
          )}
        </div>
      )}

      <div className="text-center pt-2">
        <Card
          cover={
            <img
              src={logo}
              style={{
                height: "150px",
                objectFit: "contain",
                marginBottom: "-30px",
                marginTop: "20px",
              }}
            />
          }
          actions={[
            <>
              <DollarOutlined className="text-danger" />
              <br /> Total: $ {cartTotal}
            </>,
            <>
              <CheckOutlined className="text-success" />
              <br /> Total Payable: $ {(payable / 100).toFixed(2)}
            </>,
          ]}
        />
      </div>
      <br />
      <p className={success ? "result-message" : "resulut-message hidden"}>
        <span className="text-success">Payment Successful .</span>{" "}
        <Link to="/user/history">See Purchase in your Dashboard</Link>
      </p>
      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || success}
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        <br />
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <br />
      </form>
    </>
  );
};

export default StripeCheckOut;
