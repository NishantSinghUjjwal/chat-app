// src/components/Message.tsx
import React from "react";

interface MessageProps {
  content: string;
  sender: string;
  isCurrentUser: boolean;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({
  content,
  sender,
  isCurrentUser,
  timestamp,
}) => {
  return (
    <div
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className="flex flex-col items-start justify-end">
        {!isCurrentUser && (
          <div className="font-bold text-xs mb-1 text-left">{sender}</div>
        )}
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${
            isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <div className="text-sm">{content}</div>
        </div>
        {isCurrentUser ? (
          <div className="text-xs text-gray-600 mt-1 text-right w-full">
            {timestamp}
          </div>
        ) : (
          <div className="text-xs text-gray-600 mt-1 text-left w-full">
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
