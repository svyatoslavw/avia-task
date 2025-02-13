import { useEffect, useState } from "react"

import { flightsApi } from "@/shared/api"
import { BASE_ERROR_MESSAGE } from "@/shared/constants"
import type { IFlight } from "@/shared/types"

/** @description Отримати всі рейси */
export const useFlights = () => {
  const [flights, setFlights] = useState<IFlight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await flightsApi.getFlights()
        setFlights(data)
        setLoading(false)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : BASE_ERROR_MESSAGE)
        setLoading(false)
      }
    }

    fetchFlights()
  }, [])
  return { flights, loading, error }
}
