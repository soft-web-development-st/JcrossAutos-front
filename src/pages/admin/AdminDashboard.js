import React, { useEffect, useState } from "react";
import AdminNav from "../../components/adminNav/AdminNav";
import { getOrders, changeStatus } from "../../helpers/admin";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Orders from "../../components/orders/Orders";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getOrders(user.token).then((res) => {
      // console.log(JSON.stringify(res.data, null,4));
      setOrders(res.data);
    }); 
  };

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Status Updated");
      loadOrders();
    });
  };
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-3">
          <AdminNav />
        </div>

        <div className="col-9">
          <h4 className=" text-center p-2 text-success">Admin Dashboard</h4>
          <Orders orders={orders} handleStatusChange={handleStatusChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
