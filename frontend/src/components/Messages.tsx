import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetUserMessages from "../hooks/useGetUserMessages";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { RootType } from "../redux/store";
import { User } from "./Sidebar";
import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}
const Messages = ({ receiver_id }: { receiver_id: string }) => {
  const { authUser, selectedUser } = useSelector(
    (store: RootType) => store.user
  );
  const { messages }: { messages: Message[] } = useSelector(
    (state: RootType) => state.messages
  );
  useGetUserMessages(receiver_id);
  useGetRealTimeMessages();

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.length > 0 && authUser ? (
        messages.map((message) => (
          <Message
            key={message._id}
            content={message.message}
            sender={message.senderId == authUser._id ? authUser : selectedUser}
            isCurrentUser={message.senderId == authUser._id}
            timestamp={message.createdAt}
          />
        ))
      ) : (
        <div className="flex-1 p-4 flex items-center justify-center">
          <h2 className="text-lg font-bold">
            Send a message to start chatting
          </h2>
        </div>
      )}
    </div>
  );
};

export default Messages;
