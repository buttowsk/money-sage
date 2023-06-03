import { Container, Logo } from './styles.js';
import { ProfileCard } from '../../components/ProfileCard/index.jsx';
import { ExpensesTable } from '../../components/ExpensesTable/index.jsx';
import { Chart } from '../../components/Chart';

export const Home = () => {
  return (
    <Container>
      <ExpensesTable/>
      <ProfileCard/>
      <Chart/>
    </Container>
  );
};