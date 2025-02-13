import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TICKETS_STORE_NAME } from "@/shared/constants"
import { getSeatId, getSelectedSeats, loadStateFromLS } from "@/shared/store/helpers"
import type { ITicket } from "@/shared/types"

interface CartState {
  tickets: ITicket[]
  selectedSeats: Record<string, boolean>
}

const initialTickets = loadStateFromLS<ITicket>(TICKETS_STORE_NAME)

const initialState: CartState = {
  tickets: initialTickets,
  selectedSeats: getSelectedSeats(initialTickets)
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /** Додати квиток */
    addTicket: (state, action: PayloadAction<ITicket>) => {
      state.tickets.push(action.payload)
      state.selectedSeats[getSeatId(action.payload.seatId, action.payload.flightId)] = true
    },
    /** Видалити квиток */
    removeTicket: (state, action: PayloadAction<{ seatId: string; flightId: string }>) => {
      state.tickets = state.tickets.filter(
        (ticket) =>
          !(ticket.seatId === action.payload.seatId && ticket.flightId === action.payload.flightId)
      )
      delete state.selectedSeats[getSeatId(action.payload.seatId, action.payload.flightId)]
    }
  }
})

export const { addTicket, removeTicket } = cartSlice.actions
