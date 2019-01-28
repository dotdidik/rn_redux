import {combineReducers} from 'redux';
import DataReducer from './DataReducer';

import posts from './postReducers';

const allReducers= combineReducers({
  datared: DataReducer,
  posts: posts
});
export default allReducers;
