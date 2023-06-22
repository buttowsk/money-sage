import axios from 'axios';

const API_URL = 'https://buttowsk-automatic-lamp-vjqjgq46xq6cwxrq-8000.preview.app.github.dev/transaction';

export const transactionsApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const currencyApi = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/all',
  headers: {
    'Content-Type': 'application/json',
  },
});