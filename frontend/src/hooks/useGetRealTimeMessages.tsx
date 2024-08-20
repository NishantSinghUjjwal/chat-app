import { useEffect } from "react";
import { RootType } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { Message } from "../components/Messages";

const useGetRealTimeMessages = (sender_id: string) => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state: RootType) => state.socket);
  const { messages } = useSelector((state: RootType) => state.messages);
  useEffect(() => {
    if (socket) {
      const handleNewMessage = ({ socket_sender_id, newMessage }: { socket_sender_id: string, newMessage: Message }) => {
        if (sender_id === socket_sender_id) {
          const newMessages = [...messages, newMessage];
          dispatch(setMessages(newMessages));
        }
      };


      socket.on("newMessage", handleNewMessage);

      // Cleanup the event listener when the sender_id changes or the component unmounts
      return () => {
        socket.off("newMessage", handleNewMessage);
      }
    }
  }, [socket, messages.length, sender_id]);
  return <></>;
};

export default useGetRealTimeMessages;
