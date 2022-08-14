import axios, { AxiosRequestConfig, HeadersDefaults } from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8080",
};
const client = axios.create(axiosConfig);

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  const hasToken = !!token;

  if (hasToken) {
    config.headers = {
      ...config.headers,
      Authorization: JSON.parse(token),
    };
  }

  return config;
});

client.interceptors.response.use((response) => {
  if (response.data?.token) {
    client.defaults.headers = {
      ...client.defaults.headers,
      Authorization: response.data.token,
    } as CommonHeaderProperties;
  }

  return response;
});

export default client;
