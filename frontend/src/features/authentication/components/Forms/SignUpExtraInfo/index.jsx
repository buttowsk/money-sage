import { SignUpFormContainer, StyledSpan, SignUpButton } from '../SignUp/styles.js';
import { Input } from '../../Input/index.jsx';
import { useSignUpForm } from '../../../hooks/index.js';
import { backend } from '../../../../../../services/backend.js';

export const SignUpExtraInfoForm = () => {
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
      <Input
        register={form.register}
        type={'text'}
        name="phone_number"
        placeholder="Phone Number"
        label="Phone Number"
        error={form.errors.phone_number?.message}
      />
      <SignUpButton>Confirmar Cadastro</SignUpButton>
    </SignUpFormContainer>
  );
};