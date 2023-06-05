import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.3rem;
  padding: 1.2rem .5rem;
  width: 100%;
  border-radius: 20px;
  background-color: ${ ({ theme }) => theme.primary };
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(117, 99, 176, 1);
    border: 2px solid ${ ({ theme }) => theme.background };
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .3s ease-in-out;
    ${ ({ form }) => form === 'signup' ? 'transform: translateX(100%);' : 'transform: translateX(0);' };
  }

`;

export const SignIn = styled.button`
  background-color: transparent;
  border-radius: 12px;
  color: ${ ({ theme }) => theme.text };
  width: 50%;
  height: 100%;
  z-index: 2;
  font-size: 2rem;
  font-weight: 500;
`;

export const SignUp = styled.button`
  background-color: transparent;
  border-radius: 12px;
  color: ${ ({ theme }) => theme.text };
  width: 50%;
  height: 100%;
  z-index: 2;
  font-size: 2rem;
  font-weight: 500;
`;

