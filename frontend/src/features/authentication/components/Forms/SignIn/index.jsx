import { Input } from '../../Input';
import { SignInButton, SignInFormContainer, StyledSpan } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton';
import { useSignInForm } from '../../../lib';
import { useContext } from 'react';
import { AuthContext } from '../../../context';


export const SignInForm = () => {
  const form = useSignInForm();
  const { handleLogin } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const resp = await handleLogin(data.email, data.password);

      if (resp.status === 200) {
        form.reset();
      }

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
        placeholder="example@email.com"
        error={ form.errors.email?.message }
      />
      <Input
        register={ form.register }
        type={ 'password' }
        name="password"
        label="Password"
        placeholder="Minimo 6 caracteres"
        error={ form.errors.password?.message }
        signIn={ true }
      />
      <SignInButton type={ 'submit' }>Fazer login</SignInButton>
      <StyledSpan>Ou</StyledSpan>
      <GoogleLoginButton/>
    </SignInFormContainer>
  );
};