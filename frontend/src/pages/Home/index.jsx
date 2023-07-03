import { GridContainer, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../features/user/components/ProfileCard/index.jsx';
import { ExpensesTable } from '../../features/wallet/components/Tables/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart/index.jsx';
import { useContext, useEffect } from 'react';
import { WalletContext } from '../../features/wallet/context/index.jsx';
import { IncomesTable } from '../../features/wallet/components/Tables/IncomesTable/index.jsx';
import { Header } from '../../components/Header/index.jsx';

export const Home = () => {
  const { getTransactions, getCurrencies } = useContext(WalletContext);

  useEffect(() => {
    getTransactions('income');
    getTransactions('expense');
    getCurrencies();
  }, []);

  return (
    <GridContainer>
      <Header/>
      <ExpensesTable/>
      <IncomesTable/>
      <ProfileCard/>
      <CardTextLarge>
        <Chart/>
      </CardTextLarge>
    </GridContainer>
  );
};