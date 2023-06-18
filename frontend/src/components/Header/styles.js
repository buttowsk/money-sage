import styled from 'styled-components';
import logo from '../../assets/logo.png';
export const HeaderContainer = styled.header`
  width: 100%;
  grid-column: 1 / 4;
  grid-row: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: ${({theme}) => theme.text};
  z-index: 1;
`;

export const Logo = styled.img.attrs(
  {
    src: logo,
  }
)`
  width: 5rem;
`;



