import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "../../config";
import { Auth } from "./auth";

class Api {
  _axios;
  user;
  auth;
  parking;
  booking;

  constructor() {
    this._axios = this.createAxios();
    this.auth = new Auth(this._axios);
  }
  createAxios() {
    const ax = axios.create();
    //setting authorization headers before api calls
    ax.interceptors.request.use(async (config) => {
      //setting authorization headers for server side api calls

      config.headers[header] = await SecureStore.getItemAsync("token");
      config.baseURL = BASE_URL;

      return config;
    });
    return ax;
  }
}

const api = new Api();

export default api;
