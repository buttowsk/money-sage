import { Input } from '../../Input';
import { SignInButton, SignInFormContainer, StyledSpan } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton';
import { useSignInForm } from '../../../hooks';
import { useContext } from 'react';
import { AuthContext } from '../../../context';


export const SignInForm = () => {
  const form = useSignInForm();
  const { handleLogin } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const resp = await handleLogin(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignInFormContainer onSubmit={ form.handleSubmit(onSubmit) }>
      <Input
        register={ form.register }
        type={ 'text' }
        name="email"
        label="Email"
        placeholder="Email"
        error={ form.errors.email?.message }
      />
      <Input
        register={ form.register }
        type={ 'password' }
        name="password"
        label="Password"
        placeholder="Password"
        error={ form.errors.password?.message }
        signIn={ true }
      />
      <SignInButton type={ 'submit' }>Fazer login</SignInButton>
      <StyledSpan>Ou</StyledSpan>
      <GoogleLoginButton/>
    </SignInFormContainer>
  );
};