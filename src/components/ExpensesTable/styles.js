import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-height: 100%;
  gap: 2rem;
  padding: 2rem 2rem 25rem 2rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.cardText};
  overflow: auto;
  flex: 1 1 50%;
  
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
