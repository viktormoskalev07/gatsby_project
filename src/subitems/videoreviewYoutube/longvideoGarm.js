import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { YouTobeReview } from "./blockvideo"
import thumbnailReview from  "../../images/video_reviews/preview_garm_main.webp"


export const LongVideoGarm = () => {
  return (
    <section className="main_videoreview_background">
      <div className="wrapper">
        <div className="videoreview">
          <div className="videoreview_left">
            <YouTobeReview
              param={"start=1"}
              image={thumbnailReview}
              title={"Видеообзор интерьера гармоничного дома"}
              embed={'rV3dhWrDcMU'}>
              <StaticImage src={'../../images/video_reviews/preview_garm_main.webp'}  />
            </YouTobeReview>
            <Link to="/portfolio/interier/garmony-dom-interier" className="videoreview_link_mob">Проект в&nbsp;портфолио</Link>
          </div>
          <div className="videoreview_right">
            <div className="videoreview_text">
              <p className="videoreview_text_p1">Видеообзор интерьера дома</p>
              <p className="videoreview_text_p2">Рассказываем о&nbsp;тонкостях дизайна на&nbsp;примере реализованного объекта.</p>
            </div>
            <Link to="/portfolio/interier/garmony-dom-interier" className="videoreview_link">Проект в&nbsp;портфолио</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

