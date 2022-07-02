import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'container/AppRoutes';
const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
};

export default { App }; //object로 export해야 사용가능..
