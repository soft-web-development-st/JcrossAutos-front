import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/categories`);

export const getCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

  
export const updateCategory = async (slug, name, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, name, {
    headers: {
      authtoken,
      },
  });

export const createCategory = async (name, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/category`,name, {
    headers: {
      authtoken,
      },
  });

  export const getCategorySubs = async (_id) =>
    await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);

