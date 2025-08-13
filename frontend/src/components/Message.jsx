import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();

  const { authUser, selectedUser } = useSelector((store) => store.user);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Update time every minute for real-time display
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Format message time
  const formatMessageTime = (timestamp) => {
    if (!timestamp) return "";

    const messageDate = new Date(timestamp);
    const now = currentTime;

    // If message is from today, show time
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }

    // If message is from yesterday, show "Yesterday"
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    // If message is older, show date
    return messageDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Get the correct avatar URL
  const getAvatarUrl = () => {
    console.log("Message data:", message);
    console.log("Auth user:", authUser);
    console.log("Selected user:", selectedUser);

    if (message?.senderId === authUser?._id) {
      const avatarUrl =
        authUser?.profilePhoto ||
        "https://avatar.iran.liara.run/public/boy?username=user";
      console.log("Using auth user avatar:", avatarUrl);
      return avatarUrl;
    } else {
      const avatarUrl =
        selectedUser?.profilePhoto ||
        "https://avatar.iran.liara.run/public/boy?username=user";
      console.log("Using selected user avatar:", avatarUrl);
      return avatarUrl;
    }
  };

  return (
    <div
      ref={scroll}
      className={`chat ${
        message?.senderId === authUser?._id ? "chat-start" : "chat-end"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user-avatar"
            src={getAvatarUrl()}
            onError={(e) => {
              e.target.src =
                "https://avatar.iran.liara.run/public/boy?username=user";
            }}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 text-white">
          {formatMessageTime(message?.createdAt)}
        </time>
      </div>
      <div
        className={`chat-bubble ${
          message?.senderId === authUser?._id ? "" : "bg-gray-200 text-black"
        } `}
      >
        {message?.message}
      </div>
    </div>
  );
};

export default Message;
