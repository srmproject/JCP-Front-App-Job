import { combineReducers } from 'redux';
import sample from 'store/slices/sample';
import createApp from 'store/slices/createApp';
import createJob from 'store/slices/createJob';

const reducers = {
  sample,
  createApp,
  createJob,
};

const rootReducer = combineReducers(reducers);

export { reducers };
export default rootReducer;
