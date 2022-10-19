import {
  configureStore
} from '@reduxjs/toolkit'

import homeReducer from './modules/home.js'
import entireReducer from './modules/entire/index.js'
import detailReducer from './modules/detail.js'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store