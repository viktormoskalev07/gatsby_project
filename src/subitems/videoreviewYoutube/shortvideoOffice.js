import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { YouTobeReview } from "./blockvideo"
import thumbnailReview from  "../../images/video_reviews/preview_compact_office.webp"


export const ShortVideoOffice = () => {
  return (
    <section className="office_videoreview_background">
      <div className="wrapper">
        <div className="office_videoreview videoreview">
          <div className="videoreview_left">
            <YouTobeReview
              param={"start=0"}
              image={thumbnailReview}
              title={"Видеообзор интерьера офиса"}
              embed={'OQpDR0Miv_U'}>
              <StaticImage src={'../../images/video_reviews/preview_compact_office.webp'}  />
            </YouTobeReview>
            <Link to="/portfolio/interier/compact" className="videoreview_link_mob">Проект в&nbsp;портфолио</Link>
          </div>
          <div className="videoreview_right">
            <div className="videoreview_text">
              <p className="videoreview_text_p1">Видеообзор интерьера офиса</p>
            </div>
            <Link to="/portfolio/interier/compact" className="videoreview_link">Проект в&nbsp;портфолио</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

