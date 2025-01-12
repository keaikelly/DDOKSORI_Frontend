import axios from "axios";

export const API = axios.create({
  baseURL: "https://026f-210-94-220-228.ngrok-free.app",

  headers: {
    "Content-Type": "application/json",
    'Cache-Control': 'no-cache', 
  },
  withCredentials: true
});

export default API;