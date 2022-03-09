import React from "react";
import "./admin.css";
import car from "../../images/car6.raw";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AdminProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug } = product;

  return (
    <div className="admin_card">
      <div className="admin_card_info">
        <img
          className="admin_card_img"
          src={images && images.length ? images[0].url : car}
          alt={title}
        />
        <h3 className="admin_card_title">{title}</h3>
        {/* <h4 className="admin_card_price">${price}</h4> */}
        <h4 className="admin_card_description">{`${
          description && description.substring(0, 100)
        }...`}</h4>
        <div className="admin_actions">
          <div className="admin_underline"></div>
          <Link to={`/admin/product/${slug}`}>
          <button className="admin_edit left">
            <EditFilled />
          </button>
          </Link>
            <button className="admin_delete left">
              <DeleteFilled onClick={() => handleRemove(slug)} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
