import React, { useState, useEffect } from "react";

const IFrameSkleton = (props) => {
  useEffect(() => {});
  const onClickx = () => {
    console.log("clicked");
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
      <div className="x" onClick={onClickx}>
        <div className="neg">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={videoObject.src}
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    ));
  if(true) console.log('Test');
  return (
    <>
      <div className="flex_container_16by9">{landscapeVideos}</div>
      <div className="flex_container_9by16">{potraitVideos}</div>
    </>
  );
};

export default IFrameSkleton;
