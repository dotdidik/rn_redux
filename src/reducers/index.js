import {combineReducers} from 'redux';
import DataReducer from './DataReducer';

import posts from './postReducers';
import sapis from './sapiReducer'

const allReducers= combineReducers({
  datared: DataReducer,
  posts: posts,
  sapis: sapis
});
export default allReducers;
