import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { FAVORITES_STORE_NAME } from "@/shared/constants"
import { loadStateFromLS } from "@/shared/store/helpers"
import type { IFavorite } from "@/shared/types"

const initialState = loadStateFromLS<IFavorite>(FAVORITES_STORE_NAME)

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    /** Додати або видалити улюблений рейс */
    toggleFavorite: (state, action: PayloadAction<{ flight: IFavorite }>) => {
      const { flight } = action.payload
      const existingFlight = state.find((favorite) => favorite.id === flight.id)
      if (existingFlight) {
        return state.filter((favorite) => favorite.id !== flight.id)
      } else {
        state.push(flight)
      }
    }
  }
})

export const { toggleFavorite } = favoriteSlice.actions
