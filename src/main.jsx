/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from '.store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)*/
// index.js or main entry file
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'; // Import the store

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App with the Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

