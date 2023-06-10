import { CardTest, Container, Logo, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../components/ProfileCard/index.jsx';
import { ExpensesTable } from '../../features/expenses/components/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart/index.jsx';
import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../../features/expenses/context/index.jsx';

export const Home = () => {
  const {getExpenses, expenses} = useContext(ExpensesContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Container>
      <ExpensesTable/>
      <ProfileCard/>
      <CardTest>
        <Logo/>
      </CardTest>
      <CardTextLarge>
        <Chart/>
      </CardTextLarge>
    </Container>
  );
};