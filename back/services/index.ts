import UserModel from '../models/User'
import type { UserResponse } from '../interfaces/UserResponse'

export const getTop100Users = async (options: {
  sortOrder: number
  eventName: string
}): Promise<UserResponse> => {
  const sort = options.sortOrder === -1 ? 'desc' : 'asc'
  let results = await UserModel.find({
    event: { $regex: options.eventName, $options: 'i' },
  })
    .sort({ rank: 'asc' })
    .limit(100)

  if (sort === 'desc') results = results.reverse()

  return {
    page: 1,
    nextPage: -1,
    lastPage: 1,
    sort: options.sortOrder,
    results,
  }
}

export const getFilteredUsers = async (options: {
  page: number
  sortOrder: number
  eventName: string
}): Promise<UserResponse> => {
  const perPage = 12
  const page = options.page - 1
  const sort = options.sortOrder === -1 ? 'desc' : 'asc'
  const totalRecords = await UserModel.find({
    event: { $regex: options.eventName, $options: 'i' },
  }).count()

  const lastPage = Math.ceil(totalRecords / perPage)
  let nextPage = options.page + 1
  if (nextPage > lastPage) nextPage = -1

  const results = await UserModel.find({
    event: { $regex: options.eventName, $options: 'i' },
  })
    .skip(perPage * page)
    .sort({ rank: sort })
    .limit(perPage)

  return {
    page: options.page,
    sort: options.sortOrder,
    nextPage,
    lastPage,
    results,
  }
}
