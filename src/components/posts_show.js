import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

	// lifecycle method, get post ID when it's about to load (id comes out of the url, which goes to fetchPost. fetchPost then makes backend request)

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}
	render() {

		const { post} = this.props;
		// ES6 version of:
		// const { post } = this.props.post;
		// console.log(this.props.post);

		// when post data hasn't loaded yet, can add spinner, etc.
		if (!post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
			);
	}
}


function mapStateToProps(state) {
	return { post: state.posts.post};
}
// import action creator shorthand
// 2 sets of parentheses
export default connect(mapStateToProps, { fetchPost })(PostsShow);

