import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.text };
  display: grid;
  grid-template-columns: repeat(1, 1fr) minmax(200px, 300px);
  grid-template-rows: 1fr 1fr;
  padding: 4rem;
  grid-gap: 3rem;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 5rem;
  margin-bottom: 2rem;
`;


export const CardTest = styled.div`
  padding: 2rem;
  border-radius: 12px;
  grid-column: 2;
  grid-row: 2;
  height: 100%;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.cardText };
`;

export const CardTextLarge = styled.div`
  width: 100%;
  max-height: 100%;
  border-radius: 12px;
  padding: 2rem;
  grid-column: 1;
  grid-row: 2;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.cardText };
`;

