import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { memo } from "react"

import type { ITicket } from "@/shared/types"
import { formatPrice } from "@/shared/utils"

const CartItem = memo(
  ({
    ticket,
    handleRemoveTicket
  }: {
    ticket: ITicket
    handleRemoveTicket: (seatId: string, flightId: string) => void
  }) => {
    return (
      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="end">
            <Box>
              <Typography variant="h6" component="h6">
                {ticket.airline} - #{ticket.flightId}
              </Typography>
              <Typography variant="subtitle1" component="h6">
                {formatPrice(ticket.price)}
              </Typography>
            </Box>
            <Button
              onClick={() => handleRemoveTicket(ticket.seatId, ticket.flightId)}
              variant="outlined"
              color="error"
            >
              Remove
            </Button>
          </Box>
        </CardContent>
      </Card>
    )
  }
)

export { CartItem }
