import { Middleware } from "@reduxjs/toolkit"

import { FAVORITES_STORE_NAME, TICKETS_STORE_NAME } from "@/shared/constants"
import { saveToLS } from "@/shared/utils"

/** Middleware для збереження даних у localStorage */
export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const res = next(action)

  const { cart, favorite } = store.getState()

  saveToLS(TICKETS_STORE_NAME, cart.tickets)
  saveToLS(FAVORITES_STORE_NAME, favorite)

  return res
}
