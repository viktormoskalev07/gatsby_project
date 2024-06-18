import React from 'react'
import Layout from "../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatedLine } from '../../subitems/portfolio/animatedLine'

import Seo from "../../components/seo"

const Vacancy = () => {
  return (
    <Layout>
      <Seo  title={"Вакансии нашей студии | I-PROJECT"} description={"Мы постоянно нуждаемся в новых дизайнерах и 3D визуализаторах"}
            location={"https://i-project.by/about/vacancy"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div className="wrapper">
        <h1 className="vacancy_title">Вакансии студии</h1>
        <div className="vacancy">
          <AnimatedLine />
          <div className="vacancy_grid">
            <p className="vacancy_text">Мы&nbsp;не&nbsp;находимся в&nbsp;активном поиске кадров, но&nbsp;вы&nbsp;всегда можете прислать нам на&nbsp;почту ваше резюме и&nbsp;мы&nbsp;его обязательно рассмотрим.</p>
            <div className="vacancy_right">
              <p class="vacancy_email_p">Эл. почта:</p>
              <a href="mailto:info@i-project.by" class="vacancy_email">info@i-project.by</a>
            </div>
            <div className="vacancy_item">
              <div className="vacancy_item_left">
                <h2 className="vacancy_item_title">Дизайнер интерьеров</h2>
                <div className="vacancy_item_desc">
                  <p className="vacancy_item_desc_title">Требования:</p>
                  <ul className="vacancy_item_list">
                    <li className="vacancy_item_li">Профильное образование (дизайн, архитектура).</li>
                    <li className="vacancy_item_li">Знание профильных программ (AutoCad, PhotoShop и&nbsp;др.).</li>
                    <li className="vacancy_item_li">Наличие портфолио с&nbsp;реализованными проектами, обязателен опыт работы с&nbsp;жилыми помещениями и&nbsp;не&nbsp;менее 3&nbsp;успешно реализованных проектов.</li>
                    <li className="vacancy_item_li">Знание основных премиальных брендов мебели, аксессуаров и&nbsp;материалов обязательны.</li>
                    <li className="vacancy_item_li">Индивидуальный подход к&nbsp;клиенту и&nbsp;отличные навыки коммуникации.</li>
                    <li className="vacancy_item_li">Умение работать в&nbsp;режиме многозадачности, хорошие навыки тайм-менеджмента.</li>
                    <li className="vacancy_item_li">Структурированность в&nbsp;работе, хорошая самоорганизация.</li>
                    <li className="vacancy_item_li">Умение работать в&nbsp;команде.</li>
                  </ul>
                </div>
                <div className="vacancy_item_desc">
                  <p className="vacancy_item_desc_title">Обязанности:</p>
                  <ul className="vacancy_item_list">
                    <li className="vacancy_item_li">Одновременное ведение 1-3 проектов студии на&nbsp;этапе разработки дизайн-проекта.</li>
                    <li className="vacancy_item_li">Обмер помещений.</li>
                    <li className="vacancy_item_li">Создание планировочных решений.</li>
                    <li className="vacancy_item_li">2D/3D-визуализация интерьеров либо постановка&nbsp;ТЗ визуализатору.</li>
                    <li className="vacancy_item_li">Выбор чистовых отделочных материалов.</li>
                    <li className="vacancy_item_li">Разработка архитектурно-строительной документации.</li>
                  </ul>
                </div>
              </div>
              <div className="vacancy_item_right">
                <StaticImage class="vacancy_item_img" alt="Фотогрфия офиса студии дизайна и архитектуры i-project" src="../../images/vacancy_img.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Vacancy