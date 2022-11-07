import {
  configureStore
} from '@reduxjs/toolkit'

import recommendReducer from './modules/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

export default store