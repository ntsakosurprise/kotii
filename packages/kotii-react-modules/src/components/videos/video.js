import React, { useEffect, useState } from "react";

const VideoComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  return <video {...props?.videoData} data-test style={{ maxWidth: "100%" }} />;
};

const Video = () => {
  const [videoProps, setVideoProps] = useState(null);

  useEffect(() => {
    setVideoProps({
      "data-video-id": "ABC123",
      src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      controls: true,
      loop: true,
      muted: true,
      "data-yes": true,
      "data-no": false,
    });
  }, []);

  return (
    <div>
      <VideoComponent videoData={videoProps} />
      {/* <pre>{JSON.stringify(videoProps, true, 2)}</pre> */}
    </div>
  );
};

export default Video;
