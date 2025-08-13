import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { BASE_URL } from "../config";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id) return; // Don't run if user not selected

      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${BASE_URL}/api/v1/message/${selectedUser._id}`
        );
        console.log("Fetched messages:", res.data); // Debug log
        dispatch(setMessages(res.data)); // Save messages to Redux store
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [selectedUser, dispatch]); // ✅ Re-run when user changes
};

export default useGetMessages;
