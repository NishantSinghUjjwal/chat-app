import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { RootType } from "./redux/store";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";
import { User } from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutHandler from "./components/LogoutHandler";
function App() {
  const dispatch = useDispatch();
  const { authUser }: { authUser: User } = useSelector(
    (state: RootType) => state.user
  );
  const { socket } = useSelector((state: RootType) => state.socket);
  useEffect(() => {
    if (authUser?._id && authUser?.userName) {
      const s = io(import.meta.env.VITE_BE_BASE_URL, {
        query: {
          userId: authUser._id,
          userName: authUser.userName,
        },
        transports: ["websocket", "polling", "flashsocket"],
      });
      dispatch(setSocket(s));
      s.on("usersOnline", (onlineUsers: string[]) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
    return () => {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    };
  }, [authUser]);

  const router = createBrowserRouter([
    { path: "/", element: <ProtectedRoute><HomePage /></ProtectedRoute> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/logout", element: <LogoutHandler /> },
  ]);
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
