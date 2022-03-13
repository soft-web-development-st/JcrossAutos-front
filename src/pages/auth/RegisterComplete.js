import React, { useState, useEffect } from "react";
import "./registrationcomplete.css";

import { useDispatch, useSelector } from "react-redux";
import c from '../../images/c.jpg'

import { BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

import axios from "axios";

 

// import from helper function
import createOrUpdateUser from "../../helpers/auth";


const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const { user } = useSelector((state) => ({ ...state }));

   let dispatch = useDispatch();

  useEffect(() => {
      setEmail(window.localStorage.getItem("emailForRegistration"));
   
  }, []);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmissionHandler = async (e) => {
      e.preventDefault();

      if (!email || !password) {
          toast.error('Email and password is required')
          return;
      }
      if (password.length < 6) {
          toast.error('Password must be atleast 6 characters long')
          return;
      }
      try {
          const result = await auth.signInWithEmailLink(email, window.location.href) 
          if (result.user.emailVerified) {
            // remove user email forim local storage
              window.localStorage.removeItem("emailForRegistration");
            // get user id token
              let user = auth.currentUser
              await user.updatePassword(password)
              const idTokenResult = await user.getIdTokenResult();
            //redux store
            console.log('user', user, 'idtokenResult', idTokenResult);
            
            createOrUpdateUser(idTokenResult.token)
              .then((res) => {
                {
                  dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                      name: res.data.name,
                      email: res.data.email,
                      token: idTokenResult.token,
                      role: res.data.role,
                      _id: res.data._id,
                    },
                  });
                }
              })
              .catch(err => console.log(err));
            
            // redirect
            history.push('/')
          }
      }
      catch (error) {
          console.log(error);
          toast.error(error.message)
      }
  };

  const coompleteRegisterForm = () => {
    return (
      <div>
        <form onSubmit={formSubmissionHandler} className="completeRegistration_form">
          <input
            type="email"
            name="email"
            className="input"
            value={email}
            onChange={emailHandler}
            placeholder="Enter your email"
            required
           
          />

          <AiOutlineMail className="p" />
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={passwordHandler}
            autoFocus
            placeholder="Enter your password"
          
          />
          <BsLock className="p" />
          <button className="btn complete_btn">Complete Registration</button>
        </form>
      </div>
    );
  };
  return (
    <div className="completeregistration">
      <img className="complete_image" src={ c}alt="" />
      <div className="registrationComplete_info">
        <div className="">
          <h4 className="registerComplete__title">
            Register Complete <span className="star">*</span>
          </h4>

          {coompleteRegisterForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
