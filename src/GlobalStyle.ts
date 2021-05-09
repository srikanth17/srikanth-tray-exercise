import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    background: ${theme.palette.background.body};
    ${theme.typography.body};
  }

  .active {
    background-color: lightblue !important;
  }

  .tabs .tab {
    text-transform: none;
  }

  .required:after {
    content: " *";
    color: red;
  }
`;

export default GlobalStyle;
