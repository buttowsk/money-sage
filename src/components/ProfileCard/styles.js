import styled from 'styled-components';
import { LuSettings2 } from 'react-icons/lu'
export const CardContainer = styled.div`
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.cardText};
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: start;
  padding: 2rem 2rem 20rem 2rem;
  width: 300px;
  position: relative;
  border-radius: 12px;
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
  background-color: ${({theme}) => theme.cardText};
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
  justify-content: space-between;
  width: 80%;
  gap: 1rem;
`;

export const CurrencyFlagContainer = styled.div`
  display: flex;
  align-items: center;
`;



