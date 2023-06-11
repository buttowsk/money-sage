import { ExpensesCard } from '../ExpensesCard/index.jsx';
import {
  Title,
  TableContainer,
  NewExpenseButton,
  TableHeader,
  ExpensesContainer,
  EmpyText,
  EmpyContainer,
} from './styles.js';
import { useContext, useState } from 'react';
import { ExpenseModal } from '../Modal/index.jsx';
import { ExpensesContext } from '../../context/index.jsx';

export const ExpensesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { expenses } = useContext(ExpensesContext);

  const handleNewExpenseClick = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <TableContainer>
      { isModalOpen && <ExpenseModal setIsOpen={ setIsModalOpen }/> }
      { expenses.length > 0 ? (
        <>
          <TableHeader>
            <Title>Expenses</Title>
            <NewExpenseButton onClick={ handleNewExpenseClick }>Add Expense</NewExpenseButton>
          </TableHeader>
          <ExpensesContainer>
            { expenses.reverse().map((expense) => (
              <ExpensesCard key={ expense.id } expense={ expense }/>
            )) }
          </ExpensesContainer>
        </>
      ) : (
        <EmpyContainer>
          <EmpyText>No expenses registered</EmpyText>
          <NewExpenseButton onClick={ handleNewExpenseClick }>Add your first expense</NewExpenseButton>
        </EmpyContainer>
      ) }
    </TableContainer>
  );
};