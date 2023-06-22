import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  max-height: 4rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 12px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  border: 2px solid ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.text };
  padding: 1.235rem 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
`;


export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  left: .5rem;
  pointer-events: none;
  position: absolute;
  top: -1.8rem;
  transition: .5s;
`;

export const ForgotPassword = styled.a`
  font-size: 1.2rem;
  color: ${ ({ theme }) => theme.text };
  position: absolute;
  bottom: -2rem;
  right: 0;
  transition: .5s;

  &:hover, &:focus {
    color: rgba(255, 255, 255, .5);
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -2rem;
  left: 0;
  margin-top: .5rem;
  color: red;
  padding: 0 .5rem;
`;