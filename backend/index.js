const express = require('express');
const connnectDB = require('./config/database');
const userRouter = require('./routes/userRoute');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const messageRouter = require('./routes/messageRoute');
const corsEnabledHandler = require('./middleware/allowCors');
const { app, server } = require('./socket/socket');
require('dotenv').config()

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: [`${process.env.FE_BASE_URL}`], methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'] }))


//ROUTES
app.use("/app/v1/user", userRouter)
app.use("/app/v1/message", messageRouter)


server.listen(PORT, () => {
    connnectDB()
    console.log(`Server listening on port ${PORT}`)
})