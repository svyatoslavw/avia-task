import { Container, Grid, Typography } from "@mui/material"

import { FlightCard } from "@/entities/flight"
import { SEO_CONFIG } from "@/shared/config"
import { useAppSelector } from "@/shared/store"

const FavoritesPage = () => {
  /** Вибірка улюблених рейсів */
  const favoriteFlights = useAppSelector((state) => state.favorite)
  return (
    <Container>
      <title>{SEO_CONFIG.FAVORITES.title}</title>
      <meta name="description" content={SEO_CONFIG.FAVORITES.description} />
      <Typography fontWeight={700} variant="h4" component="h1" sx={{ my: 4 }}>
        💖 Favorites
      </Typography>
      <Grid container spacing={3}>
        {favoriteFlights.length ? (
          favoriteFlights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
        ) : (
          <Typography mx="auto" variant="h5" textAlign="center" component="h5">
            No favorite flights
          </Typography>
        )}
      </Grid>
    </Container>
  )
}

export { FavoritesPage }
