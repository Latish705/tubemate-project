import React, { useState } from "react";
import // BiFilterLeft,
// BiAppIndicator,
// BiX,
// BiSearch,
// BiHouseDoorFill,
// BiBookmarkFill,
// BiEnvelopeFill,
// BiChatLeftTextFill,
// BiChevronDown,
// BiBoxArrowInRight,
"react-icons/bi";
// import "./Sidebar.css"; // Import your stylesheet

const Sidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const handleDropDown = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleOpenBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("left-[-300px]");
  };

  return (
    <div className="bg-blue-600 font-[Poppins]">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={handleOpenBar}
      >
        {/* <BiFilterLeft className="px-2 bg-gray-900 rounded-md" /> */}
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md">
            {/* <BiAppIndicator className="px-2 py-1 bg-blue-600 rounded-md" /> */}
            <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">
              Tailwindbar
            </h1>
            {/* <BiX
              className="ml-20 cursor-pointer lg:hidden"
              onClick={handleOpenBar}
            /> */}
          </div>
          <hr className="my-2 text-gray-600" />

          <div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700">
              {/* <BiSearch className="text-sm" /> */}
              <input
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                placeholder="Serach"
              />
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              {/* <BiHouseDoorFill /> */}
              <span className="text-[15px] ml-4 text-gray-200">Home</span>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              {/* <BiBookmarkFill /> */}
              <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>
            <hr className="my-4 text-gray-600" />
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              {/* <BiEnvelopeFill /> */}
              <span className="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              {/* <BiChatLeftTextFill /> */}
              <div
                className="flex justify-between w-full items-center"
                onClick={handleDropDown}
              >
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span
                  className={`text-sm ${isSubMenuOpen ? "rotate-180" : ""}`}
                  id="arrow"
                >
                  {/* <BiChevronDown /> */}
                </span>
              </div>
            </div>
            <div
              className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${
                isSubMenuOpen ? "" : "hidden"
              }`}
              id="submenu"
            >
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Social
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Personal
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Friends
              </h1>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              {/* <BiBoxArrowInRight /> */}
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
