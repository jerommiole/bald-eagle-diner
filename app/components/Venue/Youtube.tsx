"use client";

import YouTube from "react-youtube";

const Youtube = () => {
  const getVideoOpts = () => ({
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      iv_load_policy: 3,
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
      {["cNcIhLfC91o", "u-I2sGJtCjg"].map((videoId, index) => (
        <div
          key={index}
          className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-full">
            <YouTube
              videoId={videoId}
              opts={getVideoOpts()}
              className="absolute top-0 left-0 w-full h-full"
              iframeClassName="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Youtube;
