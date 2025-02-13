import { CircularProgress, Grid, MenuItem, TextField } from "@mui/material"

import { useFlightsFilters } from "./useFlightsFilter"
import { SORT_OPTIONS } from "@/shared/constants"

export const FlightsFilters = () => {
  const { sort, isSearching, handleSearchChange, handleSortChange } = useFlightsFilters()

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="✨ Filter by Airline"
          variant="outlined"
          onChange={handleSearchChange}
          slotProps={{
            input: {
              endAdornment: isSearching && <CircularProgress size={20} sx={{ marginRight: 1 }} />
            }
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          select
          label="🧵 Sort by"
          variant="outlined"
          value={sort}
          onChange={handleSortChange}
        >
          {SORT_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  )
}
