import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store'
import ProviderContext from './hoc/provider'
import App from './App';
import './style.css'

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ProviderContext.Provider value={store}>
      <App></App>
    </ProviderContext.Provider>
  </Provider>
);
