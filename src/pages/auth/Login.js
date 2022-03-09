import React, { useState, useEffect } from "react";
import "./login.css";
import car from '../../images/car6.raw'
// import axios

import axios from "axios";

//
import { useDispatch, useSelector } from "react-redux";

// react icons
import { AiOutlineGoogle, AiOutlineMail } from "react-icons/ai";
import { BsLock, BsMailbox } from "react-icons/bs";

// fire base hooks
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
// import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

// import from helper functoin
import createOrUpdateUser from "../../helpers/auth";

import { LoadingOutlined } from "@ant-design/icons";
import Footer from "../../components/footer/Footer";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  
  const { user } = useSelector((state) => ({ ...state }));
  
  useEffect(() => {
     let intended = history.location.state;
     if (intended) {
       return
      } else {
       if (user && history.token) history.push("/");
     }
   }, [user,history]);
   
  let dispatch = useDispatch();
  
  // role base redirect when logged in
  const roleBasedRedirect = (res) => {
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === "admin") {
        history.push("/");
      } else {
        history.push("/user/history");
      }
    } 
  };


 

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const disabledHandler = () => {
    if (!email.includes("@") || password.length < 6) {
      toast.error("Enter a valid email or password");
    }
  };

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
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
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));

      // history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }

    setEmail("");
    setPassword("");
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

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
              roleBasedRedirect(res);
            }
          })
          .catch((err) => console.log(err));
        history.push("/");
      })
      .catch((err) => {
        setLoading(false)
      });
  };

  const loginForm = () => {
    return (
      <div>
        <form onSubmit={formSubmissionHandler} className="login-form main_form">
          <input
            type="email"
            name="email"
            className="input"
            value={email}
            onChange={emailHandler}
            autoFocus
            placeholder="Enter your email"
            // required
          />
          <AiOutlineMail className="login_icon e" />
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={passwordHandler}
            placeholder="Enter your password"
            // required
          />
          <BsLock className="login_icon go" />
          <div className="form-btn">
            <button
              // disabled={!email}
              onClick={disabledHandler}
              className="login_btn"
            >
              <AiOutlineMail /> Login With Email & Password
            </button>

            <button onClick={googleLogin} className="google_btn">
              <AiOutlineGoogle /> Login With Google
            </button>
          </div>
        </form>
      </div>
    );
  };
  return (
    <>
      <div className="login-card">
        <h1>Login</h1>

        <img src={car} className="login_image" alt="car" />
        <div className="login-card-contents">
          <div className="login_title">
            {!loading ? (
              <h4 className="login_i">
                Login From <span className="star">*</span>
              </h4>
            ) : (
              <LoadingOutlined className="loading" />
            )}

            {loginForm()}
          </div>
          <p>
            Don't have an account ?{" "}
            <Link className="dont_have_account" to="/register">
              Register
            </Link>
          </p>
          <Link to="/forgot/password" className="login_forgot">
            Forgot Password ?
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
