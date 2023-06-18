import { CardTest, GridContainer, Logo, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../layout/ProfileCard/index.jsx';
import { ExpensesTable } from '../../features/wallet/components/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart/index.jsx';
import { useContext, useEffect } from 'react';
import { WalletContext } from '../../features/wallet/context/index.jsx';

export const Home = () => {
  const { getTransactions, getCurrencies } = useContext(WalletContext);

  useEffect(() => {
    getTransactions('income');
    getTransactions('expense');
    getCurrencies();
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