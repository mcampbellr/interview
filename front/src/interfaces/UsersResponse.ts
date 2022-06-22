export interface User {
  _id: string
  name: string
  pic: string
  rank: number
  event: string
  score: number
  createdAt: Date
  updatedAt: Date
}

export interface UserResponse {
  page: number
  nextPage: number
  sort: number
  lastPage: number
  results: User[]
}
