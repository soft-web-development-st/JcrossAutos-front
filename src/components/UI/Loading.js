import React, { useState, useEffect } from "react";
import './Loading.css'

import { useHistory } from "react-router-dom";

const Loading = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    },1000);
    // redirect
    count === 0 && history.push("/login");
    return () => clearInterval(interval);
  }, [count]);
  return <div className="count">Redirecting you in {count} seconds</div>;
};

export default Loading;
