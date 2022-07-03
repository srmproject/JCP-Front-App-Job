import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplateApplicationMain from 'components/templates/TemplateApplicationMain';
import ApplicationCreate from 'components/templates/ApplicationCreate';
import DynamicRouter from './DynamicRouter';
import { basePathPrefix } from 'utils/routeUtils';

const AppRoutes = ({ appBasePath }: any) => {
  return (
    <Routes>
      <Route path="" element={<TemplateApplicationMain />}></Route>
      <Route path="create" element={<ApplicationCreate />} />
      {/* <Route path={basePathPrefix('', appBasePath)} element={<TemplateApplicationMain />} />
      <Route path={basePathPrefix('/create', appBasePath)} element={<ApplicationCreate />} />
      <Route path={basePathPrefix('*', appBasePath)} element={<div>홈화면?</div>} /> */}
    </Routes>
  );
};

export default AppRoutes;
