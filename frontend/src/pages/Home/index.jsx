import { GridContainer, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../features/user/components/ProfileCard/index.jsx';
import { Chart } from '../../components/Chart/index.jsx';
import { useContext, useEffect } from 'react';
import { WalletContext } from '../../features/wallet/context/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { TransactionsTable } from '../../features/wallet/components/Table/index.jsx';

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
      <TransactionsTable/>
      <ProfileCard/>
      <CardTextLarge>
        <Chart/>
      </CardTextLarge>
    </GridContainer>
  );
};