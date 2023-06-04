import { Input } from '../../Input/index.jsx';
import { SignUpButton, StyledSpan, SignUpFormContainer } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton/index.jsx';
import { useSignUpForm } from '../../../hooks/index.js';
import { backend } from '../../../../../../services/backend.js';

export const SignUpForm = () => {
  const form = useSignUpForm();

  const onSubmit = async (data) => {
    try {
      await backend.post('/auth/login', data);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpFormContainer onSubmit={ form.handleSubmit(onSubmit) }>
      <Input
        register={ form.register }
        type={ 'text' }
        name="email"
        placeholder="Email"
        label="Email"
        error={ form.errors.email?.message }
      />
      <Input
        register={ form.register }
        type={ 'password' }
        name="password"
        placeholder="Password"
        label="Password"
        error={ form.errors.password?.message }
      />
      <Input
        register={ form.register }
        type={ 'password' }
        name="confirmPassword"
        placeholder="Confirm password"
        label="Confirm password"
        error={ form.errors.confirmPassword?.message }
      />
      <SignUpButton>Continuar</SignUpButton>
      <StyledSpan>Ou</StyledSpan>
      <GoogleLoginButton/>
    </SignUpFormContainer>
  );
};