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

// 使用store需要注意的一点，当我们的组件懒加载时，使用React.lazy,我们用Suspense组件包裹的时候，懒加载的组件不会订阅store.subscribe
// 解决的办法是，需要让Provider包裹Suspense

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback='loading'>
          <HashRouter>
            <App />
          </HashRouter>
      </Suspense>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
