import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
});

api.interceptors.request.use(config => {
  config.params = {
    api_key: "2zeHfVEKa9gXpOA2DoqrKNv6hWRHvlKa",
    limit: "12",
    ...config.params,
  };
  return config;
});

export default api;