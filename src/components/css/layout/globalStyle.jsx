import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        color : ${props => props.theme.font};
    }

`;

export default GlobalStyles;
