// src/components/MessageInput.tsx
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-base-200 flex items-center space-x-2 border-t border-base-300">
    <input
      type="text"
      placeholder="Type a message..."
      className="input input-bordered flex-1"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button
      className="btn bg-blue-500 btn-circle ml-4"
      onClick={handleSend}
    >
      <FaPaperPlane className="text-white mr-1" />
    </button>
  </div>
  );
};

export default MessageInput;
