import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  return (
    <div className="md:flex items-center justify-center mb-6 md:mx-4 hidden">
      <ReactPlayer
        url="https://youtu.be/u14HWsLujDU"
        light={false}
        height={600}
        width={1200}
        controls={true}
      />
    </div>
  );
}
