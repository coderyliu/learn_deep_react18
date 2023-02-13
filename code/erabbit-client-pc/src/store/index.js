import {
  configureStore
} from "@reduxjs/toolkit";

import mainReducer from './modules/main'
import homeReducer from './modules/home'
import categoryReducer from './modules/category'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    cate: categoryReducer,
    detail: detailReducer
  },
  // devTools:true
})

export default store