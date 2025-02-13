import { CircularProgress, Container, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

import { SeatsGrid } from "@/features"
import { useFlightDetails } from "@/shared/api"
import { SEO_CONFIG } from "@/shared/config"
import { FlightSlider } from "@/widgets"

const FlightDetailsPage = () => {
  /** Отримання ідентифікатора рейсу */
  const { id } = useParams()
  /** Отримання рейсу по ідентифікатору */
  const { flight, loading, error } = useFlightDetails(id!)
  /** Якщо рейс завантажується */
  if (loading) {
    return (
      <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    )
  }
  /** Якщо рейс не знайдено або є помилка */
  if (error || !flight) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    )
  }
  /** Заголовки для сторінки */
  const title = SEO_CONFIG.FLIGHT_DETAILS.title({ airline: flight.airline, id: flight.id })
  const description = SEO_CONFIG.FLIGHT_DETAILS.description({
    airline: flight.airline,
    id: flight.id
  })

  return (
    <Container>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Typography
        bgcolor="white"
        variant="h4"
        component="h4"
        fontWeight={700}
        sx={{ my: 4, p: 2, borderRadius: 4 }}
      >
        ✈️ Flight Details: {flight.airline} - #{flight.id}
      </Typography>
      <Typography bgcolor="white" variant="h6" sx={{ mb: 4, p: 2, borderRadius: 4 }}>
        🏢 Terminal: №{flight.terminal} | 🛬 Gate: {flight.gate}
      </Typography>

      <FlightSlider
        from={flight.from}
        to={flight.to}
        fromTime={flight.departureTime}
        toTime={flight.arrivalTime}
      />

      <SeatsGrid flight={flight} />
      <Typography
        variant="subtitle2"
        sx={{ opacity: 0.4, my: 2 }}
        fontWeight={700}
        textAlign="center"
      >
        Information about the selected locations can be found in the shopping cart
      </Typography>
    </Container>
  )
}

export { FlightDetailsPage }
