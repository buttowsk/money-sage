import {SignUpExtraInfoForm} from '../../features/authentication/components/Forms';
import { AuthenticationCard, Container } from '../Authentication/styles.js';

export const ConfirmSignUp = () => {
  return (
    <Container>
      <AuthenticationCard>
        <SignUpExtraInfoForm/>
      </AuthenticationCard>
    </Container>
  );
}