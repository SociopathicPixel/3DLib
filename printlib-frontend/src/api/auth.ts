import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response;
};

export const register = async (username: string, password: string, email: string) => {
  const response = await api.post('/auth/register', {username, password, email});
  return response.data;
};
