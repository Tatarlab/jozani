import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  // your global styles
  body {
    background: red;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;