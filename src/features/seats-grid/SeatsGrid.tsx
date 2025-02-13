import { Box, Container, Grid, Typography } from "@mui/material"

import { SeatsGridItem } from "./SeatsGridItem"
import { useSeats } from "./useSeats"
import { useAppSelector } from "@/shared/store"
import { getSeatId } from "@/shared/store/helpers/common"
import type { IFlight } from "@/shared/types"

interface SeatsGridProps {
  flight: IFlight
}

const SeatsGrid = ({ flight }: SeatsGridProps) => {
  const { seats, handleSeatClick } = useSeats(flight)

  const selectedSeats = useAppSelector((state) => state.cart.selectedSeats)

  return (
    <Container maxWidth="xs">
      <Box
        height="180px"
        bgcolor="grey.400"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ borderTopLeftRadius: 9999, borderTopRightRadius: 9999 }}
      >
        <Typography color="primary" variant="h6" fontWeight={700}>
          Select a Seat
        </Typography>
      </Box>
      <Grid container borderLeft={6} borderRight={6} borderColor="grey.500">
        {seats.map((seat) => (
          <SeatsGridItem
            isSelected={selectedSeats[getSeatId(seat.id, flight.id)]}
            key={seat.id}
            seat={seat}
            onSeatClick={handleSeatClick}
          />
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        bgcolor="grey.400"
        height={6}
      />
    </Container>
  )
}

export { SeatsGrid }
