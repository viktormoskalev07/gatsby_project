import React, { useState } from 'react'
import * as styles from "./reviews.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

export const ReviewsItemD3 = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className={styles.review_item}>
      <div className={styles.review_left}>
        <div className={styles.review_title}>
          <h2 className={styles.review_item_object}>Квартира в&nbsp;жилом комплексе &laquo;D3&raquo;, 120&nbsp;м<sup>2</sup></h2>
          <p className={styles.review_item_client_name}>Наш клиент: Екатерина, 35&nbsp;лет</p>
        </div>
        <div className={"review_text review_text2" + ( openProcessList?" open" : "")}>
          <p className="review_text_p">Сотрудничество с&nbsp;Александром очень понравилось. Он&nbsp;учел все наши пожелания и&nbsp;при этом профессионально предложил интересные решения. В&nbsp;результате интерьер получился не&nbsp;только стильным, но&nbsp;уютным и&nbsp;функциональным.</p>
          <p className="review_text_p">Планировка, которую он&nbsp;разработал, еще на&nbsp;этапе обсуждения казалась непривычной. Только теперь я&nbsp;поняла, что это новый уровень комфорта. Каждый квадратный метр грамотно использован, все на&nbsp;своих местах, но&nbsp;при этом нет ничего лишнего, комнаты не&nbsp;загромождены, в&nbsp;них много воздуха и&nbsp;света.</p>
          <div className={"review_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_text_p">​Что касается самого интерьера, все продумано до&nbsp;мелочей: цвет штор и&nbsp;стен, пола и&nbsp;потолка, мебель и&nbsp;аксессуары. Даже вид из&nbsp;окна заиграл по-новому, я&nbsp;мечтала о&nbsp;таком давно.</p>
            <p className="review_text_p">Каждый раз, когда прохожу мимо прозрачного гардероба в&nbsp;мастер-спальне, вспоминаю, как поначалу меня насторожила эта идея. Штука в&nbsp;том, что этот гардероб виден, когда идешь вдоль коридора. Рада, что дизайнер предложил такое крутое решение.</p>
          </div>
          <button onClick={toggleProcessList} className={styles.review_button} style={hide}>Показать полностью</button>
        </div>
      </div>
      <div className={styles.review_right}>
        <Fancybox>
          <div className={styles.review_right_images_block}>
            <div className={styles.review_right_images}>
              <a
                href="https://i-project.by/portfolio_newsite/d3/08_d3.webp"
                data-fancybox="gallery-2"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/d3/08_d3.jpg" className={styles.review_right_images_img} alt="" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/d3/14_d3.webp"
                data-fancybox="gallery-2"
                className={styles.review_right_images_link}
              >
                <StaticImage src="../../images/portfolio/d3/14_d3.jpg" className={styles.review_right_images_img} alt="" />
              </a>
            </div>
          </div>
        </Fancybox>
        <Link to="/portfolio/interier/d3" className={styles.review_item_link}>Проект в&nbsp;портфолио</Link>
      </div>
    </div>
  )
}