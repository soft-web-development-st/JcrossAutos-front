import React, { useEffect, useState } from "react";
import UserNav from "../../components/userNav/UserNav";
import "./history.css";
import { toast } from "react-toastify";
import { removeWishlist, getWishlist } from "../../helpers/user";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";

const Whishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadWishlist();
  }, []);
  const loadWishlist = () =>
    getWishlist(user.token).then((res) => {
      console.log(res);
      setWishlist(res.data.wishlist);
    });
  const handleRemove = (productId) =>
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
      
      toast.error(`Product has been deleted `)
    });
  return (
    <div className="history-container">
      <div className="history-row">
        <UserNav />
      </div>

      <div className="history-col pt-5">
        <h4 className="text-center text-success pt-5">Favourites</h4>
        {wishlist.map((p) => (
          <div key={p._id} className="alert alert-secondary">
            <Link to={`/product/${p.slug}`}>{p.title}</Link>
            <span
              onClick={() => handleRemove(p._id)}
              className="btn-sm float-right p-5"
            >
              <DeleteOutlined className="text-danger pointer" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whishlist;
