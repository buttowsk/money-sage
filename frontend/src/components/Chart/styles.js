import styled from 'styled-components';

export const TolltipContainer = styled.div`
  background-color: ${ ({ theme }) => theme.cardBackground };
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;