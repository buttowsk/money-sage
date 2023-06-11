import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ExpenseSchema = yup.object().shape({
  description: yup.string().required('Informe uma descrição'),
  amount: yup.number().required('Informe um valor').positive('A quantidade deve ser um valor positivo'),
  tag: yup.string().required('Informe uma categoria'),
  payment_type: yup.string().required('Informe uma forma de pagamento'),
  currency: yup.string().required('Informe uma moeda'),
});

export const useExpenseForm = () => {
  const {
    register, reset, watch, setValue, handleSubmit, formState: {
      errors,
    },
  } = useForm({
    resolver: yupResolver(ExpenseSchema),
    mode: 'all',
    defaultValues: {
      description: '',
      amount: 0,
      tag: '',
      payment_type: '',
      currency: '',
    },
  });

  return { register, watch, handleSubmit, errors, reset, setValue };
}