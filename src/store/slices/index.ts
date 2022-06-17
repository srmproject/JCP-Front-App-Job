import { combineReducers } from 'redux';
import sample from 'store/slices/sample';
import createApp from 'store/slices/createApp';
import createJob from 'store/slices/createJob';

const rootReducer = combineReducers({
  sample,
  createApp,
  createJob,
});

export default rootReducer;
