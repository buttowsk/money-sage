import {
  CardBody,
  Container,
  CardBodyRow,
  CardDate,
  CardRowValue,
  CardRowLabel,
  CardTitle,
  CardHeader,
  EditIcon,
  DeleteIcon,
  VerticalMoreIcon,
  IconsContainer,
} from './styles.js';
import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../context/index.jsx';
import { ExpenseModal } from '../Modal/index.jsx';


export const ExpensesCard = ({ expense }) => {
  const [moreOptions, setMoreOptions] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteExpense, currencies } = useContext(ExpensesContext);
  const date = format(new Date(expense.created_at), 'dd/MM/yyyy - HH:mm:ss');

  useEffect(() => {
    if (currencies && expense) {
      const currency = currencies.find((currency) => currency.code === expense.currency);
      setExchangeRate(Number(currency?.ask).toFixed(2));
      const converted = (Number(expense.amount) * exchangeRate).toFixed(2);
      setConvertedAmount(Number(converted));
    } else {
      setExchangeRate(0);
      setConvertedAmount(0);
    }
  }, [currencies]);

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <Container key={ expense.id }>
      { isOpen && <ExpenseModal setIsOpen={ setIsOpen } expense={ expense }/> }
      <CardHeader>
        <CardTitle>{ expense.description }</CardTitle>
        <IconsContainer>
          <EditIcon appear={ moreOptions ? 'true' : undefined } onClick={ () => setIsOpen(!isOpen) }/>
          <DeleteIcon appear={ moreOptions ? 'true' : undefined } onClick={ handleDelete }/>
          <VerticalMoreIcon onClick={ () => setMoreOptions(!moreOptions) } more={ moreOptions ? 'true' : undefined }/>
        </IconsContainer>
      </CardHeader>
      <CardBody>
        <CardBodyRow>
          <CardRowLabel>Amout</CardRowLabel>
          <CardRowValue>{ expense.amount }</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Payment type</CardRowLabel>
          <CardRowValue>{ expense.payment_type }</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Currency</CardRowLabel>
          <CardRowValue>{ expense.currency }</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Tag</CardRowLabel>
          <CardRowValue>{ expense.tag }</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Exchange rate</CardRowLabel>
          <CardRowValue>{ exchangeRate }</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Amount converted</CardRowLabel>
          <CardRowValue>{ convertedAmount } BRL</CardRowValue>
        </CardBodyRow>
        <CardDate>Created at { date }</CardDate>
      </CardBody>
    </Container>
  );
};