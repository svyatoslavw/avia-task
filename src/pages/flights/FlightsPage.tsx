import { Container, Typography } from "@mui/material"

import { SEO_CONFIG } from "@/shared/config"
import { FlightsList } from "@/widgets"

const FlightsPage = () => {
  return (
    <Container>
      <title>{SEO_CONFIG.FLIGHTS.title}</title>
      <meta name="description" content={SEO_CONFIG.FLIGHTS.description} />
      <Typography fontWeight={700} variant="h4" component="h1" sx={{ mt: 4, mb: 2 }}>
        🛫 Available Flights
      </Typography>
      <FlightsList />
    </Container>
  )
}

export { FlightsPage }
