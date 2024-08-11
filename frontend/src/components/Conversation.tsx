// src/components/ChatWindow.tsx
import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import ChatNavbar from "./ChatNavbar";
import { useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { User } from "./Sidebar";

const Conversation: React.FC = () => {
  const { socket } = useSelector((state: RootType) => state.socket);

  const { selectedUser }: { selectedUser: User} =
    useSelector((store: RootType) => store.user);
  return (
    <div className="flex-1 flex flex-col">
      <ChatNavbar selectedUser={selectedUser} />
      {selectedUser ? (
        <>
          <Messages receiver_id={selectedUser._id} />
          <MessageInput receiver_id={selectedUser._id} />
        </>
      ) : (
        <div className="flex-1 p-4 flex items-center justify-center">
          <h2 className="text-lg font-bold">Select a user to start chatting</h2>
        </div>
      )}
    </div>
  );
};

export default Conversation;
