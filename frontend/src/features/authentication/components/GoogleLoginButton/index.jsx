import { ButtonText, GoogleButton, GoogleIcon } from './styles.js';

export const GoogleLoginButton = () => {
  return (
      <GoogleButton>
        <GoogleIcon/>
        <ButtonText>Continuar com Google</ButtonText>
      </GoogleButton>
  );
}