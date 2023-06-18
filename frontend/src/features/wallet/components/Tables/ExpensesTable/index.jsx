import { TransactionCard } from '../../TransactionCard/index.jsx';
import {
  TableContainer,
  ExpensesContainer,
} from '../styles.js';
import { useContext } from 'react';
import { WalletContext } from '../../../context/index.jsx';
import { FlexContainer } from '../../../../../components/FlexContainer/index.jsx';
import { Text } from '../../../../../components/Text/index.jsx';

export const ExpensesTable = () => {
  const { expenses } = useContext(WalletContext);


  if (expenses.length === 0) {
    return (
      <FlexContainer direction={ 'column' } gap={ '2rem' } padding={ '2rem 0' } width={ '100%' }
                     height={ '100%' } justify={ 'center' }>
        <Text size={ '2rem' } weight={ '700' } align={ 'center' }>Não há despesas registradas</Text>
      </FlexContainer>);
  }


  return (
    <TableContainer>
      <ExpensesContainer>
        { expenses.reverse().map((expense) => (
          <TransactionCard key={ expense.id } transaction={ expense } type={ 'expense' }/>
        )) }
      </ExpensesContainer>
    </TableContainer>
  );
};