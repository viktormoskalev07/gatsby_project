import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersGarmInt = () => {
  const [open , setOpen] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_10">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/leicht.jpg" alt="leicht logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/sovet.jpg" alt="sovet logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/tonincasa.jpg" alt="tonincasa logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/calligaris.jpg" alt="calligaris logo" />
        </div>
        <button onClick={()=>setOpen(!open)} className={"partners_button" + (open? " partners_button_hidden" : '')}>Показать все</button>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/arketipo.jpg" alt="arketipo logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/cattelan_italia.jpg" alt="cattelan italia logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/olivieri.jpg" alt="olivieri logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/borzalino.jpg" alt="borzalino logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/pianca.jpg" alt="pianca logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/domani.jpg" alt="domani logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/carpet-edition.jpg" alt="carpet edition logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/fmg-iris.jpg" alt="fmg iris logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/ceramiche-keope.jpg" alt="ceramiche keope logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/fondovalle.jpg" alt="fondovalle logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/ariana.jpg" alt="ariana logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/bongio.jpg" alt="bongio logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/catalano.jpg" alt="catalano logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/centrsvet.jpg" alt="centrsvet logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/bomma.jpg" alt="bomma logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/marset.jpg" alt="marset logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/moooi.jpg" alt="moooi logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/flos.jpg" alt="flos logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/gira.jpg" alt="gira logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/zehnder.jpg" alt="zehnder logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/ditre.jpg" alt="ditre logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/sangiacomo.jpg" alt="sangiacomo logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/desiree.jpg" alt="desiree logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/bontempi.jpg" alt="bontempi logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/tomasella.jpg" alt="tomasella logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/lazio.jpg" alt="lazio logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/cadorin.jpg" alt="cadorin logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/lodes.jpg" alt="lodes logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/kundalini.jpg" alt="kundalini logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/vesoi.jpg" alt="vesoi logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/wever-ducre.jpg" alt="wever ducre logo" />
        </div>
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/fabbian.jpg" alt="fabbian logo" />
        </div>
      </div>
    </>
  )
}
