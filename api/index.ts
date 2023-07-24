import axios, {
  Method,
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
export interface Request {
  headers?: Record<string, string>
  data?: any
  params?: any
}
class Api {
  private api: AxiosInstance
  private token?: string
  private baseUrl?: string

  constructor() {
    this.api = axios.create({
      timeout: 60000,
    })
    this.api.interceptors.request.use(this.handleRequestUse)
    this.api.interceptors.response.use(this.handleResponseUse)
  }

  public setBaseUrl(url: string) {
    this.baseUrl = url
    this.api.defaults.baseURL = this.baseUrl
  }

  public setToken(token: string) {
    this.token = token
    this.api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
  }

  public setProjectId(projectId: string) {
    this.api.defaults.headers.common['x-project-id'] = projectId
  }

  private handleRequestUse(config: InternalAxiosRequestConfig) {
    // handle request interceptor logic here
    return config
  }

  private handleResponseUse(config: AxiosResponse) {
    // handle response interceptor logic here
    return config
  }

  private async handleRequest(
    url: string,
    method: Method,
    config: Request = {}
  ): Promise<AxiosResponse<any>> {
    try {
      const { headers, data, params } = config
      const response = await this.api.request({
        url,
        method,
        data,
        params,
        headers,
      })

      return response.data
    } catch (e: any) {
      const error = e as AxiosError
      const statusCode = error.response?.status

      // logging only errors that are not 401
      if (statusCode && statusCode !== 401) {
        console.error(error)
        return Promise.reject(error.response?.data)
      }

      if (statusCode === 401) {
        navigateTo('/', {
          redirectCode: 302,
        })
      }

      return Promise.reject(error)
    }
  }

  public get<T>(url: string, config: Request = {}): AxiosPromise<T> {
    return this.handleRequest(url, 'get', config)
  }

  public post<T>(url: string, config: Request = {}): AxiosPromise<T> {
    return this.handleRequest(url, 'post', config)
  }

  public put<T>(url: string, config: Request = {}): AxiosPromise<T> {
    return this.handleRequest(url, 'put', config)
  }

  public delete<T>(url: string, config: Request = {}): AxiosPromise<T> {
    return this.handleRequest(url, 'delete', config)
  }

  public patch<T>(url: string, config: Request = {}): AxiosPromise<T> {
    return this.handleRequest(url, 'patch', config)
  }
}

export default new Api()
