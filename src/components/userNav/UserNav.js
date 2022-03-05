import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";

const UserNav = () => {
  return (
    <nav className="pt-5">
      <ul className="usernav-ul pt-5">
        <li className="usernav-li">
          <Link className="usernav_link" to="/user/history">
            History
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/user/password">
            Password
          </Link>
        </li>
        <li className="usernav-li">
          <Link className="usernav_link" to="/user/wishlist">
            Favourites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
