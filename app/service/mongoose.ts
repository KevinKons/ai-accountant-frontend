import mongoose from 'mongoose'

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.q6brgko.mongodb.net/ai-accountant?retryWrites=true&w=majority"

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToMongoDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise

  return cached.conn
}
