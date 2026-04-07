import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}
);

export default instance;