import styled from 'styled-components';

export const TableContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.cardText};
  overflow: auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
