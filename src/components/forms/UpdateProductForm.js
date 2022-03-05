import React from "react";
// import "antd/dist/antd.css";
// import { Select } from "antd";

// const { Option } = Select;

const UpdateProductForm = ({
  handleChange,
  handleSumbit,
  values,
  setValues,
  handleCategoryChange,
  categories,
  subOptions,
}) => {
  const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <div>
      <form onSubmit={handleSumbit} className="pp_create_form">
        <div className="pp_group">
          <label> Title</label>
          <input
            type="text"
            name="title"
            className="pp_input"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="pp_group">
          <label> Description</label>
          <input
            type="text"
            name="description"
            className="pp_input"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="pp_group">
          <label> Price ($)</label>
          <input
            type="number"
            name="price"
            className="pp_input"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="pp_group">
          <label> Quantity</label>
          <input
            type="number"
            name="quantity"
            className="pp_input"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <div className="pp_group">
          <label> Category</label>
          <select
            onChange={handleCategoryChange}
            name="category"
            className="pp_select"
          >
            <option>{category ? category.name : "Please select"}</option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className="pp_group">
          <label> Sub Categories</label>
          <select
            placeholder="Select a Sub Category"
            // value={subs} if any probs check later 
            name="subs"
            className="pp_select"
            onChange={handleChange}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <option key={s._id} value={s._id}>
                  {" "}
                  {s.name}
                </option>
              ))}
          </select>
        </div>

        <div className="pp_group">
          <label> Brand</label>
          <select
            value={brand}
            name="brand"
            className="pp_select"
            onChange={handleChange}
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="pp_group">
          <label> Shipping</label>
          <select
            value={shipping === "Yes" ? "Yes" : "No"}
            name="shipping"
            className="pp_select"
            onChange={handleChange}
          >
            <option value="No">NO</option>
            <option value="Yes">YES</option>
          </select>
        </div>

        <div className="pp_group">
          <label> Color</label>
          <select
            value={color}
            name="color"
            className="pp_select"
            onChange={handleChange}
          >
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button className="pp_btn">Save</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
