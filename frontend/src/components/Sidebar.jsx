import react from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";

export default function Sidebar() {
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/logout");
        toast.success(res.data.message),
      
    }catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-screen border-r border-slate-500 p-4">
      {/* Search Form */}
      <form className="flex items-center justify-center gap-2">
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="search..."
        />
        <button type="submit" className="btn btn-secondary">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>

      {/* Divider */}
      <div className="divider my-0 py-0 h-4"></div>

      {/* Scrollable User List */}
      <div className="flex-1 overflow-y-auto">
        <OtherUsers />
      </div>

      <div className="mt-2">
        <button className="btn btn-secondary w-full" onClick={logoutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
}
