import React from "react";
import { FaAppleWhole } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-10 bottom-0 lg:left-0 left-[-300] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center rounded-md">
          <FaAppleWhole className="px-2 py-1 bg-blue-600 rounded-md"></FaAppleWhole>
          <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold ">
            Youtube
          </h1>
          <IoClose className="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
