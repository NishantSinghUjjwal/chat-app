import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";

function App() {
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
