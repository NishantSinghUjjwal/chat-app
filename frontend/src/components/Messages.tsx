import React from "react";
import Message from "./Message";

const Messages = () => {
  const messages = [
    {
      content: "Hey there!",
      sender: "John Doe",
      isCurrentUser: false,
      timestamp: "10:00 AM",
    },
    {
      content: "Hello!",
      sender: "Me",
      isCurrentUser: true,
      timestamp: "10:01 AM",
    },
    {
      content: "How are you?",
      sender: "John Doe",
      isCurrentUser: false,
      timestamp: "10:02 AM",
    },
    {
      content: "I am good, how about you?",
      sender: "Me",
      isCurrentUser: true,
      timestamp: "10:03 AM",
    },
    {
        content: "Hey there!",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:00 AM",
      },
      {
        content: "Hello!",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:01 AM",
      },
      {
        content: "How are you?",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:02 AM",
      },
      {
        content: "I am good, how about you?",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:03 AM",
      },
      {
        content: "Hey there!",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:00 AM",
      },
      {
        content: "Hello!",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:01 AM",
      },
      {
        content: "How are you?",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:02 AM",
      },
      {
        content: "I am good, how about you?",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:03 AM",
      },
      {
        content: "Hey there!",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:00 AM",
      },
      {
        content: "Hello!",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:01 AM",
      },
      {
        content: "How are you?",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:02 AM",
      },
      {
        content: "I am good, how about you?",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:03 AM",
      },
      {
        content: "Hey there!",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:00 AM",
      },
      {
        content: "Hello!",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:01 AM",
      },
      {
        content: "How are you?",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:02 AM",
      },
      {
        content: "I am good, how about you?",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:03 AM",
      },
      {
        content: "Hey there!",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:00 AM",
      },
      {
        content: "Hello!",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:01 AM",
      },
      {
        content: "How are you?",
        sender: "John Doe",
        isCurrentUser: false,
        timestamp: "10:02 AM",
      },
      {
        content: "I am good, how about you?",
        sender: "Me",
        isCurrentUser: true,
        timestamp: "10:03 AM",
      },
  ];
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <Message
          key={index}
          content={message.content}
          sender={message.sender}
          isCurrentUser={message.isCurrentUser}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default Messages;
