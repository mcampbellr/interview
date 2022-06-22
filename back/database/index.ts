import mongoose from 'mongoose'
import { seedUsers } from './seeder'

const uri = process.env.MONGO_URL as string

mongoose.connect(uri, (err: any) => {
  if (err) return console.log(err)
  console.log('[Connected to database]', `On -> ${uri}`)
  seedUsers()
})
