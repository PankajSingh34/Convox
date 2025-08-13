import Message from "./Message";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";

export default function Messages() {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);

  if (!messages) return null; // safer than just `return`

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
}
