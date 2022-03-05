import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../../helpers/category";
import "./cc.css";

import CategoryForm from "../../../components/forms/CategoryForm";

import { GrUpdate } from "react-icons/gr";

const UpdateCategory = ({ history, match }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  //load categories
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () =>
    getCategory(match.params.slug).then((c) => setName(c.data.name));

  //Create category
  const handleSumbit = (e) => {
    e.preventDefault();
    //   console.log(name);
    setLoading(true);
    updateCategory(match.params.slug, { name }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} is updated`);
        history.push("/admin/category");
      })
      .catch((err) => {
        setName("");
        setLoading(false);
        if (err) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-3 pt-1">
          <AdminNav />
        </div>
        <div className="col-9">
          <h4 className="text-center p-3">
            Update Category <GrUpdate className="cc_icon_update" />
          </h4>
          <div className="cc_form">
            {/* form component  */}
            <CategoryForm
              handleSumbit={handleSumbit}
              name={name}
              setName={setName}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
