import React from 'react'
import Layout from "../../components/layout-black"

import Seo from "../../components/seo"
import { ReviewsItemD3 } from "../../subitems/reviews/reviewsD3"
import { ReviewsItemKorolya } from "../../subitems/reviews/reviewsKorolya"
import { ReviewsItemStorozhovskaya } from "../../subitems/reviews/reviewsStorozhovskaya"
import { ReviewsItemGarmonichniy } from "../../subitems/reviews/reviewsGarmonichniy"
import { ReviewsItemDzerzhinskogo } from "../../subitems/reviews/reviewsDzerzhinskogo"
import { ReviewsItemCompact } from "../../subitems/reviews/reviewsCompact"
import { ReviewsItemProtos } from "../../subitems/reviews/reviewsProtos"
import * as styles from "../../subitems/reviews/reviews.module.scss"

const Reviews = () => {
  return (
    <Layout>
      <Seo  title={"Отзывы клиентов cтудии дизайна и архитектуры | I-PROJECT"} description={"Отзывы клиентов о наших реализованных проектах"}
            location={"https://i-project.by/about/reviews"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div className="wrapper">
        <h1 className="reviewpage_title">Отзывы</h1>
        <div className={styles.reviews_items}>
          <ReviewsItemGarmonichniy />
          <ReviewsItemDzerzhinskogo />
          <ReviewsItemCompact />
          <ReviewsItemKorolya />
          <ReviewsItemProtos />
          <ReviewsItemD3 />
          <ReviewsItemStorozhovskaya />
        </div>
      </div>
    </Layout>
  )
}

export default Reviews