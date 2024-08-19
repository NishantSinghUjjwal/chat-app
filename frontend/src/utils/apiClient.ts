import axios from "axios";
axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BE_BASE_URL}/app/v1`, // Replace with your api base URL
});
// apiClient.interceptors.response.use(
//   (response) => {
//     if(response.status==401){
//       window.location.href = '/logout';
//     }
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       window.location.href = '/logout';
//     }
//     return Promise.reject(error);
//   }
// );
export default apiClient;
