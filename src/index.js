import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {AppProvider} from './context'
ReactDOM.render(
  <React.StrictMode>
   <AppProvider>
   <App />
   </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
