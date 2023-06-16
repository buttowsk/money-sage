import { Container } from './styles.js';

export const FlexContainer = ({ children, ...props }) => {
  return (
    <Container {...props}>
      { children }
    </Container>
  );
};