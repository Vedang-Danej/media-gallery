import React from "react";
const IFrameSkleton = (props) => {
 const onMouseOver=(e)=> 
 {
     let overMe=1;
     e.target.addEventListener('mouseout',()=>{
       overMe=0
     })
     const player=e.target.closest('.player');
     window.addEventListener('blur',()=>{
       if(overMe) setTimeout(()=>{
         player.classList.add("playing")
       },1000);
     })
     window.focus();
}
 
  let landscapeVideos = props.videos
    .filter((video) => !video.potrait)
    .map((videoObject,index) => (
      <div className="embed-responsive embed-responsive-16by9" key={index}>
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
    .map((videoObject,index) => (
     <div id={`player-${index+1}`} className="player" key={index} >
      <div>
        <iframe 
            onMouseOver={onMouseOver}            
            width="100%"
            height="100%"
            frameBorder="0"
            src={videoObject.src}
            allow="fullscreen">
        </iframe>
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
