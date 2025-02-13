import { debounce } from "@mui/material"
import { useCallback } from "react"

import { setIsSearching, setPage, setSearch, setSort } from "@/entities/flight"
import { useAppDispatch, useAppSelector } from "@/shared/store"
import type { SortOption } from "@/shared/types"

export const useFlightsFilters = () => {
  const dispatch = useAppDispatch()
  const { search, sort, isSearching, page } = useAppSelector((state) => state.flights)

  const debouncedSetSearch = useCallback(
    debounce((search: string) => {
      dispatch(setSearch({ search }))
    }, 300),
    [dispatch]
  )

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsSearching({ isSearching: true }))
    debouncedSetSearch(event.target.value)
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSort({ sort: event.target.value as SortOption }))
  }

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      dispatch(setPage({ page }))
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [dispatch]
  )

  return {
    search,
    sort,
    isSearching,
    page,
    handleSearchChange,
    handleSortChange,
    handlePageChange
  }
}
