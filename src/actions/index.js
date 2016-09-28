import axios from 'axios';

// action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
const ROOT_URL = 'http://redux-blog.herokuapp.com/api/';
const API_KEY = '?key=dfdfafetfetrtrtgfbfgsgagagdsfdffdf3blahblahblahblahhfd';

// grab list of blog posts from API
export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// make an action creator that will recieve the properties and send them to the back end to create a new blog post

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

// show a single post

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}