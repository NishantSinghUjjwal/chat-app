import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io, { Socket } from "socket.io-client";
import { RootType } from "./redux/store";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";
import { Message } from "./components/Messages";
import { setMessages } from "./redux/messageSlice";
import { User } from "./components/Sidebar";
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
        console.log(onlineUsers);
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
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
