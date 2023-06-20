import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StateContext } from './context/StateContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename='/goit-react-hw-05-movies'>  
      <StateContext>
        <App />     
      </StateContext>
    </BrowserRouter>
    
  </React.StrictMode>
);
