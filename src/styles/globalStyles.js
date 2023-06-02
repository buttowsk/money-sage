import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Quicksand', sans-serif;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, textarea {
    border: none;
    outline: none;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: #04E566;
    border-radius: 0.5rem;
  }

  *::-webkit-scrollbar-thumb {
    background: #04E566;
    border-radius: 0.5rem;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #04E566;
    opacity: 0.5;
  }
`;