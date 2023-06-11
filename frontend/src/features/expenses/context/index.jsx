import { createContext, useEffect, useState } from 'react';
import { expensesAPI } from '../services/index.js';

export const ExpensesContext = createContext({});

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(Number(0));
  const [totalByTag, setTotalByTag] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  expensesAPI.defaults.headers.common.Authorization = `JWT ${ accessToken }`;

  const getTotalExpenses = () => {
    const total = expenses.reduce((accumulator, expense) => {
      return accumulator + parseFloat(expense.amount);
    }, 0);
    setTotalExpenses(total.toFixed(2));
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