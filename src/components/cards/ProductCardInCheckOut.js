import React from "react";
import ModalImage from "react-modal-image-responsive";
import car from "../../images/car6.raw";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {CheckCircleOutlined,CloseCircleOutlined,CloseOutlined} from '@ant-design/icons'


const ProductCardInCheckOut = ({ p }) => {
  const colors = ["Black", "Brown", "Gray", "White", "Blue", "Red"];

  let dispatch = useDispatch();
  const handleColorChange = (e) => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

    const handleQtyChange = (e) => {

    
        let count = e.target.value < 1 ? 1 : e.target.value;

        if (count > p.quantity) {
            toast.error(`Max available Quantity is ${p.quantity}`)
            return
        }
      
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].count = count
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

    const handleRemove = () =>{
        // console.log(p._id);
         let cart = [];
         if (typeof window !== "undefined") {
           if (localStorage.getItem("cart")) {
             cart = JSON.parse(localStorage.getItem("cart"));
           }
           cart.map((product, i) => {
             if (product._id === p._id) {
               cart.splice(i,1) 
             }
           });
           localStorage.setItem("cart", JSON.stringify(cart));
           dispatch({
             type: "ADD_TO_CART",
             payload: cart,
           });
         }
    }
 
  return (
    <tbody className="table_body">
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={car} large={car} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>{p.price}</td>
        <td>{p.brand}</td>
        <td>
          <select name="color" onChange={handleColorChange} className="">
            {p.color ? <option>{p.color}</option> : <option>Select</option>}
            {colors
              .filter((c) => c !== p.color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQtyChange}
          />
        </td>
              <td>{ p.shipping === "Yes" ? <CheckCircleOutlined className="text-success"/> : <CloseCircleOutlined className="text-danger"/> }</td>
        <td><CloseOutlined onClick={handleRemove} className="text-danger pointer"/></td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckOut;
