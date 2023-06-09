import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.text };
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthenticationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 3rem 3rem 6rem 3rem;
  border-radius: 30px;
  background-color: ${ ({ theme }) => theme.cardBackground };
  backdrop-filter: blur(10px);
  color: ${ ({ theme }) => theme.text };
  gap: 2.5rem;
  position: relative;
`;

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const UserCreated = styled.div`
  font-size: 1.5rem;
  color: ${ ({ theme }) => theme.text };
  background-color: ${ ({ theme }) => theme.primary };
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: absolute;
  top: -8rem;
`;
