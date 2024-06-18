import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemDzerzhinskogo = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Интерьер квартиры для семьи с&nbsp;двумя детьми, 90&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Игорь, 50&nbsp;лет</p>
        </div>
        <div className={"review_text review_text5" + ( openProcessList?" open" : "")}>
          <p className="review_text_p">Обратился к&nbsp;Александру по&nbsp;рекомендации друзей: они заказывали у&nbsp;него дизайн-проект и&nbsp;остались довольны результатом.</p>
          <p className="review_text_p">Дело в&nbsp;том, что у&nbsp;нас не&nbsp;совсем стандартная квартира, поэтому хотелось, чтобы с&nbsp;ней поработали профессионалы&nbsp;и, как говорится, выжали из&nbsp;нее по&nbsp;максимуму.</p>
          <p className="review_text_p">Площадь нашей квартиры не&nbsp;очень большая, особенно, если учитывать, что она рассчитана на&nbsp;четырех человек. Плюс планировка своеобразная, я&nbsp;бы сказал даже сложная. Для меня и&nbsp;моей семьи было важно, в&nbsp;первую очередь, чтобы места хватило всем и&nbsp;чтобы интерьер был красивым и&nbsp;современным.</p>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">Если&nbsp;бы не&nbsp;дизайнеры i-project, я&nbsp;бы не&nbsp;узнал о&nbsp;том, сколько существует интересных решений в&nbsp;дизайне интерьера&nbsp;&mdash; раздвижные перегородки, мебель-трансформеры, встроенное освещение, различные датчики.</p>
            <p className="review_text_p">Интерьер, который у&nbsp;нас получился в&nbsp;итоге, не&nbsp;такой, каким я&nbsp;его себе представлял. Результат превзошел мои ожидания. До&nbsp;сих пор удивляюсь, как из&nbsp;той квартиры, которая была у&nbsp;нас в&nbsp;самом начале, можно было сделать такое интересное место для жизни. Хотя, признаюсь, что еще когда мы&nbsp;просматривали образцы, я&nbsp;понял, что цвета, текстура мебели и&nbsp;строгие формы подходят мне идеально. В&nbsp;таком интерьере хочется находиться, от&nbsp;него не&nbsp;устаешь, сюда нравится приглашать гостей, здесь нравится проводить время всей семьей.</p>
            <p className="review_text_p">Я&nbsp;остался доволен всей командой студии i-project и&nbsp;теперь буду рекомендовать их&nbsp;всем своим знакомым.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/dzerzhinskogo/03_dzerzhinskogo.webp"
                data-fancybox="gallery-5"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/dzerzhinskogo/03_dzerzhinskogo.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/dzerzhinskogo/05_dzerzhinskogo.webp"
                data-fancybox="gallery-5"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/dzerzhinskogo/05_dzerzhinskogo.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/apart-family" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}