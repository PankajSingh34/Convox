import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

export default function Homepage() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-3 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
