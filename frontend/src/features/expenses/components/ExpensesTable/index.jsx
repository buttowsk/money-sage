import { ExpensesCard } from '../ExpensesCard/index.jsx';
import {
  TableContainer,
  ExpensesContainer,
} from './styles.js';
import { useContext, useState } from 'react';
import { ExpenseModal } from '../Modal/index.jsx';
import { ExpensesContext } from '../../context/index.jsx';
import { FlexContainer } from '../../../../components/FlexContainer';
import { Text } from '../../../../components/Text';

export const ExpensesTable = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <TableContainer>
      { expenses.length > 0 ? (
          <ExpensesContainer>
            { expenses.reverse().map((expense) => (
              <ExpensesCard key={ expense.id } expense={ expense }/>
            )) }
          </ExpensesContainer>
      ) : (
        <FlexContainer direction={'column'} gap={'2rem'} padding={'2rem 0'} width={'100%'} height={'100%'} justify={'center'}>
          <Text size={'2rem'} weight={'700'} align={'center'}>No expenses registered</Text>
        </FlexContainer>
      ) }
    </TableContainer>
  );
};