import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from './Styled/Styled';
import theme from './Styled/theme';
import {ThemeProvider} from 'styled-components';
import {Provider} from "react-redux";
import store from './Data/Store/Store';
ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <GlobalStyle/>
 <App/>
 </ThemeProvider>
 </Provider>  ,
  document.getElementById('root')
);


