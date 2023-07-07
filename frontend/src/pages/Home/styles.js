import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.text };
  display: grid;
  grid-template-columns: 1fr .2fr;
  grid-template-rows: 2.5rem 1fr 1fr;
  padding: 1.5rem;
  grid-gap: 1rem;
`;

export const CardTextLarge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 2rem;
  grid-area: 3 / 1 / 3 / 4;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
`;

