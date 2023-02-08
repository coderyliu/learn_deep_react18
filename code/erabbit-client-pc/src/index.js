import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 样式重置
import 'normalize.css'
import '@/assets/less/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
