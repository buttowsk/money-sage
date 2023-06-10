import { ModalBackground, ModalContainer, AddButton } from './styles.js';
import { Input } from './Input';
import { useExpenseForm } from '../../lib/index.js';
import { expensesAPI } from '../../services/index.js';
import { ExpensesContext } from '../../context/index.jsx';
import { useContext, useRef } from 'react';

const paymentTypes = [
  'credit_card',
  'debit_card',
  'cash',
  'pix',
];

const currencies = [
  'BRL',
  'USD',
  'EUR',
  'CAD',
  'AUD',
  'GBP',
  'JPY',
  'CHF',
  'CNY',
  'ILS',
  'BTC',
  'ETH',
  'LTC',
  'XRP',
  'DOGE',
  'USDT',
];

const tags = [
  'food',
  'transport',
  'housing',
  'health',
  'education',
  'entertainment',
];

export const NewExpenseModal = ({ setIsOpen }) => {
  const { getExpenses } = useContext(ExpensesContext);
  const form = useExpenseForm();
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current.contains(e.target)) {
      setIsOpen(false);
      form.reset();
    }
  };

  const onSubmit = async (data) => {
    try {
      const resp = await expensesAPI.post('/', data);
      if (resp.status === 201) {
        getExpenses();
        setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalBackground ref={ modalRef }>
      <ModalContainer onSubmit={ form.handleSubmit(onSubmit) }>
        <Input label="Description" name="description" register={ form.register }
               error={ form.errors.description?.message }/>
        <Input label="Amount" name="amount" register={ form.register }
               error={ form.errors.amount?.message }/>
        <Input label="Payment type" name="payment_type" register={ form.register }
               error={ form.errors.payment_type?.message } options={ paymentTypes }/>
        <Input label="Currency" name="currency" register={ form.register }
               error={ form.errors.currency?.message } options={ currencies }/>
        <Input label="Tag" name="tag" register={ form.register } error={ form.errors.tag?.message } options={ tags }/>
        <AddButton type={ 'submit' }>Add</AddButton>
      </ModalContainer>
    </ModalBackground>
  );
};