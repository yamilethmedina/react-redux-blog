import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
	// define life cycle component
	render() {
		const { fields: { title, categories, content}, handleSubmit } = this.props;
		// equal to
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;
		return (
			// validate the form as soon as user clicks submit; it'll block form submission if it fails validation
			// when form is submitted, handleSubmit will be called with form contents. if form is valid, handleSubmit will call action creator (this.props.createPost) with the same form contents
			// add has-danger class (from bootstrap) if field was touched and is invalid (can be made into a separate helper function)
			// {`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
					<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
					</div>
					<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
					</div>
					<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
						<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
					</div>
			</form>
			);
	}
}

// call when form needs to be validated

function validate(values) {
	const errors = {};

	// if the title does not exist, add a property to errors object called 'title' that contains the error text
	// if the error object has a key that matches a field and that key has a truthy object tied to it, ReduxForm assumes the form is not valid and won't let you submit
	// {title.error} shows the error in the render method
	if (!values.title) {
		errors.title = 'Enter a username';
	}

	if (!values.categories) {
		errors.categories = "Enter categories";
	}

	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;

}
// pass config to redux-form

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	// name of form doesn't need to match the name of component, it only needs to be unique
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);

// user types something in..record it on application state
// state === {
// 	form {
// 		PostsNewForm: {
// 			title: '....',
// 			categories: '....',
// 			content: '...'
// 		}
// 	}
// }