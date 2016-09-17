import { FETCH_POSTS } from '../actions/index';

// 2 pieces of state: an array that holds the blog posts, and the active post itself
const INITIAL_STATE = { all: [], post: null };

// single function for actual reducer, with a switch statement
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
		// take whatever current state is, and add the API response of all posts
			return { ... state, all: action.payload.data };

		default:
			return state;
	}
}
