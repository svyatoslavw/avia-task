import { apiRequest } from "../requests/api-request"

import type { IFlight } from "@/shared/types"

/** @description API сервіс для рейсів */
export const flightsApi = {
  getFlights: async () => {
    return apiRequest<IFlight[]>().get("flights")
  },
  getFlightById: async (id: string) => {
    return apiRequest<IFlight>().get(`flights/${id}`)
  }
}
