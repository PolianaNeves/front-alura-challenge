import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    html {   
        --text-color: #666666;
        --text-color-light: #A3A3A3;
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
    @media (max-width: 768px){
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
    input,select,textarea {
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
    .flex {
        display: flex;
    }
    .column {
        flex-direction: column;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .justify-center {
        justify-content: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .align-start {
        align-items: flex-start;
    }
    .align-center {
        align-items: center;
    }
    .grow-1 {
        flex-grow: 1;
    }
    .gap-10 {
        gap: 10px;
    }
    .gap-16 {
        gap: 16px;
    }
    .gap-24 {
        gap: 24px;
    }
    .gap-40 {
        gap: 40px;
    }
    .gap-48 {
        gap: 48px;
    }
    .radius-5 {
        border-radius: 5px;
    }
    .radius-8 {
        border-radius: 8px;
    }
    .mb-24{
        margin-bottom: 24px;
    }
    .text-upper {
        text-transform: uppercase;
    }
    .text-center {
        text-align: center;
    }
    input,select,textarea,
    .color-white, .title-font, .body-font,
    .sidebar-title-font, .primary-menu-item-icon,
    .comment-item, .favorite-item {
        color: var(--white);
    }
    input,select,textarea,
    .bg-offset-white, .comment-item:hover, .favorite-item:hover {
        background-color: var(--offset-white);
    }
    .title-font{
        height: 32px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        line-height: 32px;
    }
    .body-font{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
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
        margin-bottom: 16px;
    }
    .primary-menu-item{
        gap: 16px;
        align-items: center;
        flex-grow: 1;
    }
    .primary-menu-item-icon {
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
    .primary-menu-item-icon:active{
        background-color: var(--blue-300);
    }
    .primary-icon-opacity:active{
        opacity: 1;
    }
    .comment-item, .favorite-item {
        padding: 8px;
        gap: 8px;
    }
    .comment-item:hover, .favorite-item:hover{
        border-radius: 16px;
        background-color: var(--offset-white-hover-8); 
    }
`;

export default GlobalStyle;
