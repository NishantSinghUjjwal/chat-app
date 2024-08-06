// src/components/Login.tsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import apiClient from "../utils/apiClient";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/user/login", {
        userName,
        password,
      });
      toast.success(response.data.message);
      dispatch(setAuthUser(response.data.user));
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
