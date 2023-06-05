import axios from 'axios';

const API_URL = 'http://localhost:8000/auth';

const urls = {
  login: {
    url: '/jwt/create/',
  },
  signup: {
    url: '/users/',
  },
  activate: {
    url: '/users/activation/',
  },
  reset_password: {
    url: '/users/reset_password/',
  },
  reset_password_confirm: {
    url: '/users/reset_password_confirm/',
  },
  refesh: {
    url: '/jwt/refresh/',
  },
  verify: {
    url: '/jwt/verify/',
  },
  current_user: {
    url: '/users/me/',
  },
}

export const authAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});