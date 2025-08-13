import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice"; // ✅ Make sure this action exists

export default function MessageContainer() {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  // ✅ Safe check so it won't throw when onlineUsers is null/undefined
  const isOnline = (onlineUsers || []).includes(selectedUser?._id);

  return (
    <>
      {selectedUser ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex items-center gap-4 p-3 transform bg-pink-500 ">
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser?.fullName}</p>
              </div>
            </div>
          </div>
          <div className="divider my-0 py-0 h-1"></div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-bold">
            Hi, {authUser?.fullName}
          </h1>
          <h1 className="text-2xl text-white">Let’s start a conversation</h1>
        </div>
      )}
    </>
  );
}
