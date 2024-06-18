import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"



export const PartnersDzerzhinskogo = () => {
  const [open , setOpen] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_8">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/domani.jpg" alt="domani logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/midj.jpg" alt="midj logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/mexo.jpg" alt="mexo logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/ditre.jpg" alt="ditre logo" />
        </div>
        <button onClick={()=>setOpen(!open)} className={"partners_button" + (open? " partners_button_hidden" : '')}>Показать все</button>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/lazio.jpg" alt="lazio logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/dva-bobra.jpg" alt="dva bobra logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/laufen.jpg" alt="laufen logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/centrsvet.jpg" alt="centrsvet logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/boen.jpg" alt="boen logo" />
        </div>
      </div>
    </>
  )
}
