import axios from "axios";

export const getSubs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/subs`);

export const getSub= async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/sub/${slug}`);

export const removeSub = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSub = async (slug, name, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/sub/${slug}`, name, {
    headers: {
      authtoken,
    },
  });

export const createSub = async (name, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/sub`, name, {
    headers: {
      authtoken,
    },
  });
