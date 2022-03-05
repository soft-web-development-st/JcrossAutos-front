import React, { useState, useEffect } from "react";
import UserNav from "../../components/userNav/UserNav";
import "./history.css";
import { getUserOrders } from "../../helpers/user";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import Pdf from 'react-to-pdf'
// import { PDFViewer } from "@react-pdf/renderer";

const ref = React.createRef();

const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserOrders();
  }, []);

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      // console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showOrderInTable = (order) => (
    <div className="table-head">
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Color</th>
            <th scope="col">Quantity</th>
            <th scope="col">Shipping</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((p, i) => (
            <tr key={i}>
              <td>
                <b>{p.product.title}</b>
              </td>

              <td>{p.product.price}</td>
              <td>{p.product.brand}</td>
              <td>{p.color}</td>
              <td>{p.count}</td>
              <td>
                {p.product.shipping === "Yes" ? (
                  <CheckCircleOutlined style={{ color: "green" }} />
                ) : (
                  <CloseCircleOutlined style={{ color: "red" }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const showEachOrders = () =>
    orders.reverse().map((order, i) => (
      <div key={i} className=" m-4 p-3 card text-center">
        <ShowPaymentInfo order={order} />
        {showOrderInTable(order)}

        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    ));
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-2 ">
          <UserNav />
        </div>
        <div className="col text-center pt-5">
          {orders.length > 0 ? (
            <h4 className="alert alert-success p-3">User Purchase Orders</h4>
          ) : (
            <h5 className="alert alert-danger p-3">No purchase orders</h5>
          )}
          <h4>{showEachOrders()}</h4>
        </div>
      </div>
    </div>
  );
};

export default History;
