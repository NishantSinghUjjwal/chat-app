const express = require('express');
const { register, login, logout, getOtherUsers } = require('../controllers/userController');
const isAuthenticated = require('../middleware/isAuthenticated');
const userRouter = express.Router();
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/getOtherUsers").get(isAuthenticated,getOtherUsers);
module.exports = userRouter