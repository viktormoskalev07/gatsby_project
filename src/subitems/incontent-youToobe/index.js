import * as React from "react"

export const IncontentYouToobe = ( {  embed  , title , param ="" }) => {
  const newSrc ="https://www.youtube.com/embed/"+ embed +'?rel=0&'+param
  return (
    <div>
      <iframe className="content_video_iframe" loading="lazy" width="100%" height="auto" src={newSrc}
        title={title} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}