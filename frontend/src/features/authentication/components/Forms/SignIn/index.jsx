import { Input } from '../../Input/index.jsx';
import { SignInButton, SignInFormContainer, StyledSpan } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton/index.jsx';
import { useSignInForm } from '../../../hooks/index.js';
import { backend } from '../../../../../../services/backend.js';


export const SignInForm = () => {
  const form = useSignInForm();

  const onSubmit = (data) => {
    console.log(data);
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