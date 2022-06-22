'use strict'
import mongoose, { Document, Schema } from 'mongoose'

export interface User extends Document {
  name: string
  pic: string
  rank: number
  score: number
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
    },
    pic: {
      type: String,
      required: 'Picture is required',
    },
    score: {
      type: Number,
      required: 'Score is required',
    },
    event: {
      type: String,
      required: 'Event is required',
    },
    rank: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
  }
)

export default mongoose.model<User>('user', UserSchema)
