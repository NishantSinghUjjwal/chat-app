// src/components/ChatNavbar.tsx
import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import { User } from "./Sidebar";
import { useSelector } from "react-redux";
import { RootType } from "../redux/store";

const ChatNavbar: React.FC<{ selectedUser: User }> = ({ selectedUser }) => {
  const { onlineUsers } = useSelector((state: RootType) => state.user);
  const { socket } = useSelector((state: RootType) => state.socket)
  const userOnline = onlineUsers.includes(selectedUser?._id);
  const [typing, setTyping] = useState(false)
  const handleTypingOn = () => {
    setTyping(true)

  }
  const handleTypingOff = () => {
    setTyping(false)

  }
  useEffect(() => {
    if (socket) {

      socket.on('Typing', handleTypingOn)
      socket.on('Typing_Stopped', handleTypingOff)
      return () => {
        socket.off("Typing", handleTypingOn);
        socket.off("Typing", handleTypingOff);
      }
    }
  }, [socket])
  return (
    <div
      className={`flex items-center p-4 bg-base-200 border-b border-base-300 ${selectedUser ? "" : "justify-end"
        }`}
    >
      {selectedUser && (
        <>
          <img
            src={selectedUser.profilePhoto}
            alt={selectedUser.userName}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1">
            <div className="font-bold text-base-content">
              {selectedUser.userName}
            </div>
            <div
              className={`text-sm ${userOnline ? "text-green-500" : "text-gray-500"
                }`}
            >
              {

                userOnline ?
                  typing ? "Typing..." :
                    "Online" : "Offline"}
            </div>
          </div>
        </>
      )}

      <Logout />
    </div>
  );
};

export default ChatNavbar;
