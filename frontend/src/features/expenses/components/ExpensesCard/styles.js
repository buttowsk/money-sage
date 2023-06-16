import styled from 'styled-components';
import { LuEdit2, LuMoreVertical, LuTrash2 } from 'react-icons/lu';

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


export const CardBodyRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
