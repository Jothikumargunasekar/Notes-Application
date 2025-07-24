import axios from "axios";

const BASE_URL = "/api"; // works in both dev (via Vite proxy) and prod

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
