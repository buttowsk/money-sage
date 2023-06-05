import { Input } from '../../Input/index.jsx';
import { SignUpButton, StyledSpan, SignUpFormContainer } from './styles.js';
import { GoogleLoginButton } from '../../GoogleLoginButton/index.jsx';
import { useSignUpForm } from '../../../hooks/index.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({});
  const form = useSignUpForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = {...userInfo, ...data}
    setUserInfo(userData)
    console.log(userInfo)
  };

  return (
    <SignUpFormContainer onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        register={form.register}
        type={'text'}
        name="email"
        placeholder="Email"
        label="Email"
        error={form.errors.email?.message}
      />
      <Input
        register={form.register}
        type={'password'}
        name="password"
        placeholder="Password"
        label="Password"
        error={form.errors.password?.message}
      />
      <Input
        register={form.register}
        type={'password'}
        name="confirmPassword"
        placeholder="Confirm password"
        label="Confirm password"
        error={form.errors.confirmPassword?.message}
      />
      <SignUpButton type={'submit'}>Continuar</SignUpButton>
      <StyledSpan>Ou</StyledSpan>
      <GoogleLoginButton/>
    </SignUpFormContainer>
  );
};