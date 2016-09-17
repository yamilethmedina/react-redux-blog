import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// replace app component with instance of React Router
// decides what components React needs to render when the URL changes
// browserHistory tells React how to respond to a change in the URL - whenever the URL updates, React will interpret everything after the protocol (ex. http://www.blog.com -> /posts/5)
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

