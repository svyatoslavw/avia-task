import { createBrowserRouter } from "react-router-dom"

import { FlightsPage, NotFound } from "@/pages"
import { Layout } from "@/widgets/Layout/Layout"

/**@description Налаштування маршрутів з використанням lazy loading */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FlightsPage />
      },
      {
        path: "/flight/:id",
        lazy: async () => {
          const { FlightDetailsPage } = await import("@/pages/flight-details/FlightDetailsPage")
          return { Component: FlightDetailsPage }
        }
      },
      {
        path: "/favorites",
        lazy: async () => {
          const { FavoritesPage } = await import("@/pages/favorites/FavoritesPage")
          return { Component: FavoritesPage }
        }
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])
