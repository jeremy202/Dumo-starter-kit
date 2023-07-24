import { AxiosPromise } from 'axios'

type HttpPromise<T = any> = AxiosPromise<T>

export interface ServerResponse<T = unknown> {
  status: number | string
  message: string
  data?: T
}

export interface Country {
  iso2: string
  id: number
  name: string
}

export interface State extends Country {}