import { FaSignOutAlt } from "react-icons/fa";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const res = await apiClient.get("/user/logout");
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <button
      className="btn btn-primary btn-error btn-circle ml-4"
      onClick={handleLogout}
    >
      <FaSignOutAlt className="text-base text-white" />
    </button>
  );
};

export default Logout;
