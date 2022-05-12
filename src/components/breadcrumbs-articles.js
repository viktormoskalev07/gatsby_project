import * as React from "react"
import { Link } from "gatsby"

const BreadcrumbsArticles = () => {
  return (
    <div class="breadcrumbs">
      <ul class="breadcrumbs_list">
        <li class="breadcrumbs_li"><Link to="/">Главная</Link></li>
        <li class="breadcrumbs_li"><Link to="/articles">Статьи и&nbsp;новости</Link></li>
      </ul>
    </div>
  )
}

export default BreadcrumbsArticles
