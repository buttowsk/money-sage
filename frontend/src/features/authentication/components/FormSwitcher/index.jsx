import { SignUp, SignIn, SwitcherContainer } from './styles.js';

export const FormSwitcher = ({ form, setForm }) => {

  const handleChange = () => {
    setForm(form === 'signin' ? 'signup' : 'signin');
  };

  return (
    <SwitcherContainer form={ form }>
      <SignIn onClick={ handleChange } type={ 'button' }>Sign In</SignIn>
      <SignUp onClick={ handleChange } type={ 'button' }>Sign Up</SignUp>
    </SwitcherContainer>
  );
};