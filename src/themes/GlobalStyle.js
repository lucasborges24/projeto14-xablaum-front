import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #ffffff;
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
