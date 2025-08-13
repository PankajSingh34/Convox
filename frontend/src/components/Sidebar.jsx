import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers, setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "../config";

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { otherUsers, authUser } = useSelector((store) => store.user);

  // Update filtered list whenever otherUsers changes
  useEffect(() => {
    if (otherUsers) {
      setFilteredUsers(otherUsers);
    }
  }, [otherUsers]);

  // Real-time search as user types
  useEffect(() => {
    if (!search.trim()) {
      setFilteredUsers(otherUsers || []);
      return;
    }

    const matchedUsers = (otherUsers || []).filter(
      (user) =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(matchedUsers);
  }, [search, otherUsers]);

  // 🔹 Logout
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/logout`, {
        withCredentials: true,
      });
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  //  Search users (form submit handler)
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // Search is now handled in real-time by useEffect
  };

  return (
    <div className="flex flex-col h-full border-r border-slate-500 p-4">
      {/* Search Form */}
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={searchSubmitHandler}
      >
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>

      {/* Divider */}
      <div className="divider my-0 py-0 h-4"></div>

      {/* Scrollable User List */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <OtherUsers users={filteredUsers} />
      </div>

      {/* Logout Button */}
      <div className="mt-2">
        <button className="btn btn-secondary w-full" onClick={logoutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
}
