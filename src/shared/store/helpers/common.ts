import type { ITicket } from "@/shared/types"

/** @description Завантажити стан з localStorage */
export const loadStateFromLS = <T>(state: string): T[] => {
  try {
    const serializedState = localStorage.getItem(state)
    if (serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.error("Could not load state from localStorage", e)
    return []
  }
}
/** @description Отримати вибрані місця літака */
export const getSelectedSeats = (tickets: ITicket[]) => {
  return tickets.reduce(
    (acc, ticket) => {
      acc[getSeatId(ticket.seatId, ticket.flightId)] = true
      return acc
    },
    {} as Record<string, boolean>
  )
}
/** @description Отримати ідентифікатор місця */
export const getSeatId = (seatId: string, flightId: string) => seatId + "_" + flightId
