import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
import { BASE_URL } from "../config";

export default function useGetOtherUsers() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authUser) return;

    const fetchOtherUsers = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Reduced timeout for better UX
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        axios.defaults.withCredentials = true;
        const res = await axios.get(`${BASE_URL}/api/v1/user/`, {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Remove logged-in user from the list
        const filteredUsers = res.data.filter(
          (user) => user._id !== authUser._id
        );

        dispatch(setOtherUsers(filteredUsers));
      } catch (error) {
        if (error.name === "AbortError") {
          setError("Request timeout - taking too long to fetch users");
          console.error("Request timeout - taking too long to fetch users");
        } else if (error.code === "NETWORK_ERROR") {
          setError("Network error - please check your connection");
          console.error("Network error:", error);
        } else {
          setError("Failed to load users");
          console.error("Error fetching users:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchOtherUsers();
  }, [dispatch, authUser]);

  return { isLoading, error };
}
