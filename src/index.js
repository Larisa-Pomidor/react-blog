import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  login: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: true }
    case "LOGOUT":
      return { ...state, login: false }
    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

