import styled from 'styled-components';

export const TableContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: .5rem;
  padding: 0 2rem;
  border-radius: 20px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  overflow: auto;
  position: relative;
`;

export const TableHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.accent};
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 0;
`;

export const ExpensesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
  width: 100%;
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


export const EmpyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
`;

export const EmpyText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: ${({theme}) => theme.text};
`;