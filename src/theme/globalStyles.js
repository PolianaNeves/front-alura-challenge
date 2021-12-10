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
        --light-blue: #6bd1ff;
        --white: #ffffff;
        --mac-red: #FF5F56;
        --mac-yellow: #FFBD2E;
        --mac-green: #27C93F;
        --codebox-color: #141414; 
        --offset-white: rgba(255, 255, 255, 0.16);
        --offset-white-hover-8: rgba(255, 255, 255, 0.08);
        --offset-white-hover-24: rgba(255, 255, 255, 0.24);
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
    ::placeholder, .select-font{
        color: var(--placeholder-text) !important;
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
    .button-filled-font{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: var(--dark-blue);
    }
    .button-filled{
        background-color: var(--blue-300);
        color: #000;
        padding: 16px;
        border-radius: 8px;
        border: 0;
    }
    .button-filled:hover{
        background-color: var(--blue-200);
    }
    .button-filled:pressed{
        background-color: var(--blue-200);
        stroke: var(--blue-300);
        stroke-width: 4px;
    }
    .button-filled:focus{
        background-color: var(--blue-100);
    }
    .button-outlined-font{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: var(--white);
    }
    .button-outlined{
        background-color: rgba(80, 129, 251, 0.08);
        color: var(--white);
        padding: 16px;
        border: 0;
        border-radius: 8px;
    }
    .button-outlined:hover{
        background-color: rgba(80,129,251,0.16);
    }
    .button-outlined:pressed{
        background-color: rgba(80, 129, 251, 0.16);
        border: 4px solid rgba(80, 129, 251, 0.24);
        border-radius: 8px; 
    }
    .button-outlined:focus{
        background-color: rgba(80,129,251,0.24);
    }
    input,select,textarea{
        background-color: var(--offset-white);
        color: var(--white);
        border: 0;
        border-radius: 5px;
        padding: 10px;
    }
    input:hover,select:hover,textarea:hover,
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
        flex-grow: 1;
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
    .codebox-bg{
        background-color: var(--light-blue);
        border-radius: 8px;
        flex-grow: 2;
        display: flex;
        flex-flow: column nowrap;
    }
    .codebox{
        background-color: var(--codebox-color);
        display: flex;
        flex-flow: column nowrap;
        margin: 32px;
        flex-grow: 1;
        border-radius: 8px;
    }
    .codebox-options{
        display: flex;
        flex-flow: row nowrap;
        gap: 8px;
        margin: 16px 0px 0px 16px;
    }
    .exit-btn,.minimize-btn,.expand-btn{
        border-radius: 50%;
        width: 12px;
        height: 12px;
        border: 0;
    }
    .exit-btn{
        background-color: var(--mac-red);
    }
    .minimize-btn{
        background-color: var(--mac-yellow);
    }
    .expand-btn{
        background-color: var(--mac-green);
    }
    .codebox-text-font{
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: var(--white);
    }
    .codebox-text, .codebox-text:hover, .codebox-text:focus, .codebox-text:focus-visible{
        background-color: var(--codebox-color);
        resize: none;
        margin: 24px 16px 16px 16px;
        flex-grow: 1;
        color: var(--white);
    }

    .codebox-text::-webkit-scrollbar {
        width: 1em;
    }
    
    .codebox-text::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    
    .codebox-text::-webkit-scrollbar-thumb {
        background-color: var(--dark-blue);
        outline: 1px solid var(--offset-white);
        shape-outside: border-box;
        border-radius: 8px;
    }
`;

export default GlobalStyle;
