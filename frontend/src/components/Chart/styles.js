import { css } from 'styled-components';

export const Container = css`
  .container {
    width: 100%;
    height: 100vh;
    background-color: ${ ({ theme }) => theme.background };
    color: ${ ({ theme }) => theme.text };
    padding: 4rem;

  }
`;