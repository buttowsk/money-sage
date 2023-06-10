import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ExpenseSchema = yup.object().shape({
  description: yup.string().required('Informe uma descrição'),
  amount: yup.number().required('Informe um valor'),
  tag: yup.string().required('Informe uma categoria'),
  payment_type: yup.string().required('Informe uma forma de pagamento'),
  currency: yup.string().required('Informe uma moeda'),
});

export const useExpenseForm = () => {
  const {
    register, reset, watch, handleSubmit, formState: {
      errors,
    },
  } = useForm({
    resolver: yupResolver(ExpenseSchema),
    mode: 'all',
    defaultValues: {
      description: '',
      amount: '',
      tag: '',
      payment_type: '',
      currency: '',
    },
  });

  return { register, watch, handleSubmit, errors, reset };
}