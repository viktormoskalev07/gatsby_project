import * as React from "react"

export const YouToobeItem = ( { embed , title }) => {
  const newSrc ="https://www.youtube.com/embed/"+ embed +'?rel=0&'
  return (
    <div>
      <iframe className="pagevideo_item_iframe" loading="lazy" width="100%" height="auto" src={newSrc}
        title={title} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  )
}