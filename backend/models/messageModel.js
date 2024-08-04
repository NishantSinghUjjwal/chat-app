const { default: mongoose } = require("mongoose");

const messageModel = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Message = mongoose.model("Message", messageModel);
module.exports = Message