import React, { useEffect, useRef } from "react";
import { User } from "./Sidebar";

interface MessageProps {
  content: string;
  sender: User;
  isCurrentUser: boolean;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({
  content,
  sender,
  isCurrentUser,
  timestamp,
}) => {
  const messageRef = useRef<HTMLDivElement>(null);
  function formatTime(strDate: string) {
    const date = new Date(strDate);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + formattedMinutes + " " + ampm;
  }
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [timestamp]);
  return (
    <div
      ref={messageRef}
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`flex flex-col ${isCurrentUser ? "items-end" : "items-start"} justify-end`}>
        {!isCurrentUser && (
          <div className="font-bold text-xs mb-1 text-left">
            {sender.userName}
          </div>
        )}
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg px-3 py-2 rounded-[13px] ${
            isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <div className="text-sm">{content}</div>
        </div>
        <div
          className={`text-xs text-gray-600 mt-1 ${
            isCurrentUser ? "text-right" : "text-left"
          } w-full`}
        >
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;
