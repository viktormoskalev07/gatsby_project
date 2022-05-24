import * as React from "react"

import { useEffect, useRef, useState } from "react"



export const Video = ( {mobileSrc , desktopSrc})=>{
  let defaultVideo = mobileSrc;
  const videoRef = useRef();
  if(typeof window !="undefined") {
    if (window.matchMedia("(min-width: 768px)").matches) {
      defaultVideo = desktopSrc
    }
  }
  const [ videoSrc, setVideoSrc ] = useState(defaultVideo)

  const resize = ()=>{
    if(typeof window !="undefined"){
      if(window.matchMedia("(min-width: 768px)").matches  ){
        setVideoSrc(desktopSrc)
      } else {
        setVideoSrc(mobileSrc)
      }
    }
  }
    useEffect(()=>{

      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline  = true;

    } , [videoSrc])

  useEffect(()=>{
    window.addEventListener('resize' ,resize)
    return ()=> window.removeEventListener('resize' ,resize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <video ref={videoRef}
                src={videoSrc}
                title={'lol'} autoPlay={true}
                muted={true} loop={true}
                playsInline={true}
                width="100%"
                height="100%"/>
}