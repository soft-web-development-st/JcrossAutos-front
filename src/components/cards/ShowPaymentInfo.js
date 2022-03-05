import React from "react";




const ShowPaymentInfo = ({ order, showStatus=true }) => {
  return (
    <div className="p-2 pb-2">
      <span>Order Id: {order.paymentIntent.id}</span> <br />
      <span>
        Amount : ${(order.paymentIntent.amount /= 100).toLocaleString("en-US")}
      </span>
      {"/ "}
      {/* <br /> */}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>{" "}
      {/* <br /> */}/
      <span>Method : {order.paymentIntent.payment_method_types[0]}</span>{" "}
      {/* <br /> */}/
      <span>Payment : {order.paymentIntent.status.toUpperCase()}</span>/{" "}
      <span>
        Ordered on :{" "}
        {new Date(order.paymentIntent.created * 1000).toLocaleDateString()}
      </span>{" "}
      {/* <br /> */}
      {showStatus && <span className="badge bg-secondary text-white">
        STATUS : {order.orderStatus}
      </span>}
    </div>
  );
};

export default ShowPaymentInfo;
