import mongoose from 'mongoose'

let db

async function connect() {
  if (db) return db

  if (process.env.NODE_ENV === 'production') {
    db = await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
      })
      .catch((err) => console.error(err))
  } else {
    if (!global.__db) {
      global.__db = await mongoose
        .connect(
          'mongodb+srv://Greybph:Strong-Bow-72@cluster0.lek0yfy.mongodb.net/screen-time?retryWrites=true&w=majority',
          {
            useNewUrlParser: true,
          }
        )
        .catch((err) => console.error(err))
    }
    db = global.__db
  }
  return db
}

export { mongoose, connect }
