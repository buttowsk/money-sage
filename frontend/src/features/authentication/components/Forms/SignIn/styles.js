import styled from 'styled-components';

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const SignInButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 20px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  color: ${ ({ theme }) => theme.text };
  font-size: 1.7rem;
  font-weight: 500;
  transition: all .4s ease-in-out;
  border: 2px solid ${ ({ theme }) => theme.primary };

  &:hover, &:focus {
    background-color: ${ ({ theme }) => theme.accent };
    color: ${ ({ theme }) => theme.cardBackground };
  }
`;


export const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${ ({ theme }) => theme.text };
  margin: 1rem 0;
`;