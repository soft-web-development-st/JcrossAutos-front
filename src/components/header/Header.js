import React, { useState } from "react";
import { FaHome, FaStore, FaPhone, FaUser } from "react-icons/fa";
import {
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLogout,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoLogoModelS } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Search from '../../components/forms/Search'
import MediaQuery from "react-responsive";

// dropdown
// import Dropdown from "../UI/Dropdown";

import "./Header.css";
import { NavLink } from "react-router-dom";

// antd
import { Badge } from "antd";

// access fire base
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// search form
// import Search from "../forms/Search";

import logo1 from "../../images/logo.jpeg";

const Header = () => {
  // logout function

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => {
    return { ...state };
  });
  let history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <>
      {/* bothStrap... */}
      <Navbar collapseOnSelect className="navBar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="logo_nav" href="#home">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo1}
                width="50"
                height="50"
                className="d-inline-block align-top img_logo"
              />{" "}
              <span className="j">J</span> <span className="cross">CROSS</span>{" "}
              <span className="motors">autos</span>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <li>
                  <NavLink to="/" className="header_link">
                    <IoLogoModelS className="icon home_car" /> Home
                  </NavLink>
                </li>
              </Nav.Link>
              <Nav.Link href="#link">
                <li>
                  <NavLink
                    activeClassName="showing"
                    to="/shop"
                    className="header_link"
                  >
                    <FaStore className="icon" /> Shop
                  </NavLink>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li>
                  <NavLink
                    activeClassName="showing"
                    to="/cart"
                    className="header_link"
                  >
                    <Badge
                      className="badge"
                      count={cart.length}
                      offset={[6, -19]}
                    ></Badge>
                    <AiOutlineShoppingCart className="icon" /> Cart
                  </NavLink>
                </li>
              </Nav.Link>
              <Nav.Link>
                {user && user.role === "subscriber" && (
                  <li>
                    <NavLink
                      activeClassName="showing"
                      to="/user/history"
                      className="header_link"
                    >
                      <FaUser className="icon" />
                      {user.email && user.email.split("@")[0]}
                    </NavLink>
                  </li>
                )}
                {user && user.role === "admin" && (
                  <li>
                    <NavLink
                      activeClassName="showing"
                      to="/admin/dashboard"
                      className="header_link"
                    >
                      <RiAdminFill className="icon" /> Dashboard
                    </NavLink>
                  </li>
                )}
              </Nav.Link>
              <Nav.Link href="#link">
                <li>
                  <NavLink
                    activeClassName="showing"
                    to="/contact"
                    className="header_link"
                  >
                    <FaPhone className="icon" /> Contact Us
                  </NavLink>
                </li>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <li>
                  {!user && (
                    <NavLink
                      activeClassName="showing"
                      to="/login"
                      className="header_link"
                    >
                      <AiOutlineLogin className="icon" /> Login
                    </NavLink>
                  )}
                </li>
              </Nav.Link>
              <Nav.Link href="#deets">
                <li>
                  {user && (
                    <NavLink
                      // className="logout"
                      to="/login"
                      onClick={logout}
                      className="header_link"
                    >
                      {" "}
                      <AiOutlineLogout className="icon" /> Logout
                    </NavLink>
                  )}
                </li>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <li>
                  {!user && (
                    <NavLink
                      activeClassName="showing"
                      className="header_link"
                      to="/register"
                    >
                      <AiOutlineUserAdd className="icon" /> Register
                    </NavLink>
                  )}
                </li>
              </Nav.Link>
            </Nav>{" "}

            <MediaQuery maxWidth={1000}>
              <Search/>
            </MediaQuery>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* End of boostrap */}

      {/* <div className="nav">
        <div className="nav_content">
          <div class="nav_logo">
            <img src={logo} alt="logo" />

            <p class="logo_slogan">International Car Dealer</p>
          </div>

          <ul className="nav_ul">
            <li>
              <NavLink to="/">
                <FaHome className="icon" /> Home
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="showing" to="/shop">
                <FaStore className="icon" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="showing" to="/cart">
                <Badge
                  className="badge"
                  count={cart.length}
                  offset={[9, 0]}
                ></Badge>
                <AiOutlineShoppingCart className="icon" /> Cart
              </NavLink>
            </li>
            {user && user.role === "subscriber" && (
              <li>
                <NavLink activeClassName="showing" to="/user/history">
                  <FaUser className="icon" />
                  {user.email && user.email.split("@")[0]}
                </NavLink>
              </li>
            )}
            {user && user.role === "admin" && (
              <li>
                <NavLink activeClassName="showing" to="/admin/dashboard">
                  <RiAdminFill className="icon" /> Dashboard
                </NavLink>
              </li>
            )}

            <li>
              {!user && (
                <NavLink activeClassName="showing" to="/login">
                  <AiOutlineLogin className="icon" /> Login
                </NavLink>
              )}
            </li>
            <li>
              {!user && (
                <NavLink activeClassName="showing" className="" to="/register">
                  <AiOutlineUserAdd className="icon" /> Register
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink className="logout" to="" onClick={logout}>
                  {" "}
                  <AiOutlineLogout className="icon" /> Logout
                </NavLink>
              )}
            </li>

            <span className="header_search">
              <Search />
            </span>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
