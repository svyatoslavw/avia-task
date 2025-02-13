import { ShoppingCartOutlined } from "@mui/icons-material"
import { Badge, Box, Button, Popover, Stack, Typography } from "@mui/material"
import React, { useCallback, useMemo } from "react"

import { removeTicket } from "../model/cart.slice"

import { CartItem } from "./CartItem"
import { useAppDispatch, useAppSelector } from "@/shared/store"
import { formatPrice } from "@/shared/utils"

const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const tickets = useAppSelector((state) => state.cart.tickets)
  const dispatch = useAppDispatch()

  const handleRemoveTicket = useCallback(
    (seatId: string, flightId: string) => {
      dispatch(removeTicket({ seatId, flightId }))
    },
    [dispatch]
  )

  const totalPrice = useMemo(() => {
    return tickets.reduce((acc, ticket) => acc + ticket.price, 0)
  }, [tickets])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <div>
      <Badge badgeContent={tickets.length} variant="standard" color="primary">
        <Button
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
          onClick={handleClick}
          variant="text"
          color="inherit"
        >
          <ShoppingCartOutlined />
          Cart
        </Button>
      </Badge>
      <Popover
        id={!!anchorEl ? "simple-popover" : undefined}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Box
          p={2}
          width={400}
          maxHeight={500}
          sx={{ overflowX: "none", overflowY: "auto" }}
          bgcolor="background.default"
        >
          <Typography variant="h6" component="h5" color="primary" fontWeight={600}>
            Selected Seats:
          </Typography>
          <Stack direction="column" gap={2}>
            {tickets.length ? (
              tickets.map((ticket) => (
                <CartItem key={ticket.id} ticket={ticket} handleRemoveTicket={handleRemoveTicket} />
              ))
            ) : (
              <Typography variant="h6" textAlign="center" my={2} component="h6">
                Cart is empty
              </Typography>
            )}
          </Stack>
          <Typography
            bgcolor="primary.main"
            color="white"
            variant="h6"
            p={2}
            borderRadius={4}
            mt={2}
            fontWeight={700}
            component="h5"
          >
            Total Price: {formatPrice(totalPrice)}
          </Typography>
        </Box>
      </Popover>
    </div>
  )
}

export { Cart }
