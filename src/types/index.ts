export interface Resource {
  id: number
  title: string
  description: string
  url: string
}

export interface ApiError {
  message: string
  code?: number
}
