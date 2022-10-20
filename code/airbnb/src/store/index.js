import {
  configureStore
} from '@reduxjs/toolkit'

import homeReducer from './modules/home.js'
import entireReducer from './modules/entire/index.js'
import detailReducer from './modules/detail.js'
import mainReducer from './modules/main.js'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  },
  // devTools:false
})

export default store