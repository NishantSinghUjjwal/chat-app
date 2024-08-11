import { FaSignOutAlt } from "react-icons/fa";
import apiClient from "../utils/apiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { clearMessages } from "../redux/messageSlice";
import { clearUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await apiClient.get("/user/logout");
      dispatch(clearMessages(null));
      dispatch(clearUser(null));
      toast.success(res.data.message);

      navigate("/login");
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
