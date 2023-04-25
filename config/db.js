const mongoose = require('mongoose')

const connectToDatabase = async ()=> {
    try {
        const connect = await mongoose.connect(process.env.DB_URI)
        console.log(`connected to mongoDB database ${connect.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToDatabase