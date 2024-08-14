import axios from "axios";
axios.defaults.withCredentials = true;
const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BE_BASE_URL}/app/v1`, // Replace with your api base URL
  headers: {
    "Allow-Control-Access-Origin": import.meta.env.VITE_BE_BASE_URL,
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json", // Optional: Default headers
   "Access-Control-Allow-Methods":["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
  },
});
export default apiClient;
