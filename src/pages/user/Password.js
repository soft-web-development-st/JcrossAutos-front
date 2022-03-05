import React, { useState } from "react";
import UserNav from "../../components/userNav/UserNav";
import "./history.css";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password Updated");
      })
      .catch((err) => {
        setLoading(false);
        setPassword("");
        toast.error(err.message);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col-10 ">
          <h4 className="text-center">
            Password Update!!
            <span className="underline"></span>
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="form_password ">
              <label>
                {loading ? (
                  <h2 className="loading">Laoding....</h2>
                ) : (
                  <h4>
                    Your Password <span>*</span>
                  </h4>
                )}
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password (1-6 characters)"
                disabled={loading}
                autoFocus
                value={password}
              />
              <button
                className="password_btn"
                disabled={!password || password.length < 6 || loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
