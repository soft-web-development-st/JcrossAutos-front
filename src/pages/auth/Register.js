import React, { useState,useEffect } from "react";
import "./Register.css";
import { AiOutlineMail } from "react-icons/ai";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import registercar from '../../images/registercar.jpg'


const Register = ({history}) => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user) history.push("/");
  }, [user]);


  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
 

  const formSubmissionHandler = async (e) => {
    e.preventDefault();

    const config = {
      url: "https://159.223.220.218/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email has been sent to ${email}.`
    );

    window.localStorage.setItem("emailForRegistration", email);

    setEmail("");
    setFname('')
   
  };

  const registerForm = () => {
    return (
      <div>
        <form onSubmit={formSubmissionHandler} className="form-R">
          <label>Names</label>
          <input
            type="text"
            name="text"
            className="input"
            value={fname}
            onChange={fnameHandler}
            autoFocus
            placeholder="Enter your First name"
            required
          />
         
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="input"
            value={email}
            onChange={emailHandler}
            autoFocus
            placeholder="Enter your email"
            required
          />
          <AiOutlineMail className="p" />
          <button className="btnt registerbtn">Register</button>
        </form>
      </div>
    );
  };
  return (
  <> 
    <div className="register">
      <h1>Register</h1>
      <div>
        <img
          className="register_image"
          src={registercar}
          alt="logo"
        />
      </div>
      <div className="register__info">
        <h4 className="register__title">
          Registration Form <span className="star">*</span>
        </h4>

        {registerForm()}

        <p className="have_an_acount">
          Already have an account ? {""}
          <Link className="have_an_acount_login" to="/login">
            Login
          </Link>
        </p>
      </div>
      </div>
      <Footer/>
          </>

  );
};

export default Register;
