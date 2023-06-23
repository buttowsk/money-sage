import { ButtonText, GoogleButton, GoogleIcon } from './styles.js';
import { authAPI } from '../../services/auth.js';

export const GoogleLoginButton = () => {
  const googleButton = async () => {
    try {
      const resp = await authAPI.get('/o/google-oauth2/?redirect_uri=https://buttowsk.github.io/money-sage/');
      window.location.replace(resp.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <GoogleButton onClick={ googleButton } type={ 'button' }>
      <GoogleIcon/>
      <ButtonText>Continuar com Google</ButtonText>
    </GoogleButton>
  );
};