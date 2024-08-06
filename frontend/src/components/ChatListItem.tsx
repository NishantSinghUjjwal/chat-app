// src/components/UserItem.tsx
import React from 'react';

interface UserItemProps {
  name: string;
  lastMessage: string;
  profilePicture: string;
  isOnline: boolean;
}

const ChatListItem: React.FC<UserItemProps> = ({ name, lastMessage, profilePicture, isOnline }) => {
  return (
    <li className="flex items-center p-2 bg-base-100 hover:bg-base-200 rounded-lg shadow relative">
    <img
      src={profilePicture}
      alt={name}
      className="w-10 h-10 rounded-full mr-3"
    />
    {isOnline && (
      <span className="absolute top-2 left-9 h-3 w-3 bg-green-500 rounded-full border-2 border-base-100"></span>
    )}
    <div>
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-600">{lastMessage}</div>
    </div>
  </li>
  );
};

export default ChatListItem;
