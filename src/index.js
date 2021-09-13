import React from 'react'
import ReactDOM from 'react-dom'
 //import 'bootstrap/dist/css/bootstrap.min.css';
import './components/index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/reducers';
import { AppProvider } from './components/context'


const middleware = applyMiddleware(promiseMiddleware, ReduxThunk);

ReactDOM.render(
  <AppProvider>
  <Provider store={createStore(reducer, composeWithDevTools(middleware))}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </AppProvider>,
  document.getElementById('root'),
);
