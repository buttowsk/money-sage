import {
  Container,
  Title,
  AuthenticationCard,
} from './styles.js';
import { FormSwitcher } from '../../features/authentication/components/FormSwitcher';
import { useState } from 'react';
import { SignInForm, SignUpForm } from '../../features/authentication/components/Forms';

export const Authentication = () => {
  const [form, setForm] = useState('signin');

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