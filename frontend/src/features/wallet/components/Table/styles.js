import styled from 'styled-components';
import { LuEdit2, LuTrash2 } from 'react-icons/lu';
import { TbCircleArrowUp } from 'react-icons/tb';

export const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  gap: .5rem;
  padding: 1rem 2rem 1rem 2.5rem;
  border-radius: 20px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
  overflow-y: auto;
  position: relative;
`;


export const EditIcon = styled(LuEdit2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const DeleteIcon = styled(LuTrash2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: #e73131;
`;

export const TransactionIcon = styled(TbCircleArrowUp)`
 
  width: 2rem;
  height: 2rem;
  color: #e73131;
  transition: transform .2s ease-in-out;

  ${ ({ $income }) => $income && `
    transform: rotate(180deg);
    color: #2ecc71;
  ` }
`;

