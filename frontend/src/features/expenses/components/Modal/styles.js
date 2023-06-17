import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 2rem;
  width: 50%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  & > * {
    width: 100%;
  }
`;

export const CloseButton = styled(IoClose)`
  position: absolute;
  color: ${ ({ theme }) => theme.primary };
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  cursor: pointer;
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IncomeButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.primary };
  `;

export const ExpenseButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.primary};
  ` 


export const AddButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.accent };
  color: ${ ({ theme }) => theme.cardBackground };
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ ({ theme }) => theme.primary };
    color: ${ ({ theme }) => theme.text };
  }
`;