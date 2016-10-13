import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title for Post'
		// can add a custom validation feature for each field
	},
	categories: {
		type: 'input',
		label: 'Enter some categories'
	},
	content: {
		type: 'textarea',
		label: 'Post Contents'
	}
};

// ['title', 'categories', 'content'];

class PostsNew extends Component {

	// define context - an object on the PostsNew class (for redirects to index when form successfully submits)
	static contextTypes = {
		router: PropTypes.object
	};

	// when handleSubmit calls, it'll call this.onSubmit and pass properties from the form (helper)
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate user to index
				// we navigate by calling this.context.router.push with the new path to navigate to
				this.context.router.push('/');
			});
	}

	// return an entire div 
	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field]; // from Redux Form object
		
		return(
		<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
				<label>{fieldConfig.label}</label>
				<fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
					<div className="text-help">
						{fieldHelper.touched ? fieldHelper.error : ''}
				</div>
		</div>
		);

	}
	// define life cycle component
	render() {
		const { handleSubmit } = this.props;
		// equal to
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title;
		return (
			// validate the form as soon as user clicks submit; it'll block form submission if it fails validation
			// when form is submitted, handleSubmit will be called with form contents. if form is valid, handleSubmit will call action creator (this.props.createPost) with the same form contents
			// add has-danger class (from bootstrap) if field was touched and is invalid (can be made into a separate helper function)
			// {`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}
			<form onSubmit={handleSubmit(props => this.onSubmit(props))}>
				<h3>Create a New Post</h3>
			
				{ _.map(FIELDS, this.renderField.bind(this)) }

					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
					
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
	_.each(FIELDS, (type, field) => {

		if (!values[field]) {
			errors[field] = `Enter ${field}`;
		}

	});

	return errors;

}
// pass config to redux-form

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	// name of form doesn't need to match the name of component, it only needs to be unique
	form: 'PostsNewForm',
	fields: _.keys(FIELDS), // returns an array of all the keys on the configuration object above
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