import { SignUpFormContainer, StyledSpan, SignUpButton } from '../SignUp/styles.js';
import { Input } from '../../Input/index.jsx';
import { useSignUpForm } from '../../../hooks/index.js';
import { useLocation } from 'react-router-dom';

export const SignUpExtraInfoForm = () => {
  const form = useSignUpForm();
  const location = useLocation();
  const userInfo = location.state;

  console.log(userInfo)

  const onSubmit = (data) => {
   console.log(data)
  };

  return (
    <SignUpFormContainer onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        register={form.register}
        type={'text'}
        name="first_name"
        placeholder="First Name"
        label="First Name"
        error={form.errors.first_name?.message}
      />
      <Input
        register={form.register}
        type={'text'}
        name="last_name"
        placeholder="Last Name"
        label="Last Name"
        error={form.errors.last_name?.message}
      />
      <SignUpButton type={'submit'}>Confirmar Cadastro</SignUpButton>
    </SignUpFormContainer>
  );
};