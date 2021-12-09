import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    html {   
        --dark-blue: #051d3b;
        --blue-300: #5081fb;
        --blue-200: #7ba4fc;
        --blue-100: #96b9fd;
        --offset-white: rgba(255, 255, 255, 0.16);
        --offset-white-hover-8: rgba(255, 255, 255, 0.08);
        --offset-white-hover-24: rgba(255, 255, 255, 0.24);
        --white: #ffffff;
        --placeholder-text: rgba(255,255,255,0.64);
        height: 100%;
    }
    body{
        margin: 32px;
    }
    @media (max-width: 375px){
        body{
            margin: 16px;
        }
    }
    :root {
        height: 100%;
        background-color: var(--dark-blue);
    }
    ::placeholder{
        color: var(--placeholder-text);
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .hide-element{
        display: none;
    }
    button.filled{
        background-color: var(--blue-300);
        color: #000;
        padding: 16px;
        border-radius: 8px;
    }
    button.filled:hover{
        background-color: var(--blue-200);
    }
    button.filled:pressed{
        background-color: var(--blue-200);
        stroke: var(--blue-300);
        stroke-width: 4px;
    }
    button.filled:focus{
        background-color: var(--blue-100);
    }
    button.outlined{
        background-color: rgba(80,129,251,0.08);
        color: var(--white);
        padding: 16px;
    }
    button.outlined:hover{
        background-color: rgba(80,129,251,0.16);
    }
    button.outlined:pressed{
        background-color: rgba(80,129,251,0.16);
        stroke: rgba(80,129,251,0.24);
        stroke-width: 4px;
    }
    button.outlined:focus{
        background-color: rgba(80,129,251,0.24);
    }
    input,select,textarea{
        background-color: var(--offset-white);
        color: var(--white);
        border: 0;
        border-radius: 5px;
        padding: 10px;
    }
    input:hover,select:hover,textarea:hover{
        background-color: var(--offset-white-hover-24); 
    }
    input:focus,select:focus,textarea:focus{
        background-color: var(--offset-white-hover-24); 
    }
    input:focus-visible,select:focus-visible,textarea:focus-visible{
        background-color: var(--offset-white-hover-24); 
        outline: 0;
    }
    .title-font{
        height: 32px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        line-height: 32px; 
        color: var(--white);
    }
    .body-font{
        height: 24px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: var(--white);
    }
    .sidebar-title-font{
        height: 18px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        color: var(--white);
        margin-bottom: 16px;
    }
    .primary-menu-item{
        display: flex;
        flex-flow: row nowrap;
        gap: 16px;
        align-items: center;
    }
    .primary-menu-item-icon{
        color: var(--white);
        background-color: rgba(80,129,251,0.16);
        border-radius: 16px;
        width: fit-content;
        padding: 12px;
    }
    .primary-icon-opacity{
        opacity: 0.48;
    }
    .primary-menu-item-icon:hover{
        background-color: rgba(80,129,251,0.64);
    }
    .primary-icon-opacity:hover{        
        opacity: 0.80;
    }
    .primary-menu-item-icon:pressed{
        background-color: var(--blue-300);
    }
    .primary-icon-opacity:pressed{
        opacity: 1;
    }
    
`;

export default GlobalStyle;
