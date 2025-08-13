import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

export default function OtherUser({ user }) {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);

  console.log("OtherUser component - onlineUsers from Redux:", onlineUsers);

  const isOnline =
    Array.isArray(onlineUsers) && onlineUsers.includes(user?._id);

  console.log(
    `User ${user?.fullName} (ID: ${user?._id}): onlineUsers =`,
    onlineUsers,
    "isOnline =",
    isOnline
  );

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-grey-200" : ""
        } flex items-center gap-4 p-1 rounded-md transform transition-transform duration-300 ease-in-out hover:bg-pink-500`}
      >
        {/* Avatar with Tailwind CSS online indicator */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="user-profile" />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}
