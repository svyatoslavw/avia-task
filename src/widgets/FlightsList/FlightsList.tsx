import { CircularProgress, Container, Grid, Pagination, Stack, Typography } from "@mui/material"
import { useMemo } from "react"

import { FlightCard } from "@/entities/flight"
import { FlightsFilters, useFlightsFilters } from "@/features"
import { useFlights } from "@/shared/api"

const ITEMS_PER_PAGE = 6

const FlightsList = () => {
  const { flights, loading, error } = useFlights()
  const { search, sort, isSearching, page, handlePageChange } = useFlightsFilters()
  /** Фільтровані рейси */
  const filteredFlights = useMemo(
    () => flights.filter((flight) => flight.airline.toLowerCase().includes(search.toLowerCase())),
    [flights, search]
  )
  /** Сортовані рейси */
  const sortedFlights = useMemo(
    () =>
      [...filteredFlights].sort((a, b) => {
        if (sort === "price") return a.price - b.price
        if (sort === "departure") {
          return new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime()
        }
        if (sort === "tickets") return b.tickets.remaining - a.tickets.remaining
        return 0
      }),
    [filteredFlights, sort]
  )
  /** Отримання рейсів для поточної сторінки */
  const paginatedFlights = useMemo(
    () => sortedFlights.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [sortedFlights, page]
  )
  /** Якщо рейси завантажуються */
  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    )
  }
  /** Якщо є помилка */
  if (error) {
    return (
      <Container sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Typography mx="auto" variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    )
  }

  return (
    <>
      <FlightsFilters />
      <Grid container spacing={3}>
        {!isSearching &&
          (paginatedFlights.length ? (
            paginatedFlights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
          ) : (
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mt: 4, display: "flex", justifyContent: "center", width: "100%" }}
            >
              No flights found
            </Typography>
          ))}
      </Grid>

      {!isSearching && !!sortedFlights.length && (
        <Stack spacing={2} alignItems="center" sx={{ mt: 4, mb: 4 }}>
          <Pagination
            count={Math.ceil(sortedFlights.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      )}
    </>
  )
}

export { FlightsList }
