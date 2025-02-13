import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { SortOption } from "@/shared/types"

interface State {
  search: string
  sort: SortOption
  isSearching: boolean
  page: number
}

const initialState: State = {
  search: "",
  sort: "price",
  isSearching: false,
  page: 1
}

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search
      state.isSearching = false
      state.page = 1
    },
    setIsSearching: (state, action: PayloadAction<{ isSearching: boolean }>) => {
      state.isSearching = action.payload.isSearching
    },
    setSort: (state, action: PayloadAction<{ sort: SortOption }>) => {
      state.sort = action.payload.sort
      state.page = 1
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    }
  }
})

export const { setSearch, setIsSearching, setSort, setPage } = flightsSlice.actions
