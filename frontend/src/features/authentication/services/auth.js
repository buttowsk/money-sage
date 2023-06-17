import axios from 'axios';

const API_URL = 'https://buttowsk-supreme-space-spoon-r5p5rp949rxcx4pj-8000.preview.app.github.dev/auth';

export const authAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const googleAuthAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});
