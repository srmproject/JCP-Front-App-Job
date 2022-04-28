import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplateApplicationMain from 'components/templates/TemplateApplicationMain';
import ApplicationCreate from 'components/templates/ApplicationCreate';
import DynamicRouter from './DynamicRouter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TemplateApplicationMain />} />
      <Route path="/create" element={<ApplicationCreate />} />
      <Route path="/apps/:appName" element={<DynamicRouter />} />
      <Route path="*" element={<div>홈화면?</div>} />
    </Routes>
  );
};

export default AppRoutes;
