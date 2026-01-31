import axios from "axios";

const apiManager = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000, // Add timeout why -- to free resouces , prevets hanging request so user not to wait forever , enhance ui experince
  headers: {
    "Content-Type": "application/json",
  },
});

apiManager.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export const get = async (endpoint, params) => {
  return await apiManager.get(endpoint, { params });
};

export const post = async (endpoint, body, params) => {
  return await apiManager.post(endpoint, body, { params });
};

export const put = async (endpoint, body, params) => {
  const data = await apiManager.put(endpoint, body, { params });
  return data;
};

export const remove = async (endpoint, params) => {
  return await apiManager.delete(endpoint, { params });
};
