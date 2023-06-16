import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.text };
  display: grid;
  grid-template-columns: repeat(1, 1fr) minmax(200px, 300px);
  grid-template-rows: 1fr 1fr;
  padding: 1.5rem;
  grid-gap: 1rem;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 5rem;
  margin-bottom: 2rem;
`;


export const CardTest = styled.div`
  padding: 2rem;
  border-radius: 20px;
  grid-column: 2;
  grid-row: 2;
  height: 100%;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
`;

export const CardTextLarge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 2rem;
  grid-column: 1;
  grid-row: 2;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
`;

