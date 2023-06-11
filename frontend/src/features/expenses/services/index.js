import axios from 'axios';

const API_URL = 'http://localhost:8000/expenses';

export const expensesAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const currencyAPI = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/all',
  headers: {
    'Content-Type': 'application/json',
  },
});