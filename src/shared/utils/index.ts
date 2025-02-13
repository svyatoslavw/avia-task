/** @description Форматування ціни */
export const formatPrice = (price: number) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)

/** @description Розрахунок тривалості рейсу */
export const calculateDuration = (fromTime: string, toTime: string) => {
  const start = new Date(fromTime)
  const end = new Date(toTime)
  const diff = end.getTime() - start.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  return `${hours}h ${minutes}m`
}

/** @description Збереження в LocalStorage */
export const saveToLS = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

/** @description Отримання з LocalStorage */
export const getFromLS = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "null")
}
