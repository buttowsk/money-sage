import {
  Container,
  Title,
  AuthenticationCard,
} from './styles.js';
import { FormSwitcher } from '../../features/authentication/components/FormSwitcher';
import { useState } from 'react';
import { SignInForm, SignUpForm } from '../../features/authentication/components/Forms';
import { useContext } from 'react';
import { AuthContext } from '../../features/authentication/context/index.jsx';
import { Navigate } from 'react-router-dom';

export const Authentication = () => {
  const [form, setForm] = useState('signin');
  const { isAuthenticated } = useContext(AuthContext);


  if (isAuthenticated) {
    return <Navigate to="/"/>;
  }

  return (
    <Container>
      <AuthenticationCard>
        <Title>{ form === 'signin' ? 'Sign In' : 'Sign Up' }</Title>
        <FormSwitcher form={ form } setForm={ setForm }/>
        { form === 'signin' ? <SignInForm/> : <SignUpForm/> }
      </AuthenticationCard>
    </Container>
  );
};