const mongoose = require('mongoose')

//mongoose functions return promises
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB