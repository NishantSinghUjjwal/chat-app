// src/components/ChatNavbar.tsx
import React from "react";
import { ChatWindowProps } from "./Conversation";
import { FaSignOutAlt } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import Logout from "./Logout";

const ChatNavbar: React.FC<ChatWindowProps> = ({ selectedUser }) => {
  if (!selectedUser) return null;
  return (
    <div className="flex items-center p-4 bg-base-200 border-b border-base-300">
      <img
        src={selectedUser.profilePicture}
        alt={selectedUser.name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="font-bold text-base-content">{selectedUser.name}</div>
        <div
          className={`text-sm ${
            selectedUser.isOnline ? "text-green-500" : "text-gray-500"
          }`}
        >
          {selectedUser.isOnline ? "Online" : "Offline"}
        </div>
      </div>

      <ThemeSwitcher />
      <Logout/>
    </div>
  );
};

export default ChatNavbar;
