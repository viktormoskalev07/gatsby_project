import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemProtos = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Дизайн интерьера и реконструкция офисов &laquo;Протос&raquo;, 200&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Группа компаний &laquo;Протос&raquo;</p>
        </div>
        <div className={"review_text review_text7" + ( openProcessList?" open" : "")}>
          <div className="review_text_wrap">
            <div>
              <p className="review_text_p">Компания &laquo;Протос&raquo; благодарит Александра Игнатьева и&nbsp;компанию I-PROJECT за&nbsp;реализацию проекта &laquo;Реконструкция офисного здания холдинга Группа компаний &bdquo;Протос&ldquo;&raquo;.</p>
            </div>
            <div className={styles.review_right_images_photo_mob}>
              <a
                href="https://i-project.by/portfolio_newsite/compact/protos_review.webp"
                data-fancybox="gallery-7-1"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/reviews/protos_review.jpg" className={styles.review_right_images_photo_img_mob} alt="" />
              </a>
            </div>
          </div>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">Разработка проекта реконструкции здания выполнена на&nbsp;высоком профессиональном уровне, качественно и&nbsp;в&nbsp;установленные сроки. При выполнении архитектурного проектирования в&nbsp;полном объеме были учтены требования нормативно-технической документации, современные тенденции и&nbsp;все пожелания Заказчика, и&nbsp;как результат&nbsp;&mdash; мы&nbsp;имеем современный и&nbsp;комфортный офис.</p>
            <p className="review_text_p">Подтверждением этому стала и&nbsp;высокая оценка специалистов: за&nbsp;реализацию проекта &laquo;Интерьер офиса группы компаний &bdquo;Протос&ldquo;&raquo; творческий коллектив компании I-PROJECT и&nbsp;автор проекта Александр Игнатьев были награждены ОО&nbsp;&laquo;Белорусский союз архитекторов&raquo; в&nbsp;рамках XX&nbsp;Республиканского конкурса Дипломом 1&nbsp;степени в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo; и&nbsp;Дипломом II&nbsp;степени в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;.</p>
            <p className="review_text_p">C&nbsp;уверенностью можем сказать, что I-PROJECT высокопрофессиональная компания, оперативно и&nbsp;качественно решащая поставленные задачи.</p>
            <p className="review_text_p">Будем рады новым совместным проектам!</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right + ' ' + styles.review_right_with_review}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images_photo}>
              <a
                href="https://i-project.by/portfolio_newsite/compact/protos_review.webp"
                data-fancybox="gallery-7"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/reviews/protos_review.jpg" className={styles.review_right_images_photo_img} alt="" />
              </a>
            </div>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/protos_reconstraction/04_protos_reconstraction.webp"
                data-fancybox="gallery-7"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/protos_reconstraction/04_protos_reconstraction.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/protos_interior/01_protos_interior.webp"
                data-fancybox="gallery-7"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/protos_interior/01_protos_interior.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/compact" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}