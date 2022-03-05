import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckOut from "../components/cards/ProductCardInCheckOut";
import { userCart } from "../helpers/user";
import { FaShopify } from "react-icons/fa";

const Cart = ({ history }) => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    userCart(cart, user.token)
      .then((res) => {
        console.log("Cart Post Res", res);
        if (res.data.ok) {
          history.push("/checkout");
        }
      })
      .catch((err) => console.log("cart save error", err));
  };
  const saveCashOrderToDb = () => {
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("Cart Post Res", res);
        if (res.data.ok) {
          history.push("/checkout");
        }
      })
      .catch((err) => console.log("cart save error", err));
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row  cart_gird">
          <div className="col-md-8 pt-4 ">
            <h4 className="alert alert-success card_length text-success">
              Cart / {cart.length} Products
            </h4>
            {!cart.length ? (
              <p className="text-danger p-2">
                No product in cart.{" "}
                <Link className="alert alert-success text-success" to="/shop">
                  <FaShopify /> Shop Now
                </Link>
              </p>
            ) : (
              <div className="table-head">
                <table className="table  table-bordered ">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Color</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Shipping</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  {cart.map((p) => (
                    <ProductCardInCheckOut key={p._id} p={p} />
                  ))}
                </table>
              </div>
            )}
          </div>
          <div className="col-md-4 pt-4 oder_sumary">
            <h4 className="alert alert-success">Order Sumary</h4>
            <hr />
            <p>Products</p>
            {cart.map((c, i) => (
              <div key={i}>
                <p>
                  {c.title} * {c.count} = ${c.price * c.count}
                </p>
              </div>
            ))}
            <hr />
            Total: <b>${getTotal()}</b>
            <hr />
            {user ? (
              <>
                <button
                  onClick={saveOrderToDb}
                  className="btn btn-sm btn-success m-2 p-3"
                  disabled={!cart.length}
                >
                  Proceed to Checkout
                </button>
                <br />
                <button
                  onClick={saveCashOrderToDb}
                  className="btn btn-sm btn-danger m-2 p-3"
                  disabled={!cart.length}
                >
                  Pay Cash On Delivery
                </button>
              </>
            ) : (
              <>
                <Link
                  className=" btn btn-sm btn-success mt-2 pt-2 pl-2 pr-2"
                  to={{
                    pathname: "/login",
                    state: { from: "cart" },
                  }}
                >
                  Login to Checkout
                </Link>

                <br />

                <Link
                  className=" btn btn-sm btn-danger mt-2 pt-2 pl-2 pr-2"
                  to={{
                    pathname: "/login",
                    state: { from: "cart" },
                  }}
                >
                  Login to Place Order
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
