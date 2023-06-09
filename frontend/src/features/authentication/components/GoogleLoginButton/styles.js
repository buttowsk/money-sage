import styled from 'styled-components';
import {FcGoogle} from 'react-icons/fc';

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid ${ ({ theme }) => theme.accent };
  color: #000;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
  transition: transform .3s ease-in-out;
  
  &:hover, &:focus {
    background-color: rgba(255, 255, 255, .9);
  }
`;

export const ButtonText = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;


export const GoogleIcon = styled(FcGoogle)`
  font-size: 2.4rem;
`;

