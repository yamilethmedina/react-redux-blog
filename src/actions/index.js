import axios from 'axios';

// action type
export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://redux-blog.herokuapp.com/api/';
const API_KEY = '?key=Giv3Itup';

// grab list of blog posts from API
export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}