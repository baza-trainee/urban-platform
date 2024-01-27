import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  //   auth: authReducer
})

const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
