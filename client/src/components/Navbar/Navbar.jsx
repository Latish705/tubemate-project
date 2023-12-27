// Remove the unused import statement for React
// import React from "react";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
// import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container flex justify-between pt-2">
      <div className=""></div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-white bg-stone-700 "
        />
      </div>
      <div className="flex justify-between">
        <MdVideoCall />
        <IoIosNotifications />
        <img src="" alt="" className="" />
      </div>
    </div>
  );
};

export default Navbar;
