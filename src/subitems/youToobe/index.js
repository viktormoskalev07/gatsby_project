import * as React from "react"
import { styles } from "./youTobe.module.scss"
import { useState } from "react"

export const YouTobe = ( {  embed  , title , param =""  ,children  }) => {
  const newSrc ="https://www.youtube.com/embed/"+ embed +'?rel=0&autoplay=1&'+param
  const [play , setPlay]= useState(false)
  const start =()=>{
    setPlay(true);
  };
  const hide = play ? {display:'none'}:{};
  return (
    <div className={styles}>
      <button className="pageportfolio_video_button" style ={hide} onClick={start}>
        <div className="pageportfolio_video_button_symbol"></div>
      </button>
      <div style={hide} className={'figure'}>
        {children}
      </div>
      <iframe loading="lazy" width="100%" height="auto" src={play?newSrc :'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
        title={title} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}