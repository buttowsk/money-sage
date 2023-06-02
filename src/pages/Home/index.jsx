import { Container, Logo } from './styles.js';
import { ProfileCard } from '../../components/ProfileCard/index.jsx';
import { ExpensesTable } from '../../components/ExpensesTable/index.jsx';

export const Home = () => {
  return (
    <Container>
      <ExpensesTable/>
      <ProfileCard/>
    </Container>
  );
};