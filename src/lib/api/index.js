import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "../../config";
import { Auth } from "./auth";
import { Booking } from "./booking";
import { Parking } from "./parking";
import { User } from "./user";
import {Car } from "./car"

class Api {
  _axios;
  user;
  auth;
  parking;
  booking;
  car;

  constructor() {
    this._axios = this.createAxios();
    this.auth = new Auth(this._axios);
    this.parking = new Parking(this._axios);
    this.booking = new Booking(this._axios);
    this.user = new User(this._axios);
    this.car = new Car(this._axios);
  }
  createAxios() {
    const ax = axios.create();
    //setting authorization headers before api calls
    ax.interceptors.request.use(async (config) => {
      //setting authorization headers for server side api calls

      config.headers["authorization"] = await SecureStore.getItemAsync("token");
      config.baseURL = BASE_URL;

      return config;
    });
    return ax;
  }
}

const api = new Api();

export default api;
