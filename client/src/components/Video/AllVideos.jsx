import React, { useState } from "react";
import Video from "./Video";
const AllVideos = () => {
  const [allVideos, setAllVideos] = useState([]);

  return (
    <div>
      {allVideos.map((video) => (
        <Video
          key={video._id}
          thumbnail={video.thumbnail}
          title={video.title}
          avatar={video.avatar}
          channelName={video.channelName}
        />
      ))}
    </div>
  );
};

export default AllVideos;
