import {
  configureStore
} from "@reduxjs/toolkit";

import mainReducer from './modules/main'
import homeReducer from './modules/home'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer
  },
  // devTools:true
})

export default store