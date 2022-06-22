import { RequestHandler } from 'express'
import type { UserResponse } from '../interfaces/UserResponse'
import { getFilteredUsers, getTop100Users } from '../services'

const getLeaderboard: RequestHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const sortOrder = Number(req.query.sort_order) || 1
  const eventName = (req.query.event_name as string) || ''
  const view = (req.query.view as 'hundred' | 'global') || 'global'

  let results: UserResponse

  if (view === 'global') {
    results = await getFilteredUsers({
      page,
      sortOrder,
      eventName,
    })
  } else {
    results = await getTop100Users({ sortOrder, eventName })
  }

  res.send(results)
}

export default {
  getLeaderboard,
}
