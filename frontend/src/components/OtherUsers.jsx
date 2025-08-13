import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = ({ users }) => {
  const { isLoading, error } = useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);

  // Use passed users prop if available, otherwise use otherUsers from Redux
  const displayUsers = users || otherUsers;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-4 space-y-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pink-500"></div>
        <div className="text-center text-gray-500 text-sm">
          Loading users...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-4 p-2">
        <div className="text-sm">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-xs text-pink-500 hover:text-pink-600 underline"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!displayUsers) {
    return (
      <div className="text-center text-gray-500 mt-4">No users available</div>
    );
  }

  if (displayUsers.length === 0) {
    return <div className="text-center text-gray-500 mt-4">No users found</div>;
  }

  return (
    <div className="overflow-auto flex-1">
      {displayUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
