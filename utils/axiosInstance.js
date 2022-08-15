import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
axiosInstance.interceptors.request.use((req) => {
  req.headers.ContentType = "application/json";
  return req;
});
export default axiosInstance;
