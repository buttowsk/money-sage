import { CardTest, GridContainer, Logo, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../layout/ProfileCard/index.jsx';
import { ExpensesTable } from '../../features/expenses/components/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart/index.jsx';
import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../../features/expenses/context/index.jsx';

export const Home = () => {
  const { getExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <GridContainer>
      <ExpensesTable/>
      <ProfileCard/>
      <CardTest>
        <Logo/>
      </CardTest>
      <CardTextLarge>
        <Chart/>
      </CardTextLarge>
    </GridContainer>
  );
};