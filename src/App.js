// react import
import React, {    Fragment, lazy, Suspense, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'

// import auth
import { auth } from "./firebase";
import { useDispatch } from 'react-redux'
import { LoadingOutlined } from "@ant-design/icons";
// import current user

import { currentUser } from "./helpers/auth"

// protected route
import UserRoute from "./components/routes/UserRoute";
// admind route
import AdminRoute from "./components/routes/AdminRoute";

// import notification
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import pages
import Registration from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Header from "./components/header/Header";
import RegisterComplete from './pages/auth/RegisterComplete'
import ForgotPassword from "./pages/auth/ForgotPassword";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Whishlist from "./pages/user/Whishlist";
import Contact from "./pages/Contact";
// import admin category pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/category/CreateCategory";
import UpdateCategory from "./pages/admin/category/UpdateCategory";
//import admin sub-category pages
import subCreate from "./pages/admin/sub/subCreate";
import SubUdpate from "./pages/admin/sub/subUpdate";
// import product pages
import CreateProduct from "./pages/admin/product/CreateProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import AllProducts from "./pages/admin/product/AllProducts";

// import single product
import Product from "./pages/Product";
import CategoryHome from "./pages/category/Category";
import SubHome from "./pages/sub/SubHome";

// import shop
import Shop from "./pages/Shop";
// import cart
import Cart from "./pages/Cart";
// import sideDrawer
import SideDrawer from "./components/drawer/SideDrawer";
// checkout
import CheckOut from "./pages/CheckOut";

import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";

//payment
import Payment from "./pages/Payment";


//!!!!!!!!  using lazy loading !!!!!!!!!!!

// //protected route
// import UserRoute from "./components/routes/UserRoute";
// //admind route
// import AdminRoute from "./components/routes/AdminRoute";

// // import notification
// import {ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // import pages
// const  Registration = lazy(() => import( "./pages/auth/Register"))
// const  Login = lazy(() => import("./pages/auth/Login"))
// const Home = lazy(() => import("./pages/Home"));
// const Header = lazy(() => import ( "./components/header/Header"))
// const RegisterComplete = lazy(() => import ( "./pages/auth/RegisterComplete"))
// const ForgotPassword = lazy(() => import ( "./pages/auth/ForgotPassword"))
// const History = lazy(() => import("./pages/user/History"));
// const Password = lazy(() => import ( "./pages/user/Password"))
// const Whishlist = lazy(() => import ( "./pages/user/Whishlist"))
// const Contact = lazy(() => import ( "./pages/Contact"))
// // import admin category pages
// const AdminDashboard = lazy(() => import ( "./pages/admin/AdminDashboard"))
// const CreateCategory = lazy(() => import ( "./pages/admin/category/CreateCategory"))
// const UpdateCategory = lazy(() => import ( "./pages/admin/category/UpdateCategory"))
// //import admin sub-category pages
// const subCreate = lazy(() => import ( "./pages/admin/sub/subCreate"))
// const SubUdpate = lazy(() => import ( "./pages/admin/sub/subUpdate"))
// // import product pages
// const CreateProduct = lazy(() => import ( "./pages/admin/product/CreateProduct"))
// const UpdateProduct = lazy(() => import ( "./pages/admin/product/UpdateProduct"))
// const AllProducts = lazy(() => import ( "./pages/admin/product/AllProducts"))

// // import single product
// const Product = lazy(() => import ( "./pages/Product"))
// const CategoryHome = lazy(() => import ( "./pages/category/Category"))
// const SubHome = lazy(() => import ( "./pages/sub/SubHome"))

// // import shop
// const Shop = lazy(() => import ( "./pages/Shop"))
// // import cart
// const Cart = lazy(() => import ( "./pages/Cart"))
// // import sideDrawer
// const SideDrawer = lazy(() => import ( "./components/drawer/SideDrawer"))
// // checkout
// const CheckOut = lazy(() => import ( "./pages/CheckOut"))

// const CreateCouponPage = lazy(() => import ( "./pages/admin/coupon/CreateCouponPage"))

// //payment
// const Payment = lazy(() => import ( "./pages/Payment"))




function App() {
  
  // use dispatch
  const dispatch = useDispatch()

// to check firebase auth store when component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()

        console.log('user', user);
        
        currentUser(idTokenResult.token)
          .then((res) => {
            
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
            
          })
          .catch(err => console.log(err));
      }
    })
    // cleanup
    return() => unsubscribe()
  },[])

  return (
    <Fragment
    
        fallback={
          <div className="col alert alert-light text-center">
            __ JCROSS AUTO
            <LoadingOutlined className="text-center text-light" />
            ___
          </div>
        }
      >
        <Header />
        <ToastContainer />
        <SideDrawer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />
          <UserRoute exact path="/user/history" component={History} />
          <UserRoute exact path="/user/password" component={Password} />
          <UserRoute exact path="/user/wishlist" component={Whishlist} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute exact path="/admin/category" component={CreateCategory} />
          <AdminRoute
            exact
            path="/admin/category/:slug"
            component={UpdateCategory}
          />
          <AdminRoute exact path="/admin/sub" component={subCreate} />
          <AdminRoute exact path="/admin/sub/:slug" component={SubUdpate} />
          <AdminRoute exact path="/admin/product" component={CreateProduct} />
          <AdminRoute exact path="/admin/products" component={AllProducts} />
          <AdminRoute
            exact
            path="/admin/product/:slug"
            component={UpdateProduct}
          />
          <Route exact path="/product/:slug" component={Product} />
          <Route exact path="/category/:slug" component={CategoryHome} />
          <Route exact path="/sub/:slug" component={SubHome} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />

          <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
          <UserRoute exact path="/payment" component={Payment} />
        </Switch>
      </Fragment>
  
  );
}

export default App;
