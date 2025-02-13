import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { localStorageMiddleware } from "./helpers/store.middleware"
import { cartSlice } from "@/entities/cart"
import { favoriteSlice } from "@/entities/favorite"
import { flightsSlice } from "@/entities/flight"

/**@description Комбінований редюсер */
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  favorite: favoriteSlice.reducer,
  flights: flightsSlice.reducer
})

/**@description Конфігурація стору */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(localStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/**@description Типізований диспатч */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**@description Типізований селектор */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
