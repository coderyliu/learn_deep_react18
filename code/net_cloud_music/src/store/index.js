import {
  configureStore
} from '@reduxjs/toolkit'

import recommendReducer from './modules/recommend'
import rankingReducer from './modules/ranking'
import diskReducer from './modules/disk'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    ranking: rankingReducer,
    disk: diskReducer
  }
})

export default store