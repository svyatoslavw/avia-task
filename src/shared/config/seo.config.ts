export const SEO_CONFIG = {
  FLIGHTS: {
    title: "Airline Tickets",
    description: "Flights List"
  },
  FLIGHT_DETAILS: {
    title: ({ airline, id }: { airline: string; id: string }) => `${airline} - #${id}`,
    description: ({ airline, id }: { airline: string; id: string }) =>
      `Flight details for ${airline} - ${id}`
  },
  FAVORITES: {
    title: "Favorites",
    description: "Favorites List"
  },
  NOT_FOUND: {
    title: "Not Found",
    description: "Not Found"
  }
}
