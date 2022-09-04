import axios, { AxiosInstance, AxiosError } from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const { API_END_POINT } = process.env;

const http: AxiosInstance = axios.create();

export const isHttpError = (e: unknown): e is AxiosError =>
  axios.isAxiosError(e);

http.interceptors.request.use((config) => {
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  config.baseURL = API_END_POINT;

  return config;
});

export default http;
