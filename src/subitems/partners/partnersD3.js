import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"



export const PartnersD3 = () => {
  const [open , setOpen] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_8">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/leicht.jpg" alt="leicht logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/cattelan_italia.jpg" alt="cattelan logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/midj.jpg" alt="midj logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/ditre.jpg" alt="ditre logo" />
        </div>
        <button onClick={()=>setOpen(!open)} className={"partners_button" + (open? " partners_button_hidden" : '')}>Показать все</button>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/domani.jpg" alt="domani logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/eichholtz.jpg" alt="eichholtz logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/borzalino.jpg" alt="borzalino logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/vibia.jpg" alt="vibia logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/catalano.jpg" alt="catalano logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/flamant.jpg" alt="flamant logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/bauwerk.jpg" alt="bauwerk logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/zehnder.jpg" alt="zehnder logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/gira.jpg" alt="gira logo" />
        </div>
      </div>
    </>
  )
}
