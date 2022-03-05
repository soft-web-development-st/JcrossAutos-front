import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createSub, getSub, removeSub ,getSubs } from "../../../helpers/sub";
import { getCategories } from "../../../helpers/category";
import "../category/cc.css";

import { Link } from "react-router-dom";
import CategoryForm from "../../../components/forms/CategoryForm";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdCreate } from "react-icons/md";
import SearchForm from "../../../components/forms/SearchForm";

const SubCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('')
  const [subs, setSubs] = useState([])
  // serching/filtering
  // step1
  const [keyword, setKeyword] = useState("");

  //load categories
  useEffect(() => {
      loadCategories();
      loadSubs();
  }, []);

  const loadCategories = () =>
      getCategories().then((c) => setCategories(c.data));
    
  const loadSubs = () =>
    getSubs().then((c) => setSubs(c.data));

  //Create category
  const handleSumbit = (e) => {
    e.preventDefault();
    //   console.log(name);
    setLoading(true);
    createSub({ name ,parent:category}, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
          toast.success(`${res.data.name} is created`);
          loadSubs();
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
      removeSub(slug, user.token)
        .then((res) => {
          setLoading(false);
            toast.error(`${res.data.name} deleted`);
            loadSubs();
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
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-3">
          <AdminNav />
        </div>
        <div className="col-9">
          <h4>
            Create The Model <MdCreate className="cc_icon_edit" />
          </h4>
          <div className="cc_form">
            <br />
            <div className="cc_sub_category">
              <p className="alert alert-secondary">
                The Make must be selected before creating the model!!!
              </p>
              <label> Make</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                className="cc_sub_category_select"
              >
                <option>Select Make</option>
                {categories.length > 0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
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
            {/* step 2 */}
            <SearchForm value={keyword} setKeyword={setKeyword} />
            <div className="make_">
              {subs.filter(searched(keyword)).map((s) => (
                <div className="cc_categories" key={s.name}>
                  {s.name}
                  <span
                    onClick={() => handleRemove(s.slug)}
                    className="cc_delete right"
                  >
                    <AiFillDelete></AiFillDelete>
                  </span>
                  <Link className="cc_edit right" to={`/admin/sub/${s.slug}`}>
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

export default SubCreate;
