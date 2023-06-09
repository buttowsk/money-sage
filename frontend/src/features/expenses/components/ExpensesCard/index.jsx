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
  MoreIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from './styles.js';
import { useState } from 'react';
import { useContext } from 'react';
import { ExpensesContext } from '../../context/index.jsx';

export const ExpensesCard = () => {
  const [isActive, setIsActive] = useState(false);
  const { expenses } = useContext(ExpensesContext);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>

      { expenses.map((expense) => (
        <Container key={expense.id}>
          <CardHeader>
            <CardTitle>{ expense.description }</CardTitle>
            { !isActive && <ArrowDownIcon active={ isActive ? isActive : undefined } onClick={ handleCardClick }/> }
            { isActive && <MoreIcon active={ isActive ? isActive : undefined }/> }
          </CardHeader>
          <CardBody active={ isActive ? isActive : undefined }>
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
            <CardDate>{ expense.created_at }</CardDate>
            <ArrowUpIcon onClick={ handleCardClick }/>
          </CardBody>
        </Container>
      )) }
    </>
  );
};