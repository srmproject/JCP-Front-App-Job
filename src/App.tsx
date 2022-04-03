import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TemplateApplicationMain from 'components/templates/TemplateApplicationMain';
const App: FC = () => {
  return <TemplateApplicationMain></TemplateApplicationMain>;
};

export default { App }; //object로 export해야 사용가능..
