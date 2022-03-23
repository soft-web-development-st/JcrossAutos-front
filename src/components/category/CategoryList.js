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
          <LoadingOutlined className="text-danger text-center m-5 pt-5" />
        ) : (
          categories.map((c) => (
            <Link key={c._id} className="cl_link" to={`/category/${c.slug}`}>
              {c.name}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
