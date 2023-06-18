import styled from 'styled-components';
import { LuEdit2, LuMoreVertical, LuTrash2 } from 'react-icons/lu';
import { TbCircleArrowUp } from 'react-icons/tb';

export const VerticalMoreIcon = styled(LuMoreVertical)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform .2s ease-in-out;

  ${ ({ more }) => more === 'true' && `
    transform: rotate(90deg);
  ` }
`;

export const EditIcon = styled(LuEdit2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: opacity .2s ease-in-out;
  ${ ({ appear }) => appear === 'true' ? `opacity: 1;` : `opacity: 0; pointer-events: none;` }
`;

export const DeleteIcon = styled(LuTrash2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: #e73131;
  transition: opacity .2s ease-in-out;
  ${ ({ appear }) => appear === 'true' ? `opacity: 1;` : `opacity: 0; pointer-events: none;` }
`;

export const TransactionIcon = styled(TbCircleArrowUp)`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: #e73131;
  transition: transform .2s ease-in-out;

  ${ ({ $income }) => $income && `
    transform: rotate(180deg);
    color: #2ecc71;
  ` }
`;