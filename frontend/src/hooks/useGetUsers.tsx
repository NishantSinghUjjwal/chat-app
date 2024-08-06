import { useEffect, useState } from "react";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    try {
      const res = await apiClient.get("/user/getOtherUsers");
      console.log(res.data);
      setUsers(res.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return { loading, users };
};
export default useGetUsers;
