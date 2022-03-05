import React, { useState, useEffect } from "react";
import "./forgotpassword.css";
import image from '../../images/pw.jpg'

//
import { useSelector } from "react-redux";

// react icons
import { AiOutlineMail } from "react-icons/ai";

// fire base hooks
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    
   const { user } = useSelector((state) => ({ ...state }));

   useEffect(() => {
     if (user) history.push("/");
   }, [user]);


    const passwordHandler = async(e) => {
        e.preventDefault()
        setLoading(true)

        const config = {
          url: "http://localhost:3000/login",
          handleCodeInApp: true,
        };
        
        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('');
                setLoading(false)
                toast.success('Check your email for passord Reset Link')
            
            }).catch((error) => {
                setLoading(false)
                toast.error(error.message)
                console.log("Error message in forgot password" , error);
        })
  };

  const registerForm = () => {
    return (
      <div>
        <form onSubmit={passwordHandler} className="forgot_form">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            placeholder="Enter your email"
            required
          />
          <AiOutlineMail className="f_e" />
          <button className="forgotpassowrd_btn">Submit</button>
        </form>
      </div>
    ); 
  };

  return (
    <div className="">
      <img src={image} className="f_img" alt="passord" />
      <div className="">
        <div className="">
          {!loading && (
            <h4 className="forgot_title">
              Forgot Password <span className="star">*</span>
            </h4>
          )}

          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
