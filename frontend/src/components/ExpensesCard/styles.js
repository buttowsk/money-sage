import styled from 'styled-components';
import { LuEdit2, LuMoreVertical, LuTrash2, LuChevronDown, LuChevronUp } from 'react-icons/lu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${ ({ theme }) => theme.text };
  border-radius: 12px;
  flex: 1 1 50%;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${ ({ theme }) => theme.cardBackground };
  display: flex;
  align-items: center;
  justify-content: ${ ({ active }) => !active ? 'space-between' : 'center' };
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

export const ArrowDownIcon = styled(LuChevronDown)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  
`;

export const ArrowUpIcon = styled(LuChevronUp)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
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
  background-color: ${ ({ theme }) => theme.cardBackground };
  display: ${ ({ active }) => active ? 'flex' : 'none' };
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: ${ ({ active }) => active ? 'slideIn' : 'slideOut' } 0.5s ease-in-out forwards;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      display: none;
    }
    to {
      opacity: 1;
      height: auto;
    }
  };
  
  @keyframes slideOut {
    from {
      opacity: 1;
      height: auto;
    }
    to {
      display: none;
    }
  };
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
