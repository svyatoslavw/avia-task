import { useCallback, useMemo } from "react"
import { useDispatch } from "react-redux"

import { addTicket, removeTicket } from "@/entities/cart"
import { useAppSelector } from "@/shared/store"
import { getSeatId } from "@/shared/store/helpers"
import type { IFlight, ISeat } from "@/shared/types"

export const useSeats = (flight: IFlight | undefined) => {
  const dispatch = useDispatch()
  const selectedSeats = useAppSelector((state) => state.cart.selectedSeats)

  /* Формує масив місць і випадковим чином розподіляє зайняті місця */
  const seats = useMemo(() => {
    if (!flight) return []

    const seats: ISeat[] = []
    const { total, remaining } = flight.tickets
    // Залишок зайнятих місць
    const occupiedCount = total - remaining
    const occupiedPositions = new Set<number>()
    /** Заповнення масиву зайнятими місцями */
    while (occupiedPositions.size < occupiedCount) {
      occupiedPositions.add(Math.floor(Math.random() * total) + 1)
    }
    /** Заповнення масиву вільними місцями */
    for (let i = 1; i <= total; i++) {
      const seatId = String(i)
      seats.push({
        id: seatId,
        status: occupiedPositions.has(i) ? "occupied" : "free",
        selected: selectedSeats[getSeatId(seatId, flight.id)]
      })
    }

    return seats
  }, [flight])

  /* Зарезервувати місце в літаку */
  const handleSeatClick = useCallback(
    (seatId: string) => {
      if (!flight) return

      const seat = seats.find((seat) => seat.id === seatId)
      if (!seat || seat.status === "occupied") return

      const seatKey = getSeatId(seatId, flight.id)
      const isSelected = selectedSeats[seatKey]

      /** Вибрати або видалити квиток */
      if (isSelected) {
        dispatch(removeTicket({ seatId, flightId: flight.id }))
      } else {
        dispatch(
          addTicket({
            airline: flight.airline,
            id: seatKey,
            place: seatId,
            price: flight.price,
            seatId: seatId,
            flightId: flight.id
          })
        )
      }
    },
    [flight, dispatch, selectedSeats, seats]
  )

  return { seats, handleSeatClick }
}
