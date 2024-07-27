import { createGlobalStyle } from 'styled-components';



export const theme = {
  colors: {
    darkGreen: '#2e8b57',
    lightGreen: '#3cb371',
    light: '#ffffff',
    dark: '#000000',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;
