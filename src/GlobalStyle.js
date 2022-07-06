import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #011017;
        background-image: url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?cs=srgb&dl=pexels-adrien-olichon-2387793.jpg&fm=jpg');
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyle;