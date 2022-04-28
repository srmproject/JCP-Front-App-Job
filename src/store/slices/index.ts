import { combineReducers } from 'redux';
import sample from 'store/slices/sample';
import createApp from 'store/slices/createApp';

const rootReducer = combineReducers({
  sample,
  createApp,
});

export default rootReducer;
