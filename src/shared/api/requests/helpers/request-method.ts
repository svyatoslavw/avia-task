import axios, { AxiosHeaders } from "axios"

type RequestMethod = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS"

/** @description Wrapper над axios */
export function requestMethod<T>(method: RequestMethod, headers: AxiosHeaders, baseURL?: string) {
  return async (url: string): Promise<T> => {
    const instance = axios.create({ baseURL, headers })

    try {
      const response = await instance({ method, url })
      return response.data as T
    } catch (error) {
      throw error
    }
  }
}
