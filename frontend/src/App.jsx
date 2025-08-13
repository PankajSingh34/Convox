import Signup from "./components/Signup";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";
import { BASE_URL } from "./config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <div className="text-white text-center">Test route working!</div>,
  },
  {
    path: "*",
    element: (
      <div className="text-white text-center">
        Page not found. Current path: {window.location.pathname}{" "}
        <a href="/" className="text-blue-400 underline">
          Go home
        </a>
      </div>
    ),
  },
]);

function App() {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  console.log(
    "App component rendered, current path:",
    window.location.pathname
  );

  useEffect(() => {
    if (authUser) {
      const socketio = io(`${BASE_URL}`, {
        query: {
          userId: authUser._id,
        },
      });

      console.log(
        "Socket: Attempting to connect to",
        `${BASE_URL}`,
        "with userId:",
        authUser._id
      );

      socketio.on("connect", () => {
        console.log("Socket: Connected successfully with ID:", socketio.id);
      });

      socketio.on("connect_error", (error) => {
        console.error("Socket: Connection error:", error);
      });

      dispatch(setSocket(socketio));

      socketio?.on("getOnlineUsers", (onlineUsers) => {
        console.log("Socket: Received online users:", onlineUsers);
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
