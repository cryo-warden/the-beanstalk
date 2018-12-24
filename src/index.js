import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import * as content from './content';
import * as utils from './utils';

const store = Redux.createStore((state = {
  address: [
    ['area', 0],
    ['room', 0],
  ],
}, action) => {
  if (action.type === 'setAddress') {
    return {
      ...state,
      address: action.address,
    };
  }

  return state;
});

window.dev = {
  content,
  store,
  utils,
};

ReactDOM.render((
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
