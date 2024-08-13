// src/components/Home.tsx
import React, {  useState } from "react";
import ChatListItem from "./ChatListItem";
import useGetUsers from "../hooks/useGetUsers";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import { RootType } from "../redux/store";

export interface User {
  _id: string;
  fullName: string;
  userName: string;
  gender: string;
  profilePhoto: string;
  updatedAt: Date;
  createdAt: Date;
}
const Sidebar: React.FC = () => {
  const { onlineUsers } = useSelector((state: RootType) => state.user);
  const disptach = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, users }: { loading: boolean; users: User[] } = useGetUsers();
  if (!users) return;
  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleOnSelectChat = (user: User) => {
    disptach(setSelectedUser(user));
  };

  return (
    <aside className="w-96 bg-base-100 p-4 border-r border-base-300 flex flex-col h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search users..."
              className="input input-bordered w-full max-w-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="space-y-2 overflow-auto flex-1">
            {filteredUsers.map((user, index) => (
              <ChatListItem
                key={index}
                name={user.userName}
                lastMessage={'Hello'}
                profilePicture={user.profilePhoto}
                isOnline={onlineUsers.includes(user._id)}
                onClick={() => handleOnSelectChat(user)}
              />
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
