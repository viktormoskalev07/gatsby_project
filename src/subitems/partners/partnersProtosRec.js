import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersProtosRec = () => {
  const [open] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_8">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/laminam.jpg" alt="laminam logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/reynaers.jpg" alt="reynaers logo" />
        </div>
      </div>
    </>
  )
}
