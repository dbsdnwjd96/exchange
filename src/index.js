import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/reset.css'
import theme from './components/layout/theme';
import { ThemeProvider } from "styled-components";
//고정 노출 components
import App from './App';
import Nav from './components/nav';
import Footer from './components/footer';
//Connect Router
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <App />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

