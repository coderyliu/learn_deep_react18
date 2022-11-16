import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import mainReducer from './modules/main'
import recommendReducer from './modules/recommend'
import rankingReducer from './modules/ranking'
import diskReducer from './modules/disk'
import songMenuReducer from './modules/songMenu'
import singerReducer from './modules/singer'
import radioReducer from './modules/radio'
import playerReducer from './modules/player'
import menuReducer from './modules/menu'
import artistReducer from './modules/artist'

const store = configureStore({
  reducer: {
    main: mainReducer,
    recommend: recommendReducer,
    ranking: rankingReducer,
    disk: diskReducer,
    songMenu: songMenuReducer,
    singer: singerReducer,
    radio: radioReducer,
    player: playerReducer,
    menu: menuReducer,
    artist: artistReducer
  },
  middleware: () => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

export default store