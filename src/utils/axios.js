import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://arcane-mountain-53457.herokuapp.com/api/v1",
});

export default customFetch;
