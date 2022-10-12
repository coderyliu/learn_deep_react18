import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// 样式重置
import 'normalize.css'
import '@/assets/css/index.less'
import App from '@/App'
import store from '@/store'
import theme from '@/assets/theme'

// 配置craco create-react-app config 帮助我们配置路径别名/webpack的其他配置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading'>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
  // </React.StrictMode>
);
