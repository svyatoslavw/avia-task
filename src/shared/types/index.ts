export interface IFlight {
  id: string
  airline: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  price: number
  terminal: string
  gate: string
  tickets: {
    total: number
    remaining: number
  }
}

export interface ITicket {
  id: string
  place: string
  airline: string
  price: number
  seatId: string
  flightId: string
}

export interface ISeat {
  id: string
  status: "occupied" | "free"
  selected: boolean
}

export type SortOption = "price" | "departure" | "tickets"

export interface IFavorite extends IFlight {}

export interface ISortOption {
  value: SortOption
  label: string
}
