import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { backend } from '../../../../services/backend.js';

const SignInSchema = yup.object().shape({
  email: yup.string().email('Este email não é válido').required('Informe um email'),
  password: yup.string().required('Informe uma senha'),
});


const SignUpSchema = yup.object().shape({
  first_name: yup.string().required('Informe seu nome'),
  last_name: yup.string().notRequired(),
  email: yup.string().email('Este email não é válido').required('Informe um email'),
  password: yup.string().required('Informe uma senha').min(6).max(20),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não são iguais'),
});

export const useSignInForm = () => {
  const {
    register, reset, watch, handleSubmit, formState: {
      errors,
    },
  } = useForm({
    resolver: yupResolver(SignInSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });


  return { register, watch, handleSubmit, errors };
};

export const useSignUpForm = () => {
  const {
    register, reset, watch, handleSubmit, formState: {
      errors,
    },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: 'all',
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });


  return { register, watch, handleSubmit, errors };
};