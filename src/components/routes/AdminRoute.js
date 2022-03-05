import React,{useEffect, useState} from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading";
import { currentAdmin } from "../../helpers/auth";

const AdminRoute = ({ children, ...rest }) => {
    const { user } = useSelector((state) => ({ ...state }));
    
    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (user && user.token) {
            currentAdmin(user.token).then(res => {
               console.log('CURRENT ADMIN RES', res);
               setOk(true)
            }).catch(err => {
                console.log('ADMIN ROUTE RES',err);
                setOk(false)
           })
        }
    }, [user])

  return ok ?(
    <Route {...rest} />
  ) : (
    <Loading />
  );
};

export default AdminRoute;
