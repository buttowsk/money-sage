import { Container, Logo } from './styles.js';
import { ProfileCard } from '../../components/ProfileCard/index.jsx';
import { ExpensesCard } from '../../components/ExpensesCard/index.jsx';

export const Home = () => {

  return (
    <Container>
      <ExpensesCard/>
    </Container>
  );
};