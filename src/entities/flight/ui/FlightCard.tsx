import { ArrowDownwardRounded, ArrowUpwardRounded, Favorite } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { toggleFavorite } from "@/entities/favorite"
import { PUBLIC_ROUTES } from "@/shared/config"
import { useAppDispatch, useAppSelector } from "@/shared/store"
import type { IFlight } from "@/shared/types"

const FlightCard = ({ flight }: { flight: IFlight }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  /** Стан розширеного режиму */
  const [isExpanded, setIsExpanded] = useState(false)
  /** Вибірка улюблених рейсів */
  const isSelected = useAppSelector((state) =>
    state.favorite.some((favorite) => favorite.id === flight.id)
  )
  /** Додати або видалити улюблений рейс */
  const handleToggleFavorite = (flight: IFlight) => {
    dispatch(toggleFavorite({ flight }))
  }

  return (
    <Grid item xs={12}>
      <Card
        sx={{ cursor: "pointer", borderRadius: "16px" }}
        onClick={() => navigate(PUBLIC_ROUTES.FLIGHT_DETAILS(flight.id))}
      >
        <CardContent>
          <Typography variant="h6" component="div" fontWeight={700}>
            {flight.airline} - #{flight.id}
          </Typography>
          <Typography color="text.secondary">
            From: {flight.from} | To: {flight.to}
          </Typography>
          <Typography color="text.secondary">
            Departure: {new Date(flight.departureTime).toLocaleString()} | Arrival:{" "}
            {new Date(flight.arrivalTime).toLocaleString()}
          </Typography>
          {isExpanded && (
            <>
              <Typography color="text.secondary">
                Terminal: {flight.terminal} | Gate: {flight.gate}
              </Typography>
              <Typography color="text.secondary">
                Price: ${flight.price} | Tickets: {flight.tickets.remaining}/{flight.tickets.total}
              </Typography>
            </>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              startIcon={<Favorite />}
              onClick={(e) => {
                e.stopPropagation()
                handleToggleFavorite(flight)
              }}
            >
              {isSelected ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
            <Button
              startIcon={isExpanded ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />}
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(!isExpanded)
              }}
            >
              {isExpanded ? "Hide details" : "Show details"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

export { FlightCard }
