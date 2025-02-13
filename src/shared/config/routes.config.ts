export const PUBLIC_ROUTES = {
  HOME: "/",
  FLIGHTS: "/flights",
  FAVORITES: "/favorites",
  FLIGHT_DETAILS: (id: string) => `/flight/${id}`
}
