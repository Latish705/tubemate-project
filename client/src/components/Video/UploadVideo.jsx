import React, { useState } from "react";

const UploadVideo = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      // Display the selected videos
      const newVideos = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      setSelectedVideos((prevVideos) => [...prevVideos, ...newVideos]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      // Display the dropped videos
      const newVideos = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      setSelectedVideos((prevVideos) => [...prevVideos, ...newVideos]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveVideo = (index) => {
    // Remove the selected video
    setSelectedVideos((prevVideos) => {
      const updatedVideos = [...prevVideos];
      updatedVideos.splice(index, 1);
      return updatedVideos;
    });
  };

  const handleRemoveAllVideos = () => {
    // Remove all selected videos
    setSelectedVideos([]);
  };

  const handleUpload = () => {
    // Implement the upload logic here
    if (selectedVideos.length > 0) {
      // You may want to send the videos to a server or perform other actions
      console.log("Uploading videos:", selectedVideos);
    }
  };

  return (
    <div
      className="p-[10px] shadow-lg rounded-sm overflow-hidden h-screen"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="text-center">
        <div>
          <p className="text-blue-600 font-bold">Drag & Drop videos</p>
        </div>
        <div className="h-48 rounded-md bottom-1 text-blue-600 bg-white flex justify-center items-center select-none mt-2">
          <span>Drop videos here</span>
          Drag & Drop Videos here or{" "}
          <label className="text-gray-600 mt-1 cursor-pointer transition-all hover:opacity-5 ml-2">
            Browse
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
          </label>
        </div>
        <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-[500px] overflow-y-auto mt-3">
          {selectedVideos.map((selectedVideo, index) => (
            <div key={index} className="w-48 mr-2 h-48 relative mt-8">
              <span
                className="absolute t-[-2px] right-[9px] text-[20px] cursor-pointer"
                onClick={() => handleRemoveVideo(index)}
              >
                &times;
              </span>
              <video
                src={selectedVideo.url}
                className="w-full h-full rounded-md"
                controls
              />
            </div>
          ))}
          <button
            className={`outline-0 border-0 text-white rounded-md cursor-pointer font-semibold px-3 hover:bg-blue-400 transition-all py-2 w-full mt-4 ${
              selectedVideos.length > 0 ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={handleUpload}
            disabled={selectedVideos.length === 0}
          >
            Upload
          </button>
          {selectedVideos.length > 0 && (
            <button
              className="mt-3 outline-0 border-0 text-white rounded-md cursor-pointer font-semibold px-3 py-2 w-full bg-red-600 hover:bg-red-400"
              onClick={handleRemoveAllVideos}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
