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
  gap: 3rem;
  width: 50%;
  max-width: 600px;
  padding: 3rem 4rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5);

  & > * {
    width: 100%;
  }
`;

export const CloseButton = styled(IoClose)`
  position: absolute;
  color: ${ ({ theme }) => theme.primary };
  top: 2rem;
  right: 2rem;
  font-size: 5rem;
  cursor: pointer;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TransactionType = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 2px solid ${ ({ theme }) => theme.primary };
  font-size: 1.6rem;
  font-weight: 700;
  color: ${ ({ theme }) => theme.text };
  background-color: ${ ({ theme, selected }) => selected ? theme.primary : theme.cardBackground };
  box-shadow: ${ ({ $active }) => $active && '0 0 30px 4px rgba(0,196,159,1)' };
  transition: box-shadow 0.4s ease-in-out, transform 0.6s ease;

  &:hover, &:focus {
    box-shadow: 0 0 30px 4px rgba(0, 196, 159, 1);
  }

  &:active {
    transform: scale(0.7);
  }


`;

export const AddButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.cardBackground };
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 30px 4px rgba(0, 196, 159, 1);
    color: ${ ({ theme }) => theme.text };
  }
`;