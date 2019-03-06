import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from './store';

import * as content from './content';
import * as utils from './utils';

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
