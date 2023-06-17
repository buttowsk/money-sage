import styled from 'styled-components';
import { LuSettings2 } from 'react-icons/lu';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const CardContainer = styled.div`
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  position: relative;
  border-radius: 20px;
  grid-column: 2;
  grid-row: 1;
`;

export const SettingsIcon = styled(LuSettings2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;

`;

export const Avatar = styled.img`
  width: 5rem;
  border-radius: 50%;
  background-color: ${ ({ theme }) => theme.text };
`;


export const ChangeCurrencyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .7rem;
  color: ${ ({ theme }) => theme.text };
  border-radius: 12px;
  background-color: transparent;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: ${ ({ theme }) => theme.accent };
  }
`;

export const OpenCurrenciesButton = styled(MdOutlineKeyboardArrowDown)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  ${ ({ open }) => open === 'opened' && `
    transform: rotate(180deg);
  ` }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 3rem;
  right: .5rem;
  background-color: ${ ({ theme }) => theme.primary };
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 1rem 2rem;
  z-index: 1;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.text };

  &:hover {
    color: ${ ({ theme }) => theme.accent };
  }
`;


export const NewExpenseButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.cardBackground};
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.text};
  }
`;