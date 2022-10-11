import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// 样式重置
import 'normalize.css'
import '@/assets/css/index.less'
import App from '@/App';
import store from '@/store'

// 配置craco create-react-app config 帮助我们配置路径别名/webpack的其他配置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading'>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
