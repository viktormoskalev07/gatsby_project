import * as React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from 'react-intersection-observer';

export const Presentation = ({stopImg , youTubeSrc , shortVideo }) => {
  const { ref:scrollTargetRef, inView  } = useInView({
    triggerOnce: true,
  });


  const [isPlaying , setIsPlaying] = useState(false);
  const [videoEnd , setVideoEnd] = useState(false);
  const [youTubeStart , setYouTubeStart] = useState(false);
  const newYoutubeSrc = youTubeStart?youTubeSrc:'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

  const videoRef = useRef();
  const toggleVideo = ()=>{
    setIsPlaying(!isPlaying);
    if(isPlaying){
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }
  const videoEnded= ()=>{
    setVideoEnd(true)
  }
  const showAllVideo=()=>{
    setYouTubeStart(true)
  }
  const hide = youTubeStart? {display:"none"}:{};
  useEffect(()=>{
    if(inView){
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline  = true;
      setIsPlaying(true);
      videoRef.current.play();
    }
  },[inView])
  return (
    <>
      <div className="presentation">
        <div style={ videoEnd?{backgroundImage:` url("${stopImg}")` ,...hide}:hide} className="video_block_presentation">
          <button ref={scrollTargetRef} style={videoEnd?{display:"none"}:{}} onClick={toggleVideo} className="video_block_presentation_button"  >
            <span style={{display:"block"}}   className={"video_block_presentation_button_"+( isPlaying?"pause":"play")}/>
          </button>
          <button style={ videoEnd?{opacity:1 , display:'flex'}:{}}  className="video_block_presentation_button_next" onClick={showAllVideo}>
            <div className="video_block_presentation_button_show_all">
              <p className="video_block_presentation_button_show_all_text">Посмотреть <span>все видео</span></p>
              <div className="video_block_presentation_button_show_all_symbol"/>
            </div>
          </button>
        </div>
        <video style={hide} onEnded={videoEnded} ref={videoRef} className="video_presentation" width="100%" height="100%" muted={true} type="video/mp4">
          <source src={shortVideo} type="video/mp4" />
        </video>
        <iframe style={youTubeStart?{display:"block"}:{}} src={newYoutubeSrc} className="video_presentation_youtube" id="video1" width="100%" height="auto" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
    </>


  )
}