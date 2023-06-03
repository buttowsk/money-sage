import { CardTest, Container, Logo, CardTextLarge } from './styles.js';
import { ProfileCard } from '../../components/ProfileCard/index.jsx';
import { ExpensesTable } from '../../components/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart';

export const Home = () => {
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