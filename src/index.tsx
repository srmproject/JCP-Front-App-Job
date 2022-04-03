import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import 'antd/dist/antd.css';
import './Global.css';

// 해당 index.tsx 파일은 로컬 yarn start때만 사용됨
// 로그인 및 provider제공
const isDev = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: isDev,
});
// RunSaga
sagaMiddleware.run(rootSaga);
const Root = () => {
  return (
    <Provider store={store}>
      <App.App></App.App>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
