import { all } from 'redux-saga/effects';
import sampleSaga from 'store/sagas/sample';

function* rootSaga() {
  yield all([sampleSaga()]);
}

export default rootSaga;
