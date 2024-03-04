// import { Suspense } from 'react';
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App(函数式组件中使用)";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // react-router也提供给了我们两种router选择，一种是HashRouter,一种是BrowserRouter(history API)
  <Suspense fallback={<h2>loading</h2>}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Suspense>
);
