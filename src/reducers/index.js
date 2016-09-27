import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// grab the reducer property from redux-form and create a variable called formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
