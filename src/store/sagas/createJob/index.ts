import { takeEvery, all, delay, put } from 'redux-saga/effects';
import { actions } from 'store/slices/createJob';
import { getType } from 'utils/sliceUtils';
import axios from 'axios';

function* createJob(action: any) {
  const { payload } = action;
  const { git_url, git_branch, git_filepath } = payload;
  payload.git = { git_url, git_branch, git_filepath };
  delete payload.git_url;
  delete payload.git_branch;
  delete payload.git_filepath;

  try {
    // const response = axios.post(`https://localhost/api/v1/jobs`, payload);
    const response = payload;
    yield put({ type: getType(actions, 'createJobSucceed'), payload: response });
  } catch (e) {
    yield put({ type: getType(actions, 'createJobFailure'), payload: e });
  }
}

export default function* createJobSaga() {
  yield takeEvery(getType(actions, 'createJob'), createJob);
}
