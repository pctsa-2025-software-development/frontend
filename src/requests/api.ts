import axios, { AxiosInstance } from 'axios'


function parseBaseUrl(env?: string): string {
  if (!env) return 'http://localhost:3000/api'
  try {
    const u = new URL(env)
    // Allow http for localhost during development only
    if (u.protocol === 'https:' || u.hostname === 'localhost' || u.hostname === '127.0.0.1') {
      return env
    }
    console.warn('VITE_API_BASE_URL must use https or be localhost; falling back to default')
    return 'http://localhost:3000/api'
  } catch (e) {
    console.warn('Invalid VITE_API_BASE_URL; falling back to default')
    return 'http://localhost:3000/api'
  }
}

const baseURL: string = parseBaseUrl(import.meta.env.VITE_API_BASE_URL)

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Abort requests that exceed 5 seconds to avoid hanging UI
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.response.use(
  (r) => r,
  (error) => {
    // Normalize errors so callers can expect Error instances with messages
    if (error?.response) {
      const data = error.response.data
      const message = (data && (data.message || data.error)) || `Request failed (${error.response.status})`
      return Promise.reject(new Error(message))
    }
    if (error?.request) {
      return Promise.reject(new Error('No response from server'))
    }
    return Promise.reject(error)
  },
)

export async function request<T = unknown>(config: import('axios').AxiosRequestConfig): Promise<T> {
  try {
    const res = await api.request<T>(config)
    return res.data
  } catch (err: any) {
    const message = err?.message || 'An unknown error occurred'
    throw new Error(message)
  }
}

export default api
