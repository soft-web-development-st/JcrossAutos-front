import React from "react";
import { Drawer, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  const imageStyle = {
    width: "300px",
    height: "150px",
    objectFit: "cover",
  };
  return (
    <Drawer
      className="text-center drawer "
      title={`Cart / ${cart.length} Products`}
      onClose={() =>
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        })
      }
      visible={drawer}
    >
      {cart.map((p) => (
        <div key={p._id} className="row pt-5">
          <div className="col pt-2">
            {p.images[0] ? (
              <>
                <img src={p.images[0].url} style={imageStyle} />
                <p className="text-center alert alert-success">
                  {p.title} / Qty: {p.count}
                </p>
              </>
            ) : (
              <>
                <img src={p.images[0]} style={imageStyle} />
                <p className="text-center bg-secondary ">
                  {p.title} / {p.count}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
      <Link to="/cart">
        <button
          onClick={() =>
            dispatch({
              type: "SET_VISIBLE",
              payload: false,
            })
          }
          className="text-center btn btn-success btn-raised btn-block"
        >
          Go To Cart
        </button>
      </Link>
    </Drawer>
  );
};

export default SideDrawer;
