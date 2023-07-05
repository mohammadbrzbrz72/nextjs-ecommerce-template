import axios from "axios";

import baseURL from "./api.baseUrl";

const _axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error: any) => {
  return Promise.reject(error);
};

_axios.interceptors.request.use((config) => {
  return config;
}, handleError);

export default _axios;
