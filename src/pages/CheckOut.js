import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../helpers/user";
import { emptyUserCart } from "../helpers/user";
import { toast } from "react-toastify";
import { saveUserAddress, createCashOrderForUser } from "../helpers/user";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { applyCouponDiscount } from "../helpers/user";
import Footer from "../components/footer/Footer";
import { FaBullseye } from "react-icons/fa";

const CheckOut = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discountTotal, setDiscountTotal] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { user, COD } = useSelector((state) => ({ ...state }));
  const couponTrueOrFalse = useSelector((state) => (state.coupon));

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const handleEmptyCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    emptyUserCart(user.token).then((res) => {
      console.log("Deleted cart----> ", res);
      setProducts([]);
      setTotal(0);
      setDiscountTotal(0);
      setCoupon("");
      toast.success("Cart is empty . Continue Shopping");
    });
  };

  const saveAddressToDb = () => {
    saveUserAddress(address, user.token).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success(
          <p>
            Address Saved. <br />
            Proceed to Place Order
          </p>
        );
        setAddress("");
      }
    });
  };
  const showAddress = () => (
    <>
      <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <br />
      <button
        className=" btn btn-outline-success m-2 "
        onClick={saveAddressToDb}
      >
        Save
      </button>
    </>
  );

  const showProductSumarry = () =>
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} ({p.color}) x {p.count} ={" "}
          {p.product.price * p.count}
        </p>
      </div>
    ));

  const applyDiscountCoupon = () => {
    console.log("coupon to backend", coupon);
    applyCouponDiscount(user.token, coupon).then((res) => {
      if (res.data) {
        setDiscountTotal(res.data);
        // update redux store
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux store
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };
  const applyCoupon = () => (
    <>
      <input
        onChange={(e) => {
          setCoupon(e.target.value);
          setDiscountError("");
        }}
        type="text"
        className="form-control"
        value={coupon}
        placeholder="Apply your coupon here"
      />
      <button
        className="btn btn-outline-success m-2 "
        onClick={applyDiscountCoupon}
      >
        Apply
      </button>
    </>
  );

  const createCashOrder = () => {
    createCashOrderForUser(user.token, COD, couponTrueOrFalse).then((res) => {
      console.log("user cash order created ", res);
      if (res.data.ok) {
        if(typeof window !== 'undefined') localStorage.removeItem('cart')
        dispatch({
          type: 'ADD_TO_CART',
          payload: []
        })
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
        dispatch({
          type: "COD",
          payload: false,
        });

         emptyUserCart(user.token)

        setTimeout(() => {
          history.push('/user/history')
        },100)
      }
    });
  }

  return (
    // style in product Card
    <div className="row pt-5 check-out">
      <div className="col-md-6 pt-5 pb-5">
        <h4 className="alert alert-success">Delivery Address</h4>
        <br />
        {showAddress()}
        <div className="alert alert-danger">
          <h6 className="text-dark">IMPORTANT!!!</h6>
          <p className="text-dark ">
            Delivery Address must be filled and saved before proceeding to place
            order!!
          </p>
        </div>
        <hr />
        <h4 className="text-success">Got Coupon/Discount?</h4>
        {applyCoupon()}
        <br />
        {discountError && <p className="text-danger p-2">{discountError}</p>}
      </div>
      <div className="col-md-6 pt-5">
        <h4 className="alert alert-success">Order Sumarry</h4>
        <hr />
        <p className="text-success">Products {products.length}</p>
        <hr />
        {showProductSumarry()}
        <hr />
        <p>
          Cart Total : <b>{total}</b>{" "}
        </p>
        {discountTotal > 0 && (
          <div className="alert alert-success p-4">
            Discount Applied : Total Payble: ${discountTotal}
          </div>
        )}
        <div className="row checkout_btn">
          <div className="col-md-6">
            {COD ? (
              <button
                disabled={!addressSaved || !products.length}
                className="btn btn-success btn_placeOrder"
                onClick={createCashOrder}
              >
                Place Order
              </button>
            ) : (
              <button
                disabled={!addressSaved || !products.length}
                className="btn btn-success btn_placeOrder"
                onClick={() => history.push("/payment")}
              >
                Place Order
              </button>
            )}
          </div>
          <div className="col-md-6">
            <button
              disabled={!products.length}
              onClick={handleEmptyCart}
              className="btn btn-outline-danger "
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
