import { ErrorMessage, Label, InputContainer, StyledInput, ForgotPassword } from './styles.js';


export const Input = ({ label, register, error, ...props }) => {
  return (
    <InputContainer>
      <Label>{ label }</Label>
      <StyledInput { ...props } { ...register(props.name) }/>
      { error && <ErrorMessage>{ error }</ErrorMessage> }
      { props.signIn && <ForgotPassword>Esqueceu a senha?</ForgotPassword> }
    </InputContainer>
  );
};