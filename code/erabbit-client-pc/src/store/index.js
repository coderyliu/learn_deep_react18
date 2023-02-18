import {
  configureStore
} from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import mainReducer from './modules/main'
import homeReducer from './modules/home'
import categoryReducer from './modules/category'
import detailReducer from './modules/detail'
import persistReducer from "./modules/cart";

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    cate: categoryReducer,
    detail: detailReducer,
    cart: persistReducer
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    })]
  },
  // devTools:true
})

export const persistor = persistStore(store)

export default store