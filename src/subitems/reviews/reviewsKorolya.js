import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemKorolya = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Наталья, 50&nbsp;лет</p>
        </div>
        <div className={"review_text review_text1" + ( openProcessList?" open" : "")}>
          <p className="review_text_p">Сотрудничеством со&nbsp;студией i-project остались довольны, особенно их&nbsp;главным дизайнером. Обратиться к&nbsp;нему порекомендовали хорошие знакомые. Решили попробовать, хотя и&nbsp;были настроены скептически. Не&nbsp;хотелось, чтобы дизайнер начал перекраивать нашу квартиру под себя и&nbsp;делать все в&nbsp;соответствии с&nbsp;модными трендами, не&nbsp;учитывая наше мнение.</p>
          <p className="review_text_p">Были приятно удивлены, все наши пожелания оказались услышаны. Квартира стала компромиссом между общими идеями. В&nbsp;процессе работы сложилось впечатление, что все наши идеи дизайнер поднял на&nbsp;какой-то новый, более высокий уровень. На&nbsp;наш взгляд, это и&nbsp;есть настоящий профессионализм.</p>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">Мы&nbsp;отлично проработали пространство, интерьер выглядит сдержанным и&nbsp;изысканным. Все получилось даже намного лучше, чем мы&nbsp;изначально хотели. Дома приятно находится, хочется приглашать гостей и&nbsp;проводить здесь как можно больше времени.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/korolya/03_korolya.webp"
                data-fancybox="gallery-1"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/korolya/03_korolya.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/korolya/05_korolya.webp"
                data-fancybox="gallery-1"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/korolya/05_korolya.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/korolya" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}