import UserSchema from '../models/User'
import { faker } from '@faker-js/faker'

const createUser = () => ({
  name: faker.name.findName(),
  event: faker.helpers.arrayElement([
    'Best Finals Ever',
    'Third Stage',
    'Golden Medal',
  ]),
  pic: faker.image.people(50, 50, true),
  score: faker.datatype.number({
    min: 1000,
    max: 50000,
  }),
})

export const seedUsers = async () => {
  // await UserSchema.deleteMany({})
  const isPopulated = await UserSchema.findOne()
  if (isPopulated) return
  const records = 200

  await UserSchema.insertMany(Array.from({ length: records }, createUser))
  const userIds = await UserSchema.find().select('id').sort({ score: 'desc' })
  for (let i = 0; i < records; i++) {
    await UserSchema.findOneAndUpdate({ _id: userIds[i]._id }, { rank: i + 1 })
  }
}
