// src/components/MessageInput.tsx
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { RootType } from "../redux/store";
import { Message } from "./Messages";
import Loading from "./Loading";
import { User } from "./Sidebar";

const MessageInput: React.FC<{ receiver_id: string }> = ({
  receiver_id,
}: {
  receiver_id: string;
}) => {

  const disptach = useDispatch();
  const { messages }: { messages: Message[] } = useSelector(
    (store: RootType) => store.messages
  );
  const { socket }: { socket: any } = useSelector(
    (store: RootType) => store.socket
  );
  const { authUser }: { authUser: User } = useSelector(
    (store: RootType) => store.user
  );
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false)
  const handleSend = async () => {
    if (message.trim()) {
      try {
        setSendingMessage(true)
        const res = await apiClient.post(`/message/send/${receiver_id}`, {
          message,
        });
        setMessage("");
        const newMessage: Message = res.data.newMessage;
        let newMessages = [...messages, newMessage];
        disptach(setMessages(newMessages));
        setSendingMessage(false)
      } catch (error: any) {
        setSendingMessage(false)
        toast.error(error.response.data.message);
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className="p-4 bg-base-200 flex items-center space-x-2 border-t border-base-300"
    >
      <input
        onFocus={() => {
          socket.emit('Typing', { receiver_id, user_id: authUser._id })
        }}
        onBlur={()=>{
          socket.emit('Typing_Stopped', { receiver_id, user_id: authUser._id })
        }}
        type="text"
        placeholder="Type a message..."
        className="input input-bordered flex-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn bg-blue-500 btn-circle ml-4">
        {
          sendingMessage ?
            <Loading />
            :
            <FaPaperPlane className="text-white mr-1" />}
      </button>
    </form>
  );
};

export default MessageInput;
