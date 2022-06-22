import { Router } from 'express'
import controller from '../controller'

const app = Router()

app.get('/leaderboard', controller.getLeaderboard)

export default app
