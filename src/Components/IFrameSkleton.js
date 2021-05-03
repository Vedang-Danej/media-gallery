import React, { useState } from "react";

const IFrameSkleton = (props) => {
  const [wrapper, setwrapper] = useState(true);
  const onClickWrapper = () => {
    console.log("clicked");
    setwrapper(false);
  };
  let landscapeVideos = props.videos
    .filter((video) => !video.potrait)
    .map((videoObject) => (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          width="100%"
          height="100%"
          className="embed-responsive-item"
          frameborder="0"
          src={videoObject.src}
          allow="fullscreen"
        ></iframe>
      </div>
    ));
  let potraitVideos = props.videos
    .filter((video) => video.potrait)
    .map((videoObject) => (
      <div className="x">
        <div className={`x ${wrapper ? "neg" : null}`}>
          <iframe
            onClick={onClickWrapper}
            width="100%"
            height="100%"
            frameborder="0"
            src={videoObject.src}
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    ));

  return (
    <>
      <div className="flex_container_16by9">{landscapeVideos}</div>
      <div className="flex_container_9by16">{potraitVideos}</div>
    </>
  );
};

export default IFrameSkleton;
