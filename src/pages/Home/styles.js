import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4rem;
  gap: 2rem;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 5rem;
  margin-bottom: 2rem;
`;



