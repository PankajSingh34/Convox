import react from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

export default function MessageContainer() {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex items-center gap-4 p-3 transform bg-pink-500 ">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img
              src="https://wallpapers.com/images/high/daki-demon-slayer-g00uz3hil4ifjc3p.webp"
              alt="user -profile"
            ></img>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>John wick</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
      <Messages />
      <SendInput />
    </div>
  );
}
