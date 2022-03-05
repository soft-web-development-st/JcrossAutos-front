import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {

 

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th >Title</th>
          <th >Price</th>
          <th >Brand</th>
          <th >Color</th>
          <th >Quantity</th>
          <th >Shipping</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map((p, i) => (
          <tr key={p}>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>{p.brand}</td>
            <td>{p.color}</td>
            <td>{p.count}</td>
            <td>
              {p.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id} className="row pb-2 pt-5">
          <div className=" btn-block-bg-light">
            <ShowPaymentInfo order={order} showStatus={false} />
            <div className="row pt-3">
              <div className="col-md-4">
                <b>Delivery Status :</b>{" "}
              </div>
              <div className="col-md-8 pb-3">
                <select
                  className={
                    order.orderStatus === "Completed"
                      ? "text-success form-control"
                      : "form-control"
                  }
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  <option value="Not Processed">Not Processed</option>
                  <option value="Processing">Processing</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            {JSON.stringify(order.products[0].product, null,4)}
            {/* {showOrderInTable(order)} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
