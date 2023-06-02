import styled from 'styled-components';
import { LuEdit2, LuMoreVertical, LuTrash2 } from 'react-icons/lu';

export const Container = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.cardText };
  gap: 2rem;
  border-radius: 12px;
  cursor: pointer;
  pointer-events: ${ ({ isActive }) => isActive ? 'none' : 'all' };
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: ${ ({ isActive }) => !isActive ? 'space-between' : 'center' };
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const MoreIcon = styled(LuMoreVertical)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const EditIcon = styled(LuEdit2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const CardTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const CardDate = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;


export const CardBodyRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardRowLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CardRowValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const DeleteIcon = styled(LuTrash2)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: #e73131;
`;
