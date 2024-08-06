// src/components/ChatWindow.tsx
import React from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import ChatNavbar from "./ChatNavbar";

export interface ChatWindowProps {
  selectedUser: {
    name: string;
    profilePicture: string;
    isOnline: boolean;
  } | null;
}

const Conversation: React.FC<ChatWindowProps> = ({ selectedUser }) => {
  if (!selectedUser) {
    return (
      <div className="flex-1 p-4 flex items-center justify-center">
        <h2 className="text-lg font-bold">Select a user to start chatting</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatNavbar selectedUser={selectedUser} />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default Conversation;
