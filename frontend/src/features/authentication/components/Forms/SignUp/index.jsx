import { Input } from '../../Input/index.jsx';
import { SignUpButton, StyledSpan, SignUpFormContainer } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton/index.jsx';
import { useSignUpForm } from '../../../lib/index.js';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../../context/index.jsx';
import { useContext } from 'react';


export const SignUpForm = () => {
  const form = useSignUpForm();
  const { handleRegister } = useContext(AuthContext);

  const generateName = (email) => {
    const [nome, dominio] = email.split("@");
    const metade = Math.floor(nome.length / 2);
    const primeiroNome = nome.substring(0, metade);
    const segundoNome = nome.substring(metade);

    return {first_name: primeiroNome, last_name: segundoNome}
  }

  const onSubmit = async (data) => {
    const name = generateName(data.email);

    try {
      const resp = await handleRegister(data.email, data.password, data.confirmPassword, name.first_name, name.last_name);

      if (resp.status === 201) {
        form.reset();
      }
    } catch (err) {
      console.log(err);
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
      <SignUpButton type={ 'submit' }>Continuar</SignUpButton>
      <StyledSpan>Ou</StyledSpan>
      <GoogleLoginButton/>
    </SignUpFormContainer>
  );
};