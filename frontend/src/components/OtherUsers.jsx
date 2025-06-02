import OtherUser from "./OtherUser";
import useGetOtherUser from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
export default function OtherUsers() {
  useGetOtherUser();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return;

  return (
    <div className=" overflow-auto flex-1">
      {otherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
}
