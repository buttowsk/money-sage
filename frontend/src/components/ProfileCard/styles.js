import styled from 'styled-components';
import { LuSettings2 } from 'react-icons/lu';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
export const CardContainer = styled.div`
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  position: relative;
  border-radius: 12px;
  grid-column: 2;
  grid-row: 1;
`;

export const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
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
  background-color: ${({theme}) => theme.text};
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const TotalExpensesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

export const TotalExpensesLabel = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const TotalExpenses = styled.div`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  position: relative;
`;

export const CurrencyFlagContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChangeCurrencyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.text};
`;

export const OpenCurrenciesButton = styled(MdOutlineKeyboardArrowDown)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  
  ${({open}) => open === 'opened' && `
    transform: rotate(180deg);
  `}
`;


export const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 3rem;
  right: .5rem;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 1rem 2rem;
  z-index: 1;
`;

export const Currency = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
    
  &:hover {
    color: ${({theme}) => theme.accent};
  }
`;


export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 3rem;
  right: .5rem;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 1rem 2rem;
  z-index: 1;
`;

export const MenuItem = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    color: ${({theme}) => theme.accent};
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.text};
    
  &:hover {
    color: ${({theme}) => theme.accent};
  }
`;

