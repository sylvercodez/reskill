import { boot } from "quasar/wrappers";
import axios from "axios";


axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.common['SameSite'] = 'None';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
let headers = {
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": "true",
};
const api = axios.create({
  baseURL: process.env.baseURL,
  headers,
});

// Get the token from session storage
let token = localStorage.getItem("token");
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.token) {
    token = response.data.token;
  }
  return response;
});

api.interceptors.request.use(function (config) {
  // Check valid token
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  app.config.globalProperties.$apiHeaders = headers;

  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  console.log(api)
});

export { axios, api };
