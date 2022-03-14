import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../helpers/category";
import { LoadingOutlined } from "@ant-design/icons";

const CategoryList = () => {
  const [categories, setCategorie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategorie(c.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="cl_row">
        {loading ? (
          <LoadingOutlined className="cl_loading" />
        ) : (
          <div className="form-group">
            <label> Make</label>
            <select name="category" className="form-control">
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    <Link to={`/categories/${c.slug}`}>{c.name}</Link>
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
