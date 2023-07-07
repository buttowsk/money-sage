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

export const ExpenseModal = ({ setIsOpen, transaction }) => {
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
    if (transaction) {
      form.setValue('description', transaction.description);
      form.setValue('amount', transaction.amount);
      form.setValue('payment_type', transaction.payment_type);
      form.setValue('currency', transaction.currency);
      form.setValue('tag', transaction.tag);
    }
  }, [transaction]);

  const onSubmit = async (data) => {
    if (transaction) {
      await updateTransaction(transactionType, transaction, data);
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
        <Input label="Descrição" name="description" register={ form.register }
               error={ form.errors.description?.message }/>
        <Input label="Quantidade" name="amount" register={ form.register }
               error={ form.errors.amount?.message }/>
        <Input label="Forma de pagamento" name="payment_type" register={ form.register }
               error={ form.errors.payment_type?.message } options={ paymentTypes }/>
        <Input label="Moeda" name="currency" register={ form.register }
               error={ form.errors.currency?.message } options={ currencies }/>
        <Input label="Tag" name="tag" register={ form.register } error={ form.errors.tag?.message }
               options={ tags }/>
        <Container width={ '100%' } justify={ 'space-between' }>
          <TransactionType type={ 'button' } onClick={ () => setTransactionType('expense') }
                           $active={ transactionType === 'expense' && true }>Gasto</TransactionType>
          <TransactionType type={ 'button' } onClick={ () => setTransactionType('income') }
                           $active={ transactionType === 'income' && true }>Ganho</TransactionType>
        </Container>
        { transaction ? <AddButton type={ 'submit' }>Atualizar</AddButton> : <AddButton type={ 'submit' }>Adicionar</AddButton> }
      </ModalContainer>
    </ModalBackground>
  );
};