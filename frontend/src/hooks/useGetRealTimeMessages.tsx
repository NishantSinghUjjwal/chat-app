import React, { useEffect } from "react";
import { RootType } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { Message } from "../components/Messages";

const useGetRealTimeMessages = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state: RootType) => state.socket);
  const { messages } = useSelector((state: RootType) => state.messages);

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage: Message) => {
        const newMessages = [...messages, newMessage];
        dispatch(setMessages(newMessages));
      });
    }
  }, [socket, messages.length]);
  return <div>useGetRealTimeMessages</div>;
};

export default useGetRealTimeMessages;
