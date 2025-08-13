import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice"; // adjust path if needed
import { BASE_URL } from "../config";

export default function SendInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!message.trim() || !selectedUser?._id) return;

    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/message/send/${selectedUser._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const newMessage = res?.data?.newMessage;
      if (newMessage) {
        dispatch(setMessages([...messages, newMessage])); // ✅ Proper usage
        setMessage("");
      }
    } catch (error) {
      console.error("Message send failed:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 my-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Send a message"
          className="text-sm rounded-lg block w-full p-3 bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <IoIosSend size={20} />
        </button>
      </div>
    </form>
  );
}
