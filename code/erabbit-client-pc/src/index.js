import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

// 引入antd组件库样式文件
import 'antd/dist/reset.css'

// 样式重置
import 'normalize.css'
import '@/assets/less/index.less'

// store
import store from './store'
import { persistor } from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading加载中~'>
    <Provider store={store}>
      <HashRouter>
      {/*PersistGate的作用是向下分发persistStore对象； */}
       <PersistGate loading={null} persistor={persistor}>
        <App />
       </PersistGate>
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
