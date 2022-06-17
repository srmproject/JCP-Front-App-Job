import { all } from 'redux-saga/effects';
import sampleSaga from 'store/sagas/sample';
import createJobSaga from 'store/sagas/createJob';

function* rootSaga() {
  yield all([sampleSaga(), createJobSaga()]);
}

export default rootSaga;
