import { ExpensesCard } from '../ExpensesCard/index.jsx';
import { Title, TableContainer, NewExpenseButton, TableHeader, ExpensesContainer } from './styles.js';
import { useContext, useState } from 'react';
import { NewExpenseModal } from '../NewExpenseModal/index.jsx';
import { ExpensesContext } from '../../context/index.jsx';

export const ExpensesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { expenses } = useContext(ExpensesContext);

  const handleNewExpenseClick = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <TableContainer>
      { isModalOpen && <NewExpenseModal setIsOpen={ setIsModalOpen }/> }
      <TableHeader>
        <Title>Expenses</Title>
        <NewExpenseButton onClick={ handleNewExpenseClick }>Add Expense</NewExpenseButton>
      </TableHeader>
      <ExpensesContainer>
        { expenses.map((expense) => (
          <ExpensesCard key={ expense.id } expense={ expense }/>
        )) }
      </ExpensesContainer>
    </TableContainer>
  );
};