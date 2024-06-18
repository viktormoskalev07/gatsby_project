import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersGarmExt = () => {
  const [open , setOpen] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_8">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/zehnder.jpg" alt="zehnder logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/gira.jpg" alt="gira logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/centrsvet.jpg" alt="centrsvet logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/reynaers.jpg" alt="reynaers logo" />
        </div>
        <button onClick={()=>setOpen(!open)} className={"partners_button" + (open? " partners_button_hidden" : '')}>Показать все</button>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/stroher.jpg" alt="stroher logo" />
        </div>
      </div>
    </>
  )
}
