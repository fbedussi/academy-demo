import { configureStore } from '@reduxjs/toolkit'

import { productsApi } from '../services/products'
import plpReducer from './slice'

const store = configureStore({
  reducer: {
    plp: plpReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export default store
