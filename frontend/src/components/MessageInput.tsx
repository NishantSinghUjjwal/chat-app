// src/components/MessageInput.tsx
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { RootType } from "../redux/store";
import { Message } from "./Messages";

const MessageInput: React.FC<{ receiver_id: string }> = ({
  receiver_id,
}: {
  receiver_id: string;
}) => {
  const disptach = useDispatch();
  const { messages }: { messages: Message[] } = useSelector(
    (store: RootType) => store.messages
  );
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (message.trim()) {
      try {
        const res = await apiClient.post(`/message/send/${receiver_id}`, {
          message,
        });
        setMessage("");
        const newMessage: Message = res.data.newMessage;
        let newMessages = [...messages, newMessage];
        disptach(setMessages(newMessages));
      } catch (error: any) {
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
        type="text"
        placeholder="Type a message..."
        className="input input-bordered flex-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn bg-blue-500 btn-circle ml-4">
        <FaPaperPlane className="text-white mr-1" />
      </button>
    </form>
  );
};

export default MessageInput;
