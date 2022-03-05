import React from "react";
import { Link } from "react-router-dom";
import "../userNav/UserNav.css";
 
const AdminNav = () => {
  return (
    <nav className="pt-3 alert alert-success">
      <ul className="usernav-ul pt-5">
        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/product">
            Create Product
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/products">
            All Products
          </Link>
        </li>

        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/category">
             Make
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/sub">
           Model
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/admin/coupon">
            Coupons
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/user/password">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
