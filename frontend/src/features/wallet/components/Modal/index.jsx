import {
  ModalBackground,
  ModalContainer,
  AddButton,
  CloseButton,
  TransactionType,
} from './styles.js';
import { Input } from '../Input/index.jsx';
import { useExpenseForm } from '../../lib/index.js';
import { WalletContext } from '../../context/index.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { options } from '../Input/options.js';
import { Container } from '../../../../components/FlexContainer/styles.js';

export const ExpenseModal = ({ setIsOpen, expense }) => {
  const [transactionType, setTransactionType] = useState('');
  const { getTransactions, updateTransaction, createTransaction, currencies } = useContext(WalletContext);
  const form = useExpenseForm();
  const modalRef = useRef();
  const { paymentTypes, tags } = options;

  const handleClickOutside = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (expense) {
      form.setValue('description', expense.description);
      form.setValue('amount', expense.amount);
      form.setValue('payment_type', expense.payment_type);
      form.setValue('currency', expense.currency);
      form.setValue('tag', expense.tag);
    }
  }, [expense]);

  const onSubmit = async (data) => {
    if (expense) {
      await updateTransaction(transactionType, expense, data);
      await getTransactions(transactionType);
      setIsOpen(false);
    } else {
      await createTransaction(transactionType, data);
      setIsOpen(false);
    }
  };

  return (
    <ModalBackground ref={ modalRef } onClick={ handleClickOutside }>
      <CloseButton onClick={ () => {
        setIsOpen(false);
      } }/>
      <ModalContainer onSubmit={ form.handleSubmit(onSubmit) }>
        <Input label="Description" name="description" register={ form.register }
               error={ form.errors.description?.message }/>
        <Input label="Amount" name="amount" register={ form.register }
               error={ form.errors.amount?.message }/>
        <Input label="Payment type" name="payment_type" register={ form.register }
               error={ form.errors.payment_type?.message } options={ paymentTypes }/>
        <Input label="Currency" name="currency" register={ form.register }
               error={ form.errors.currency?.message } options={ currencies }/>
        <Input label="Tag" name="tag" register={ form.register } error={ form.errors.tag?.message }
               options={ tags }/>
        <Container width={ '100%' } justify={ 'space-between' }>
          <TransactionType type={ 'button' } onClick={ () => setTransactionType('expense') }
                           $active={ transactionType === 'expense' && true }>Expense</TransactionType>
          <TransactionType type={ 'button' } onClick={ () => setTransactionType('income') }
                           $active={ transactionType === 'income' && true }>Income</TransactionType>
        </Container>
        { expense ? <AddButton type={ 'submit' }>Update</AddButton> : <AddButton type={ 'submit' }>Add</AddButton> }
      </ModalContainer>
    </ModalBackground>
  );
};