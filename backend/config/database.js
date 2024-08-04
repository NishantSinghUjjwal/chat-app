const { default: mongoose } = require("mongoose")

const connnectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    } catch (err) {
        console.log(err)
    }
}
module.exports = connnectDB

