// define a match between a url and a component

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

export default (
<Route path="/" component={App} />

// ex. google.com/ => renders App
);