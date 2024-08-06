const express = require('express');
const connnectDB = require('./config/database');
const userRouter = require('./routes/userRoute');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const messageRouter = require('./routes/messageRoute');
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: process.env.FE_BASE_URL, credentials: true }))
app.use("/app/v1/user", userRouter)
app.use("/app/v1/message", messageRouter)
app.listen(PORT, () => {
    connnectDB()
    console.log(`Server listening on port ${PORT}`)
})