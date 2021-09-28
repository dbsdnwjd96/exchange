import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/reset.css'
//고정 노출 components
import App from './App';
import Nav from './components/nav';
import Footer from './components/footer';
//Connect Router
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <App />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

