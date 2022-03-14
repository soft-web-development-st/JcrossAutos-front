import React, { useState } from "react";
import "./image.css";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";

import { AiFillCloseCircle } from "react-icons/ai";

// import "antd/dist/antd.css";

const ImageUpload = ({ values, setValues, setLoading, loading }) => {
  // const [images, setImages] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  const imageUpload = (e) => {
    let files = e.target.files;
    let allUploadFiles = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD DATA RES", res);
                setLoading(false);
                allUploadFiles.push(res.data);

                setValues({ ...values, images: allUploadFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("ERROR FROM IMAGE UPLOAD", err);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    console.log("REMOVE", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filterImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filterImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="i_group">
      <label className="btn btn-outline-secondary">
        <b> Upload Image </b>
        <input
          type="file"
          multiple
          accept="images/*"
         
          onChange={imageUpload}
        />
      </label>

      <div className="i_image_container">
        {values.images &&
          values.images.map((image) => (
            <div className="i_image_container1" key={image.public_id}>
              <img className="i_image" src={image.url} alt="upload" />
              <button
                className="i_x"
                onClick={() => handleImageRemove(image.public_id)}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUpload;
