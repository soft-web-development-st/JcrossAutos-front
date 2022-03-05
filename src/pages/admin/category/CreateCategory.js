import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../../helpers/category";
import "./cc.css";

import { Link } from "react-router-dom";
import CategoryForm from "../../../components/forms/CategoryForm";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdCreate } from "react-icons/md";
import SearchForm from "../../../components/forms/SearchForm";

const CreateCategory = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  // serching/filtering
  // step1
  const [keyword, setKeyword] = useState("");

  //load categories
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  //Create category
  const handleSumbit = (e) => {
    e.preventDefault();
    //   console.log(name);
    setLoading(true);
    createCategory({ name }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} is created`);
        loadCategories();
      })
      .catch((err) => {
        setName("");
        setLoading(false);
        if (err) toast.error(err.response.data);
      });
  };

  //delete category
  const handleRemove = async (slug) => {
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadCategories();
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          if (err) toast.error(err.response.data);
        });
    }
  };

  //step 4 filtering
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className=" container-fluid  pt-5">
      <div className="row create_large_display">
        <div className="col-md-3">
          <AdminNav />
        </div>
        <div className="col createForm ">
          <h4 className="text-center">
            Create The Cars Make <MdCreate className="cc_icon_edit" />
          </h4>
          <div className="cc_form">
            <br />
            <CategoryForm
              handleSumbit={handleSumbit}
              name={name}
              setName={setName}
              loading={loading}
            />
            {/* step 2 */}
            <SearchForm value={keyword} setKeyword={setKeyword} />
            <div className="make_">
              {categories.filter(searched(keyword)).map((c) => (
                <div className="cc_categories" key={c._id}>
                  {c.name}
                  <span
                    onClick={() => handleRemove(c.slug)}
                    className="cc_delete right"
                  >
                    <AiFillDelete></AiFillDelete>
                  </span>
                  <Link
                    className="cc_edit right"
                    to={`/admin/category/${c.slug}`}
                  >
                    <AiFillEdit />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
