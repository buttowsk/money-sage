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

export const ExpensesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
  width: 100%;
`;

