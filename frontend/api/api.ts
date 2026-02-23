import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;
if (!baseURL) {
  console.warn("EXPO_PUBLIC_API_URL is missing. Check frontend/.env");
}
const api = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export default api;
