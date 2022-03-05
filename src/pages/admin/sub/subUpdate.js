import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createSub, getSub, removeSub, updateSub } from "../../../helpers/sub";
import { getCategories } from "../../../helpers/category";
import "../category/cc.css";

import { Link } from "react-router-dom";
import CategoryForm from "../../../components/forms/CategoryForm";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdCreate } from "react-icons/md";
import SearchForm from "../../../components/forms/SearchForm";

const SubUdpate = ({match,history}) => {
    const { user } = useSelector((state) => ({ ...state }));
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [parent, setParent] = useState('');

    //load categories
    useEffect(() => {
        loadCategories();
        loadSub();
    }, []);

    const loadCategories = () =>
        getCategories().then((c) => setCategories(c.data));

    const loadSub = () =>
      getSub(match.params.slug).then((s) => {
        setName(s.data.name);
        setParent(s.data.parent);
      });

  //Create category
  const handleSumbit = (e) => {
    e.preventDefault();
    //   console.log(name);
    setLoading(true);
    updateSub(match.params.slug,{ name, parent}, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} has been updated!`);
        history.push('/admin/sub')
      })
      .catch((err) => {
        setName("");
        setLoading(false);
        if (err) toast.error(err.response.data);
      });
  };

  return (
    <div className="history-container">
      <div className="history-row">
        <AdminNav />
      </div>
      <div className="cc_container">
        <h4>
          Update Sub Category <MdCreate className="cc_icon_edit" />
        </h4>
        <div className="cc_form">
          <br />
          <div className="cc_sub_category">
            <label> Category</label>
            <select
              onChange={(e) => setParent(e.target.value)}
              name="category"
              className="cc_sub_category_select"
            >
              <option>Select Category</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <CategoryForm
            handleSumbit={handleSumbit}
            name={name}
            setName={setName}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default SubUdpate;
