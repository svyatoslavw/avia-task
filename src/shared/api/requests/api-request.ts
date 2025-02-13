import { AxiosHeaders } from "axios"

import { requestMethod } from "./helpers/request-method"

/** @description API запити */
export const apiRequest = <T>() => {
  const headers = new AxiosHeaders()

  const API_URL = "https://679d13f487618946e6544ccc.mockapi.io/testove/v1"

  return {
    get: requestMethod<T>("GET", headers, API_URL),
    post: requestMethod<T>("POST", headers, API_URL),
    put: requestMethod<T>("PUT", headers, API_URL),
    delete: requestMethod<T>("DELETE", headers, API_URL),
    patch: requestMethod<T>("PATCH", headers, API_URL)
  }
}
