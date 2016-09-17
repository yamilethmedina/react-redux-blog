// define a match between a url and a component

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

// nested route

// if the route is / only matches the parent, show App (container, can have a header & footer etc.) and PostsIndex

export default (
<Route path="/" component={App}>
	<IndexRoute component={PostsIndex} />
</Route>

// ex. google.com/ => renders App
);

// current valid routes:
// / 	App
// /greet     App, Greeting
// /greet2    App, Greeting
// /greet3    App, Greeting