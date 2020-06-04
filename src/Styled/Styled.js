import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* , *::before , *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
h1 , h2 , h3{
  font-weight: 600;
}
body , html , #root {
    min-height: 100% ;
    height: 100%;
  overflow-x: hidden;
}




`;
export default GlobalStyle;