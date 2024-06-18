import * as React from "react"
import * as styles from "./project-video.module.scss"
import { useEffect, useRef } from "react"
import { useInView } from 'react-intersection-observer';

export const ProjectVideoTrigger = ({ shortVideo }) => {
  const { ref:scrollTargetRef, inView  } = useInView({
    triggerOnce: true,
  });

  const videoRef = useRef();
  useEffect(()=>{
    if(inView){
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline  = true;
      videoRef.current.play();
    }
  },[inView])
  return (
    <div className={styles.project_video}>
      <video ref={videoRef} width="100%" height="100%" muted={true} type="video/mp4">
        <source src={shortVideo} type="video/mp4" />
      </video>
      <div className={styles.project_video_trigger} ref={scrollTargetRef}></div>
    </div>
  )
}