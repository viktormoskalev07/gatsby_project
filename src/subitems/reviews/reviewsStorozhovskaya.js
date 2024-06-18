import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemStorozhovskaya = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Алексей, 30&nbsp;лет</p>
        </div>
        <div className={"review_text review_text3" + ( openProcessList?" open" : "")}>
          <p className="review_text_p">Долгое время я&nbsp;снимал разные квартиры и&nbsp;когда купил свою, хотел сделать классный дизайн проект. Готов был платить любые деньги, чтобы квартира была такой, как мне нравится. Плюс я&nbsp;много работаю, иногда из&nbsp;дома. Важно было, чтобы интерьер не&nbsp;выглядел унылым.</p>
          <p className="review_text_p">Студию i-project нашел случайно в&nbsp;интернете. Сайт зацепил смелыми проектами, не&nbsp;такими как у&nbsp;всех. Сложилось ощущение, что здесь меня поймут. Не&nbsp;ошибся.</p>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">В&nbsp;квартире мне нравится все: цвета, мебель, планировка. Особая тема&nbsp;&mdash; это, конечно, шикарный невероятно удобный диван и&nbsp;столики-пни рядом с&nbsp;ним. Все, кто приходит в&nbsp;гости, спрашивают, где такие взял. Еще одна фишка квартиры&nbsp;&mdash; это тонированное стекло между спальней и&nbsp;ванной. Там встроенная акустика, поэтому когда хочется расслабиться, я&nbsp;смотрю фильмы прямо в&nbsp;ванной.</p>
            <p className="review_text_p">Когда искал дизайнера, думал, что &laquo;интерьер похожий на&nbsp;хозяина&raquo;, это сказки маркетологов. Чего не&nbsp;пообещаешь, чтобы получить клиента. Оказалось, что нет. Для меня разработали интерьер с&nbsp;характером, не&nbsp;такой как у&nbsp;всех. Здесь хорошо жить, работать и&nbsp;отдыхать. Я&nbsp;доволен.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/storojevskaya/02_storojevskaya.webp"
                data-fancybox="gallery-3"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/storojevskaya/02_storojevskaya.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/storojevskaya/30_storojevskaya.webp"
                data-fancybox="gallery-3"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/storojevskaya/30_storojevskaya.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/storojevskaya" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}