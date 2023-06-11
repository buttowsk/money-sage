import { ModalBackground, ModalContainer, AddButton } from './styles.js';
import { Input } from '../Input/index.jsx';
import { useExpenseForm } from '../../lib/index.js';
import { ExpensesContext } from '../../context/index.jsx';
import { useContext, useEffect, useRef } from 'react';
import { options } from '../Input/options.js';

export const ExpenseModal = ({ setIsOpen, expense }) => {
  const { getExpenses, updateExpense, createExpense } = useContext(ExpensesContext);
  const form = useExpenseForm();
  const modalRef = useRef();

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
      await updateExpense(expense, data);
      await getExpenses();
      setIsOpen(false);
    } else {
      await createExpense(data);
      setIsOpen(false);
    }

  };


  return (
    <ModalBackground ref={ modalRef } onClick={ handleClickOutside }>
      <ModalContainer onSubmit={ form.handleSubmit(onSubmit) }>
        <Input label="Description" name="description" register={ form.register }
               error={ form.errors.description?.message }/>
        <Input label="Amount" name="amount" register={ form.register }
               error={ form.errors.amount?.message }/>
        <Input label="Payment type" name="payment_type" register={ form.register }
               error={ form.errors.payment_type?.message } options={ options.paymentTypes }/>
        <Input label="Currency" name="currency" register={ form.register }
               error={ form.errors.currency?.message } options={ options.currencies }/>
        <Input label="Tag" name="tag" register={ form.register } error={ form.errors.tag?.message }
               options={ options.tags }/>
        { expense ? <AddButton type={ 'submit' }>Update</AddButton> : <AddButton type={ 'submit' }>Add</AddButton> }
      </ModalContainer>
    </ModalBackground>
  );
};