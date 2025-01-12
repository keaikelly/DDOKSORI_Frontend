import axios from "axios";

export const API = axios.create({
  baseURL: "https://a640-210-94-220-228.ngrok-free.app",

  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default API;