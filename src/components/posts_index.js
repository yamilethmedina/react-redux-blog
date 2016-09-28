import React, { Component } from 'react';
import { connect } from 'react-redux';
// the action creator we want to call
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// refactored to class-based component
class PostsIndex extends Component {
	// define life cycle component
	componentWillMount() {
		// add action creator - this needs to be a container!
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
					<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-right">{post.categories}</span>
						<strong>{post.title}</strong>
						</Link>
						</li>
			);
		});
	}
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>
			<h3>Posts</h3>
				<ul className="list-group">
					{ this.renderPosts() }
				</ul>
			</div>
			);
	}
}

// function mapDispatchToProps(dispatch) {
// 	// access to this.props.fetchPosts
// 	return bindActionCreators( { fetchPosts }, dispatch);
// }

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

// null argument if you don't have mapStateToProps
// { fetchPosts: fetchPosts } object equivalent to mapDispatchToProps function
// export default connect(null, { fetchPosts: fetchPosts} )(PostsIndex);
// ES6 syntax (when key and value are the same)
export default connect(mapStateToProps, { fetchPosts} )(PostsIndex);
