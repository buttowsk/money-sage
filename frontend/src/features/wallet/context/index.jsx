import { createContext, useEffect, useState } from 'react';
import { currencyApi, transactionsApi } from '../services/index.js';


export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(Number(0));
  const [totalByTag, setTotalByTag] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState(Number(0));

  const getCurrencies = async () => {
    try {
      const resp = await currencyApi.get('/');
      const currencies = Object.values(resp.data);
      const filteredCurrencies = currencies.filter((currency) => currency.codein !== 'BRLT');
      setCurrencies(filteredCurrencies);
    } catch (err) {
      console.log(err);
    }
  };

  const convertAmount = (amount, currency) => {
    const currencyFound = currencies.find((c) => c.code === currency);
    const exchangeRate = (parseFloat(currencyFound?.ask).toFixed(2));
    const convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
    return { convertedAmount, exchangeRate };
  };

  const getTotalExpenses = () => {
    const total = expenses.reduce((accumulator, expense) => {
      const currency = currencies.find((currency) => currency.code === expense.currency);
      const convertedAmount = parseFloat(expense.amount) * currency?.ask;
      return accumulator + convertedAmount;
    }, 0);
    setTotalExpenses((total).toFixed(2));
  };

  const getTotalIncomes = () => {
    const total = incomes.reduce((accumulator, income) => {
      const currency = currencies.find((currency) => currency.code === income.currency);
      const convertedAmount = parseFloat(income.amount) * currency?.ask;
      return accumulator + convertedAmount;
    }, 0);
    setTotalIncomes((total).toFixed(2));
  };

  const getTotalByTag = () => {
    const totalByTag = expenses.reduce((accumulator, expense) => {
      const { tag, amount, currency } = expense;
      const { convertedAmount } = convertAmount(amount, currency);
      if (accumulator[tag]) {
        accumulator[tag] += parseFloat(convertedAmount);
        return accumulator;
      } else {
        accumulator[tag] = parseFloat(convertedAmount);
        return accumulator;
      }
    }, {});
    const totalByTagArray = Object.entries(totalByTag).map(([tag, amount]) => {
      return { tag, amount };
    });
    setTotalByTag(totalByTagArray);
  };

  useEffect(() => {
    getTotalExpenses();
    getTotalIncomes();
    getTotalByTag();
    getCurrencies();
  }, [expenses, incomes]);

  const formatDate = (date) => {
    const dataObj = new Date(date);

    const ano = dataObj.getFullYear();
    const mes = dataObj.getMonth() + 1;
    const dia = dataObj.getDate();
    const hora = dataObj.getHours();
    const minutos = dataObj.getMinutes();

    return `${ dia }/${ mes }/${ ano } ${ hora }:${ minutos }`;
  };

  const getTransactions = async (type) => {
    try {
      const resp = await transactionsApi.get(`/${ type }/`);
      if (resp.status === 200) {
        const data = resp.data;
        data.forEach((item) => {
          item.date = formatDate(item.date);
        });
        type === 'expense' ? setExpenses(data) : setIncomes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createTransaction = async (type, data) => {
    try {
      const { convertedAmount, exchangeRate } = convertAmount(data.amount, data.currency);
      const newData = {
        ...data,
        converted_amount: convertedAmount,
        exchange_rate: exchangeRate,
      };
      const resp = await transactionsApi.post(`/${ type }/`, newData);
      await getCurrencies();
      if (resp.status === 201) {
        const data = resp.data;
        type === 'expense' ? setExpenses([...expenses, data]) : setIncomes([...incomes, data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateTransaction = async (type, expense, data) => {
    try {
      const { convertedAmount, exchangeRate } = convertAmount(data.amount, data.currency);
      const newData = {
        ...data,
        converted_amount: convertedAmount,
        exchange_rate: exchangeRate,
      };
      const resp = type === 'expense' ? await transactionsApi.put(`/expense/${ expense.id }/`, newData)
        : await transactionsApi.put(`/income/${ expense.id }/`, newData);
      if (resp.status === 200) {
        const updatedData = resp.data;
        const updatedList = type === 'expense' ?
          expenses.map((item) => item.id === updatedData.id ? updatedData : item) :
          incomes.map((item) => item.id === updatedData.id ? updatedData : item);
        type === 'expense' ? setExpenses(updatedList) : setIncomes(updatedList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransaction = async (type, expenseId) => {
    try {
      const resp = type === 'expense' ? await transactionsApi.delete(`/expense/${ expenseId }/`) : await transactionsApi.delete(`/income/${ expenseId }/`);
      if (resp.status === 204) {
        const newExpenses = type === 'expense' ? expenses.filter((expense) => expense.id !== expenseId) : incomes.filter((income) => income.id !== expenseId);
        type === 'expense' ? setExpenses(newExpenses) : setIncomes(newExpenses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    expenses,
    incomes,
    totalExpenses,
    totalIncomes,
    totalByTag,
    currencies,
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getCurrencies,
  };

  return (
    <WalletContext.Provider value={ values }>
      { children }
    </WalletContext.Provider>
  );

};

