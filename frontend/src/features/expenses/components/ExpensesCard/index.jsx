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
import { useState } from 'react';


export const ExpensesCard = ({ expense }) => {
  const [moreOptions, setMoreOptions] = useState(false);
  const date = format(new Date(expense.created_at), 'dd/MM/yyyy - HH:mm:ss');

  const handleMoreOptions = () => {
    setMoreOptions(!moreOptions);
  };


  return (
    <Container key={ expense.id }>
      <CardHeader>
        <CardTitle>{ expense.description }</CardTitle>
        <IconsContainer>
          <EditIcon appear={ moreOptions ? 'true' : undefined }/>
          <DeleteIcon appear={ moreOptions ? 'true' : undefined }/>
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