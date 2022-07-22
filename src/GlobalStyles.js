import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    /* outline: 1px dotted red;  */
    margin: 0;
    padding: 0;
}
`;

export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
/* padding: 0 50px; */
overflow-x: hidden;
`;


export default GlobalStyle;
