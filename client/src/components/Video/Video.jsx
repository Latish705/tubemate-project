import React from "react";

const Video = ({ avatar, thumbnail, title, channelName }) => {
  return (
    <div className="w-[250px] border-2 border-gray-400 rounded-md p-2">
      <div>
        <img src="/pexels-i̇lkin-efendiyev-18221948.jpg" alt="" />{" "}
        {/*Gonna get thumbnail from backend in all post then send it as props */}
      </div>
      <div className="flex flex-column items-center justify-between">
        <div className="bg-black-200 rounded-full overflow-none">
          <img
            className="w-[20px] "
            src="/240_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt=""
          />{" "}
          {/* Here will upload avatar from backend */}
        </div>
        <div className="w-[230px] px-4">
          <h1 className="">First Video </h1>{" "}
          {/* Here we will upload title of video */}
          <p className="text-[10px]"> Komal Adwani</p>{" "}
          {/* Here we will channel name */}
        </div>
      </div>
    </div>
  );
};

export default Video;
