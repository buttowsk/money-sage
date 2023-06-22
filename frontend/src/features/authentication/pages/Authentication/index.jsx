import {
  Container,
  Title,
  AuthenticationCard,
  UserCreated
} from './styles.js';
import { FormSwitcher } from '../../components/FormSwitcher/index.jsx';
import { useState } from 'react';
import { SignInForm, SignUpForm } from '../../components/Forms/index.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/index.jsx';
import { Navigate } from 'react-router-dom';

export const Authentication = () => {
  const [form, setForm] = useState('signin');
  const { isAuthenticated, userCreated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/"/>;
  }

  return (
    <Container>
      <AuthenticationCard>
        { userCreated && <UserCreated>Usuário criado com sucesso!</UserCreated> }
        <Title>{ form === 'signin' ? 'Bem vindo de volta!' : 'Se cadastre agora.' }</Title>
        <FormSwitcher form={ form } setForm={ setForm }/>
        { form === 'signin' ? <SignInForm/> : <SignUpForm/> }
      </AuthenticationCard>
    </Container>
  );
};