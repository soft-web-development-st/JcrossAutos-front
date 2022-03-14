import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getSubs} from '../../helpers/sub'
import { LoadingOutlined } from "@ant-design/icons";

const SubList = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSubs().then((res) => {
      setSubs(res.data);
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
              <label> Model</label>
              <select name="category"
              className="form-control">
                {subs.length > 0 && subs.map((s) => (
                  <Link className="text-dark"  key={s._id} value={s._id} to={`/sub/${s.slug}`} >{ s.name}</Link>
             ))}
              </select>
       </div>




            
          // subs.map((s) => (
          //   <Link key={s._id} className="cl_link" to={`/sub/${s.slug}`}>
          //     {s.name}
          //   </Link>
          // ))
        )}
            
      </div>
    </div>
  );
};

export default SubList;
