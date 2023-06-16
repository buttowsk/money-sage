import {
  EditIcon,
  DeleteIcon,
  VerticalMoreIcon,
} from './styles.js';
import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../context/index.jsx';
import { ExpenseModal } from '../Modal/index.jsx';
import { FlexContainer } from '../../../../components/FlexContainer/index.jsx';
import { Text } from '../../../../components/Text/index.jsx';


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
    <FlexContainer key={ expense.id } direction={ 'column' } shadow={ '0 0 8px 1px rgba(0, 0, 0, 0.75)' }>
      { isOpen && <ExpenseModal setIsOpen={ setIsOpen } expense={ expense }/> }
      <FlexContainer width={ '100%' } padding={ '1rem 1rem 2rem 2rem' } justify={ 'space-between' }>
        <Text type={ 'span' } weight={ '700' } size={ '2rem' }>{ expense.description }</Text>
        <FlexContainer>
          <EditIcon appear={ moreOptions ? 'true' : undefined } onClick={ () => setIsOpen(!isOpen) }/>
          <DeleteIcon appear={ moreOptions ? 'true' : undefined } onClick={ handleDelete }/>
          <VerticalMoreIcon onClick={ () => setMoreOptions(!moreOptions) } more={ moreOptions ? 'true' : undefined }/>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer width={ '100%' } direction={ 'column' } padding={ '2rem' } gap={ '1.5rem' }>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Amout</Text>
          <Text weight={ '600' }>{ expense.amount }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Payment type</Text>
          <Text weight={ '600' }>{ expense.payment_type }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Currency</Text>
          <Text weight={ '600' }>{ expense.currency }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Tag</Text>
          <Text weight={ '600' }>{ expense.tag }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Exchange rate</Text>
          <Text weight={ '600' }>{ exchangeRate }</Text>
        </FlexContainer>
        <FlexContainer width={ '100%' } justify={ 'space-between' }>
          <Text weight={ '600' }>Amount converted</Text>
          <Text weight={ '600' }>{ convertedAmount } BRL</Text>
        </FlexContainer>
        <Text weight={ '700' }>Created at { date }</Text>
      </FlexContainer>
    </FlexContainer>
  );
};