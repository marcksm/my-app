import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import  { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { loggedin } from './actions/authenticate'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.Token) {
  const user = {
    token: localStorage.Token,
    id: localStorage.Id
   };
  store.dispatch(loggedin(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <Route component={App} />
    </Provider>
  </BrowserRouter>,document.getElementById('root'));
registerServiceWorker();
