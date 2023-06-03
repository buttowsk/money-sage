import { ExpensesCard } from '../ExpensesCard/index.jsx';
import { Title, TableContainer } from './styles.js';

export const ExpensesTable = () => {
  return (
    <TableContainer>
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
      <ExpensesCard />
    </TableContainer>
  )
}