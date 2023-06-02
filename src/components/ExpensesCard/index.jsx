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

export const ExpensesCard = () => {
  const [ isActive, setIsActive ] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (<Container>
    <CardHeader>
      <CardTitle>Cinema</CardTitle>
      <ArrowDownIcon isActive={isActive} onClick={handleCardClick}/>
      <MoreIcon isActive={isActive}/>
    </CardHeader>
    <CardBody isActive={isActive}>
      <CardBodyRow>
        <CardRowLabel>Amout</CardRowLabel>
        <CardRowValue>30,00</CardRowValue>
      </CardBodyRow>
      <CardBodyRow>
        <CardRowLabel>Payment type</CardRowLabel>
        <CardRowValue>Money</CardRowValue>
      </CardBodyRow>
      <CardBodyRow>
        <CardRowLabel>Curerncy</CardRowLabel>
        <CardRowValue>USD</CardRowValue>
      </CardBodyRow>
      <CardBodyRow>
        <CardRowLabel>Tag</CardRowLabel>
        <CardRowValue>Leisure</CardRowValue>
      </CardBodyRow>
      <CardBodyRow>
        <CardRowLabel>Exchange rate</CardRowLabel>
        <CardRowValue>5.58</CardRowValue>
      </CardBodyRow>
      <CardBodyRow>
        <CardRowLabel>Amount converted</CardRowLabel>
        <CardRowValue>1.000,00 BRL</CardRowValue>
      </CardBodyRow>
      <CardDate>31/01/2021</CardDate>
      <ArrowUpIcon onClick={handleCardClick}/>
    </CardBody>
  </Container>);
};