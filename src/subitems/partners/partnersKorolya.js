import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersKorolya = () => {
  const [open , setOpen] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_7">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/furman.jpg" alt="furman logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/leicht.jpg" alt="leicht logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/tomasella.jpg" alt="tomasella logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/midj.jpg" alt="midj logo" />
        </div>
        <button onClick={()=>setOpen(!open)} className={"partners_button" + (open? " partners_button_hidden" : '')}>Показать все</button>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/domani.jpg" alt="domani logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/lazio.jpg" alt="lazio logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/ditre.jpg" alt="ditre logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/poltrona_frau.jpg" alt="poltrona frau logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/minotti.jpg" alt="minotti logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/grok.jpg" alt="grok logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/marset.jpg" alt="marset logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/grange.jpg" alt="grange logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/centrsvet.jpg" alt="centrsvet logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/vibia.jpg" alt="vibia logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/sylcom.jpg" alt="sylcom logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/boen.jpg" alt="boen logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/gira.jpg" alt="gira logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/sandalyeci.jpg" alt="sandalyeci logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/morris.jpg" alt="morris logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/sanderson.jpg" alt="sanderson logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/laufen.jpg" alt="laufen logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/hansgrohe.jpg" alt="hansgrohe logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/zehnder.jpg" alt="zehnder logo" />
        </div>
      </div>
    </>
  )
}
