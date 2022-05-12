import * as React from "react"
import { Link } from "gatsby"

const BreadcrumbsInterier = () => {
  return (
    <div class="breadcrumbs">
      <ul class="breadcrumbs_list">
        <li class="breadcrumbs_li"><Link to="/">Главная</Link></li>
        <li class="breadcrumbs_li"><Link to="/portfolio">Портфолио</Link></li>
        <li class="breadcrumbs_li"><Link to="/portfolio/interier">Интерьер</Link></li>
      </ul>
    </div>
  )
}

export default BreadcrumbsInterier