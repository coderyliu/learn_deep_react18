import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App';

// 样式重置
import 'normalize.css'
import '@/assets/less/index.less'

// store
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading加载中~'>
    <Provider store={store}>
      <HashRouter>
       <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
