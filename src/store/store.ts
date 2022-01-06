import { configureStore } from '@reduxjs/toolkit'

import plpReducer from './slice'

const store = configureStore({
  reducer: {
    plp: plpReducer,
  }
})

export default store
