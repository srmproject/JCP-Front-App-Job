import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import * as types from 'types/createJob';

const initialState: types.createJobObject = {
  job_description: '',
  job_name: '',
  lang_tpye: '',
  lang_version: '',
  project: '',
  git: {
    git_branch: '',
    git_filepath: '',
    git_url: '',
  },
};
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    createJob: (state, action: PayloadAction<types.createJobObject>) => {
      state = action.payload;
    },
    createJobSucceed: (state, action: PayloadAction<types.createJobObject>) => {
      message.success('Success Create Job');
      state = initialState;
    },
    createJobFailure: (_, action: PayloadAction<types.createJobObject>) => {
      message.error('Fail Create Job');
      message.error(action.payload);
    },
  },
});

export const actions = jobSlice.actions;
export default jobSlice.reducer;
