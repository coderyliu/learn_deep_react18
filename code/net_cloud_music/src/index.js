import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// 重置样式
import 'normalize.css'
import './assets/css/index.css'
import App from './App';
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback='loading'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
  // </React.StrictMode>
);
