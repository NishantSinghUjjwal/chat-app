import axios from "axios";
axios.defaults.withCredentials = true;
const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BE_BASE_URL}/app/v1`, // Replace with your api base URL
});
export default apiClient;
