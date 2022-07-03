import React, { FC } from 'react';
import AppRoutes from 'container/AppRoutes';
import rootReducer, { reducers } from 'store/slices';

export interface AppRoutesProperty {
  appBasePath?: string;
}

const Module = {
  reducer: rootReducer,
  reducers: reducers,
};

const App: FC<AppRoutesProperty> = ({ appBasePath }) => {
  return <AppRoutes appBasePath={appBasePath} />;
};

export default { App, Module }; //object로 export해야 사용가능..
