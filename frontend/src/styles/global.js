import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f2f2f2;
}

`;

export default Global;