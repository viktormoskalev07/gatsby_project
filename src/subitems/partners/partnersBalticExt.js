import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersBalticExt = () => {
  const [open] =useState(false);
  return (
    <>
      <h2 class="partners_title" id="anchor_5">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className={"partners_item" + (open? " partners_item_mobile_show" :" partners_item_mobile_hidden")}>
          <StaticImage src="../../images/partners/vithouse.jpg" alt="vithouse logo" />
        </div>
      </div>
    </>
  )
}
