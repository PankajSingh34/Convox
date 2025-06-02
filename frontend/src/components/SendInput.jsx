import { IoIosSend } from "react-icons/io";

export default function SendInput() {
  return (
    <form className="px-4 my-3 ">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="send a message"
          className="text-sm rounded-lg block w-full p-3 bg-gray-800 "
        ></input>

        <button className="absolute flex inset-y-0 items-center end-0 pr-4">
          <IoIosSend />
        </button>
      </div>
    </form>
  );
}
