import { useEffect, useState } from "react";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { setMessages } from "../redux/messageSlice";
import { User } from "../components/Sidebar";
import { Message } from "../components/Messages";

const useGetUserMessages = (receiver_id: string) => {
  const disptach = useDispatch();
  const { messages }: { messages: Message[] } = useSelector(
    (store: RootType) => store.messages
  );
  const [loading, setLoading] = useState(true);
  const fetchmessages = async () => {
    try {
      const res = await apiClient.get(`/message/get/${receiver_id}`);
      disptach(setMessages(res.data.messages));
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchmessages();
  }, [receiver_id]);
  return { loading, messages };
};
export default useGetUserMessages;
