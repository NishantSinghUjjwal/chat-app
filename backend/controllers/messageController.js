const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.receiverId
        if (!senderId || !receiverId) return res.status(400).json({ message: "All fields are required" })
        const { message } = req.body;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })
        if (!conversation) {

            conversation = await Conversation.create({
                participants: [
                    senderId,
                    receiverId
                ],
                messages: [
                ]
            })
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save();

        return res.status(200).json({ message: "Message sent successfully" })
        //SOCKET IO -LATER
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
}

const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.receiverId;
        const senderId = req.id;
        console.log(receiverId,senderId)
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        }).populate('messages')
        return res.status(200).json({ messages: conversation.messages })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
    sendMessage,
    getMessage
}