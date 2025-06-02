export default function OtherUser(props) {
  const user = props.user;
  return (
    <div>
      <div className="flex items-center gap-4 p-1 rounded-md transform transition-transform duration-300 ease-in-out hover:bg-pink-500 ">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="user?.profilePhoto" alt="user -profile"></img>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}
