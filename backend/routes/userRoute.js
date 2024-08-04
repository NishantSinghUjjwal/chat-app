const express = require('express');
const { register, login, logout, getOtherUsers } = require('../controllers/userController');
const authenticateUser = require('../middleware/authenticateUser');
const userRouter = express.Router();
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/getOtherUsers").get(authenticateUser,getOtherUsers);
module.exports = userRouter