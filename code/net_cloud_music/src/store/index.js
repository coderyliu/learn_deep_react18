import {
  configureStore
} from '@reduxjs/toolkit'

import recommendReducer from './modules/recommend'
import rankingReducer from './modules/ranking'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    ranking: rankingReducer
  }
})

export default store