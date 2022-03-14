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
        ) : (<>
             <label>Make</label>
            <select name="category" >
              <option >Choose a Make
          { categories.map((c) => (
            <option key={c._id} className="cl_link">
              {c.name}
            </option>
           ) )}
             </option> 
           
          </select>
           </>
        )}
          </div>
    </div>
  );
};

export default CategoryList;
