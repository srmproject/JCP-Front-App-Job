import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DynamicRouter = () => {
  const { appName } = useParams();
  const [DynamicDom, setDynamicDom] = useState();
  return (
    <>
      <div>DynamicRouter ::: {appName}</div>
    </>
  );
};

export default DynamicRouter;
