import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #7843e9;
    --color-secondary: #333333;
    --color-light: #f8f8f8;
    --color-white: #ffffff;
    --color-gray: #666666;
    --color-gray-light: #e0e0e0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
    color: var(--color-secondary);
    background-color: var(--color-light);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  section {
    padding: 80px 0;
  }

  .app-wrapper {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center; 
  }

  .container {
    width: 90%;
    // max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyles;