const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ubada:214589721@wecollabcluster.kudzqar.mongodb.net/?retryWrites=true&w=majority")

        console.log(`MongoDB connected: ${conn.connection.host}`.magenta.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = connectDB