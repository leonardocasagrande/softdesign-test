import axios from 'axios';

export const AuthAxios = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
});

export const ServiceAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVICES_URL,
});
