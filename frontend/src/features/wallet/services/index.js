import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/transactions';

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