import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /*  primary color */
    --primary-1: #2f3e46;
    --primary-2: #1d262b;
    --primary-3: #3a4d57;
    --primary-4: #577382;
    --primary-5: #7c98a7;
    --primary-6: #a7bac4;
    --primary-7: #d3dce1;

    /* semantic green */
    --semantic-green-1: #63d471;
    --semantic-green-2: #0f3914;
    --semantic-green-3: #1f7229;
    --semantic-green-4: #2fab3e;
    --semantic-green-5: #53cf63;
    --semantic-green-6: #8cdf97;
    --semantic-green-7: #c5efcb;

    --absolute-white: #fff;
    --absolute-black: #000;

    /* spacements */
    --spacement-small: 6px;
    --spacement-default: 12px;
    --spacement-large: 24px;
    --spacement-x-large: 33px;

    /* radius */
    --radius-default: 3px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: var(--primary-1);
  }
`;

export default GlobalStyles;
