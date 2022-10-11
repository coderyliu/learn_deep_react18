import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home.js'
import entireReducer from './modules/entire/index.js'

const store=configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer
  }
})

export default store