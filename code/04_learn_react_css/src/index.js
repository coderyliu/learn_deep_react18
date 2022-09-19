import { createRoot } from 'react-dom/client'

// import App from './01_CSSTransition的使用/App'
// import App from './02_SwitchTransition的使用/App.jsx'
// import App from './03_TransitionGroup的使用/App'
// import App from './04_内联样式的CSS/App'
// import App from './05_普通的CSS/App'
// import App from './06_CSSModules/App'
import App from './07_cssModules编写less/App'

const root=createRoot(document.querySelector('#root'))
root.render(<App></App>)