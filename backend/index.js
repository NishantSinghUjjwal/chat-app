const express = require('express');
const connnectDB = require('./config/database');
const userRouter = require('./routes/userRoute');
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use("/api/v1/user", userRouter)
app.listen(PORT, () => {
    connnectDB()
    console.log(`Server listening on port ${PORT}`)
})