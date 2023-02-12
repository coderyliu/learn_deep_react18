import {
  configureStore
} from "@reduxjs/toolkit";

import mainReducer from './modules/main'
import homeReducer from './modules/home'
import categoryReducer from './modules/category'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    cate: categoryReducer
  },
  // devTools:true
})

export default store