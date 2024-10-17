import axios from "axios";

const BASE_URL = "http://ec2-13-60-57-3.eu-north-1.compute.amazonaws.com/api";

const options = {
  url: BASE_URL,
  method: "GET",
  redirect: "follow",
  mode: "no-cors",
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
