const express = require("express");
const { sendMessage, getMessage } = require("../controllers/messageController");
const authenticateUser = require("../middleware/authenticateUser");

const messageRouter = express.Router();
messageRouter.route("/send/:receiverId").post(authenticateUser, sendMessage);
messageRouter.route("/get/:receiverId").get(authenticateUser, getMessage);
module.exports = messageRouter