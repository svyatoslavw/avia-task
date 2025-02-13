import { EventSeat } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
import { memo } from "react"

import type { ISeat } from "@/shared/types"

const SeatsGridItem = memo(
  ({
    seat,
    isSelected,
    onSeatClick
  }: {
    seat: ISeat
    isSelected: boolean
    onSeatClick: (id: string) => void
  }) => {
    return (
      <Grid
        item
        xs={4}
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
        width={35}
        height={35}
        sm={4}
        md={2}
      >
        <IconButton
          onClick={() => onSeatClick(seat.id)}
          disabled={seat.status === "occupied"}
          color={seat.status === "occupied" ? "error" : isSelected ? "primary" : "default"}
        >
          <EventSeat />
        </IconButton>
      </Grid>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.seat.id === nextProps.seat.id &&
      prevProps.seat.status === nextProps.seat.status &&
      prevProps.isSelected === nextProps.isSelected
    )
  }
)

export { SeatsGridItem }
