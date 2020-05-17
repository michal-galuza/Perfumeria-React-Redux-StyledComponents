import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* , *::before , *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
h1 , h2 , h3{
  font-weight: 600;
}
body , html , #root {
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  overflow-x: hidden;
}




`;
export default GlobalStyle;