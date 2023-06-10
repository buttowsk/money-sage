import styled from 'styled-components';
import { LuEdit2, LuMoreVertical, LuTrash2, LuMoreHorizontal } from 'react-icons/lu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${ ({ theme }) => theme.text };
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 1rem 1rem 2rem 2rem;
  background-color: ${ ({ theme }) => theme.cardBackground };
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalMoreIcon = styled(LuMoreVertical)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform .2s ease-in-out;

  ${ ({ more }) => more === 'true' && `
    transform: rotate(90deg);
  ` }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  gap: 1rem;
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

export const CardTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;


export const CardBody = styled.div`
  width: 100%;
  background-color: ${ ({ theme }) => theme.cardBackground };
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

export const CardDate = styled.span`
  margin-top: .5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;
