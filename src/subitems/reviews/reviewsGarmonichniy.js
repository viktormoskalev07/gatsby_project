import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemGarmonichniy = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Гармоничный дом. Интерьер и архитектура, 400&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Екатерина и&nbsp;Николай, 30&nbsp;и&nbsp;40&nbsp;лет</p>
        </div>
        <div className={"review_text review_text4" + ( openProcessList?" open" : "")}>
          <p className="review_text_p">Мы&nbsp;всегда мечтали жить в&nbsp;своем доме и&nbsp;хотели, чтобы в&nbsp;нем все было идеально. Поэтому подрядчика выбирали долго и&nbsp;тщательно: понимали, что строительство займет несколько лет и&nbsp;нам нужны опытные люди. Компромиссов по&nbsp;цене и&nbsp;качеству мы&nbsp;не&nbsp;искали, готовы были заплатить за&nbsp;то, что нам помогут воплотить мечту в&nbsp;жизнь. При этом у&nbsp;нас уже были свои идеи, мы&nbsp;понимали, каким хотим видеть свой дом, но&nbsp;хотелось свежих предложений от&nbsp;профессионалов. Хотелось, чтобы они подсказали, как сделать наш дом еще лучше.</p>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">Поэтому решили обратиться к&nbsp;проверенным людям и&nbsp;пригласили команду i-project. Мы&nbsp;заказывали у&nbsp;них интерьер городской квартиры и&nbsp;остались довольны.</p>
            <p className="review_text_p">Проект дома нам тоже понравился, поэтому сразу после согласования начали стройку.​</p>
            <p className="review_text_p">В&nbsp;процессе строительства мы&nbsp;передумали несколько раз. Возможно, кто-то скажет, что мы&nbsp;нерешительные, но&nbsp;нам просто хотелось, чтобы дом был действительно идеальным. Поэтому приняли решение разделить общую и&nbsp;СПА-зону, добавить санузлы и&nbsp;лестницу на&nbsp;второй этаж.</p>
            <p className="review_text_p">Дом менялся по&nbsp;мере строительства и&nbsp;в&nbsp;какой-то момент у&nbsp;меня появилось ощущение, что эта стройка никогда не&nbsp;закончится. Думаю, кто хоть раз в&nbsp;жизни строил дом, меня поймет.</p>
            <p className="review_text_p">Но&nbsp;все эти изменения и&nbsp;долгий процесс строительства оправдали себя. Когда мы&nbsp;приехали на&nbsp;первый просмотр интерьера были в&nbsp;шоке от&nbsp;того, как все получилось. Я&nbsp;могу сейчас начать перечислять все, что мне нравится в&nbsp;нашей доме, но&nbsp;лучше скажу коротко&nbsp;&mdash; мне нравится все. Еще ни&nbsp;разу мы&nbsp;не&nbsp;пожалели, что обратились именно в&nbsp;эту студию, очень довольны результатом, ведь получили все, что хотели.</p>
            <p className="review_text_p">Большая благодарность i-project и&nbsp;всем подрядчикам.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/garmony_dom_interier/02_garmony_dom.webp"
                data-fancybox="gallery-4"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/garmony_dom_interier/02_garmony_dom.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/garmony_dom_arch/03_garmony_dom.webp"
                data-fancybox="gallery-4"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/garmony_dom_arch/03_garmony_dom.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/garmony-dom-interier" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}