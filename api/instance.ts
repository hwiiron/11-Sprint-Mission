import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const localStorageToken = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${localStorageToken}`;

  return config;
});

export default instance;
