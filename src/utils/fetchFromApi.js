import axios from "axios";

const BASE_URL =
  "http://ec2-13-60-57-3.eu-north-1.compute.amazonaws.com/api/Properties/";

const options = {
  url: BASE_URL,
  method: "GET",
  redirect: "follow",
  mode: "no-cors",
};

export const fetchFromApi = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
};
