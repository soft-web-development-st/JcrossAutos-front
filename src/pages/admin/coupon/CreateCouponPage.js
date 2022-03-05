import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getCoupons,
  removeCoupons,
  createCoupons,
} from "../../../helpers/coupon";
import DatePicker from "react-date-picker";
// import 'react-date-picker/dist/react-datepicker.css';
import { DeleteOutlined } from "@ant-design/icons";
import AdminNav from "../../../components/adminNav/AdminNav";

const CreateCouponPage = () => {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState("");
  const [coupons, setCoupons] = useState([]);
  //redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getCoupons().then((res) => setCoupons(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCoupons({ name, expiry, discount }, user.token)
      .then((res) => {
        setLoading(false);
        getCoupons().then((res) => setCoupons(res.data));
        setName("");
        setDiscount("");
        setExpiry("");
        toast.success(`${res.data.name} is created`);
      })

        .catch((err) => console.log("coupon err", err));
      
  };

  const handleRemove = (couponId) => {

      setLoading(true);
      removeCoupons(couponId, user.token)
        .then((res) => {
          getCoupons().then((res) => setCoupons(res.data));
          setLoading(false);
          toast.error(`${res.data.name} Deleted`);
        })
        .catch((err) => console.log(err));
    
  };
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-3">
          <AdminNav />
        </div>
        <div className="col-md-9 pt-5">
          {loading ? (
            <h4 className="text-danger">loading...</h4>
          ) : (
            <h1 className="alert alert-danger">Coupons/Discount</h1>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-muted">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoFocus
                required
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Discount %</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                required
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Expiry</label> <br />
              <DatePicker
                className="form-control"
                selected={new Date()}
                value={expiry}
                onChange={(date) => setExpiry(date)}
                required
              />
            </div>
            <button className="btn btn-outline-danger">Save</button>
          </form>
          <br />
          {/* <h4>{coupons.length}</h4> */}
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Expiry</th>
                <th scope="col">Discount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((c) => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{new Date(c.expiry).toLocaleDateString()}</td>
                  <td>{c.discount}%</td>
                  <td
                    onClick={() => handleRemove(c._id)}
                    className="text-danger pointer"
                  >
                    <DeleteOutlined />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateCouponPage;
