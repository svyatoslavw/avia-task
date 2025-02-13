import { useEffect, useState } from "react"

import { flightsApi } from "@/shared/api"
import { BASE_ERROR_MESSAGE } from "@/shared/constants"
import type { IFlight } from "@/shared/types"

/** @description Отримати рейс по ідентифікатору */
export const useFlightDetails = (id: string) => {
  const [flight, setFlight] = useState<IFlight>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const data = await flightsApi.getFlightById(id)
        setFlight(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : BASE_ERROR_MESSAGE)
        setLoading(false)
      }
    }

    fetchFlightDetails()
  }, [id])

  return { flight, loading, error }
}
