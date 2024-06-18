import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


export const PartnersProtosInt = () => {
  return (
    <>
      <h2 class="partners_title" id="anchor_9">Фабрики/Бренды, продукты которых применяются в&nbsp;проекте:</h2>
      <div className="partners_grid">
        <div className="partners_item">
          <StaticImage src="../../images/partners/reynaers.jpg" alt="reynaers logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/laminam.jpg" alt="laminam logo" />
        </div>
        <div className="partners_item">
          <StaticImage src="../../images/partners/centrsvet.jpg" alt="centrsvet logo" />
        </div>
      </div>
    </>
  )
}
