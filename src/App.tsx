import React, { FC } from 'react';
import AppRoutes from 'container/AppRoutes';

export interface AppRoutesProperty {
  appBasePath?: string;
}

const App: FC<AppRoutesProperty> = ({ appBasePath }) => {
  return <AppRoutes appBasePath={appBasePath} />;
};

export default { App }; //object로 export해야 사용가능..
