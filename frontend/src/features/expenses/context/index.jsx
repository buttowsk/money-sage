import { createContext, useState } from 'react';
import { expensesAPI } from '../services/index.js';

export const ExpensesContext = createContext({});

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    try {
      const resp = await expensesAPI.get('/', {
        headers: {
          Authorization: `JWT ${ localStorage.getItem('accessToken') }`,
        },
      });
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
      const resp = await expensesAPI.post('/', expense, {
        headers: {
          Authorization: `JWT ${ localStorage.getItem('accessToken') }`,
        },
      });
      if (resp.status === 201) {
        const expense = resp.data;
        setExpenses([...expenses, expense]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateExpense = async (expense) => {
    try {
      const resp = await expensesAPI.put(`/${ expense.id }/`, expense, {
        headers: {
          Authorization: `JWT ${ localStorage.getItem('accessToken') }`,
        },
      });
      if (resp.status === 200) {
        const expense = resp.data;
        const newExpenses = expenses.map((expense) => {
          if (expense.id === expense.id) {
            return expense;
          }
          return expense;
        });
        setExpenses(newExpenses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpense = async (expenseId) => {
    try {
      const resp = await expensesAPI.delete(`/${ expenseId }/`, {
        headers: {
          Authorization: `JWT ${ localStorage.getItem('accessToken') }`,
        },
      });
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
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={ values }>
      { children }
    </ExpensesContext.Provider>
  );
};