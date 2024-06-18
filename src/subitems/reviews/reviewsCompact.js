import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemCompact = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Дизайн интерьера офиса, 50&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: ООО &laquo;Александров&raquo;</p>
        </div>
        <div className={"review_text review_text6" + ( openProcessList?" open" : "")}>
          <div className="review_text_wrap">
            <div>
              <p className="review_text_p">Общество с&nbsp;ограниченной ответственностью &laquo;Александров&raquo; выражает благодарность Алесандру Игнатьеву и&nbsp;его компании I-PROJECT за&nbsp;успешную работу по&nbsp;разработке проекта и&nbsp;реализации интерьера офиса компании.</p>
              <p className="review_text_p">Мы&nbsp;остались очень довольны результатом и&nbsp;получили замечательный интерьер, в&nbsp;котором приятно находится сотрудникам и&nbsp;клиентам компании.</p>
            </div>
            <div className={styles.review_right_images_photo_mob}>
              <a
                href="https://i-project.by/portfolio_newsite/compact/alexandrov_review.webp"
                data-fancybox="gallery-6-1"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/reviews/alexandrov_review.jpg" className={styles.review_right_images_photo_img_mob} alt="" />
              </a>
            </div>
          </div>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">Весь комплекс работ/услуг по&nbsp;дизайну и&nbsp;последующей реализации был выполнен качественно и&nbsp;в&nbsp;срок.</p>
            <p className="review_text_p">Рекомендуем компанию I-PROJECT в&nbsp;качестве належного партнера.</p>
            <p className="review_text_p">Надеемся также на&nbsp;дальнейшее сотрудничество с&nbsp;I-PROJECT.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right + ' ' + styles.review_right_with_review}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images_photo}>
              <a
                href="https://i-project.by/portfolio_newsite/compact/alexandrov_review.webp"
                data-fancybox="gallery-6"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/reviews/alexandrov_review.jpg" className={styles.review_right_images_photo_img} alt="" />
              </a>
            </div>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/compact/08_compact.webp"
                data-fancybox="gallery-6"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/compact/08_compact.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/compact/16_compact.webp"
                data-fancybox="gallery-6"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/compact/16_compact.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/compact" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}