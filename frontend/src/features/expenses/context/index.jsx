import { createContext, useEffect, useState } from 'react';
import { currencyAPI, expensesAPI } from '../services/index.js';

export const ExpensesContext = createContext({});

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(Number(0));
  const [totalByTag, setTotalByTag] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  expensesAPI.defaults.headers.common.Authorization = `JWT ${ accessToken }`;

  const getCurrencies = async () => {
    try {
      const resp = await currencyAPI.get();
      const currencies = Object.values(resp.data);
      setCurrencies(currencies.filter((currency) => currency.codein !== 'BRLT'));
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalExpenses = () => {
    const total = expenses.reduce((accumulator, expense) => {
      const currency = currencies.find((currency) => currency.code === expense.currency);
      const convertedAmount = parseFloat(expense.amount) * currency?.ask;
      return accumulator + convertedAmount;
    }, 0);
    setTotalExpenses((total).toFixed(2));
  };


  const getTotalByTag = () => {
    const totalByTag = expenses.reduce((accumulator, expense) => {
      const { tag, amount } = expense;
      if (!accumulator[tag]) {
        accumulator[tag] = 0;
      }
      accumulator[tag] += parseFloat(amount);
      return accumulator;
    }, {});
    const totalByTagArray = Object.entries(totalByTag).map(([tag, amount]) => {
      return { tag, amount };
    });
    setTotalByTag(totalByTagArray);
  };


  useEffect(() => {
    getTotalExpenses();
    getTotalByTag();
    getCurrencies();
  }, [expenses]);

  const getExpenses = async () => {
    try {
      const resp = await expensesAPI.get('/');
      if (resp.status === 200) {
        const expenses = resp.data;
        setExpenses(expenses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createExpense = async (expense) => {
    try {
      const resp = await expensesAPI.post('/', expense);
      if (resp.status === 201) {
        const expense = resp.data;
        setExpenses([...expenses, expense]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateExpense = async (expense, data) => {
    try {
      const resp = await expensesAPI.put(`/${ expense.id }/`, data);
      if (resp.status === 200) {
        const updatedExpense = resp.data;
        const updatedExpenses = expenses.map((item) =>
          item.id === updatedExpense.id ? updatedExpense : item,
        );
        setExpenses(updatedExpenses);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const deleteExpense = async (expenseId) => {
    try {
      const resp = await expensesAPI.delete(`/${ expenseId }/`);
      if (resp.status === 204) {
        const newExpenses = expenses.filter((expense) => expense.id !== expenseId);
        setExpenses(newExpenses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    expenses,
    totalExpenses,
    totalByTag,
    currencies,
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense,
    getTotalExpenses,
  };

  return (
    <ExpensesContext.Provider value={ values }>
      { children }
    </ExpensesContext.Provider>
  );
};