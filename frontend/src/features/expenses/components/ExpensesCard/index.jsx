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
import { useContext, useState } from 'react';
import { ExpensesContext } from '../../context/index.jsx';
import { ExpenseModal } from '../Modal/index.jsx';


export const ExpensesCard = ({ expense }) => {
  const [moreOptions, setMoreOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteExpense } = useContext(ExpensesContext);
  const date = format(new Date(expense.created_at), 'dd/MM/yyyy - HH:mm:ss');

  const handleMoreOptions = () => {
    setMoreOptions(!moreOptions);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  const handleUpdate = () => {
    setIsOpen(!isOpen);
  }


  return (
    <Container key={ expense.id }>
      { isOpen && <ExpenseModal setIsOpen={ setIsOpen } expense={ expense }/> }
      <CardHeader>
        <CardTitle>{ expense.description }</CardTitle>
        <IconsContainer>
          <EditIcon appear={ moreOptions ? 'true' : undefined } onClick={handleUpdate}/>
          <DeleteIcon appear={ moreOptions ? 'true' : undefined } onClick={ handleDelete }/>
          <VerticalMoreIcon onClick={ handleMoreOptions } more={ moreOptions ? 'true' : undefined }/>
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
          <CardRowValue>5.58</CardRowValue>
        </CardBodyRow>
        <CardBodyRow>
          <CardRowLabel>Amount converted</CardRowLabel>
          <CardRowValue>1.000,00 BRL</CardRowValue>
        </CardBodyRow>
        <CardDate>Created at { date }</CardDate>
      </CardBody>
    </Container>
  );
};