import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  
  &:focus, &:hover, &:valid {
    box-shadow: 0 0 0 3px ${({theme}) => theme.primary};
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 1.5rem;
  font-weight: 700;
`;


export const StyledSelect = styled.select`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
    
  &:focus {
    box-shadow: 0 0 0 3px ${({theme}) => theme.primary};
  }
`;

export const StyledOption = styled.option`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    box-shadow: 0 0 0 3px ${({theme}) => theme.primary};
  }
`;