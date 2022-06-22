import { type User } from '../models/User'

export interface UserResponse {
  page: number
  nextPage: number
  sort: number
  lastPage: number
  results: User[]
}
