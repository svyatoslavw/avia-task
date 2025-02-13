import { ISortOption } from "@/shared/types"

/**@description Опції сортування */
export const SORT_OPTIONS: ISortOption[] = [
  { value: "price", label: "💸 Price" },
  { value: "departure", label: "🕔 Departure Time" },
  { value: "tickets", label: "🎫 Tickets" }
]

/**@description Ім'я сховища для квитків */
export const TICKETS_STORE_NAME = "tickets"

/**@description Ім'я сховища для улюблених рейсів */
export const FAVORITES_STORE_NAME = "favorites"

/**@description Повідомлення про помилку */
export const BASE_ERROR_MESSAGE = "Something went wrong"
