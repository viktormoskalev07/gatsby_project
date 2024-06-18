import React from 'react'
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Fancybox from "../../components/fancybox.js";

import { Video } from "../../subitems/hompage/video"
import AboutVideo from "../../video/about.mp4"
import AboutVideoMobile from "../../video/about_mob.mp4"
import { AnimatedLine } from '../../subitems/portfolio/animatedLine'
import Seo from "../../components/seo"
import * as stylesPublication from "../../subitems/publication/publication.module.scss"
import { Publication } from "../../subitems/publication/publication"

const About = () => {
  return (
    <Layout>
      <Seo  title={"О студии архитектуры и интерьера | I-PROJECT"} description={"i-project.by: cтудия архитектуры и интерьера Александра Игнатьева ✦ Опыт > 15 лет. ✦ Индивидуальный подход к каждому ✦ Команда профессионалов"}
            location={"https://i-project.by/about"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div className="about_video">
        <Video  mobileSrc={AboutVideoMobile} desktopSrc={AboutVideo} />
      </div>
      <section class="studio_page">
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <p class="studio_left_sidebar">I-PROJECT&nbsp;&mdash; Студия дизайна и&nbsp;архитектуры Александра Игнатьева.</p>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <div class="studio_title">
                <h1 class="studio_h1">О&nbsp;студии</h1>
                {/* <div class="studio_line"></div> */}
                <AnimatedLine />
                <p class="studio_mtext">I-PROJECT&nbsp;&mdash; Студия дизайна и&nbsp;архитектуры Александра Игнатьева. Занимаемся архитектурным проектированием и&nbsp;дизайном интерьера с&nbsp;последующим сопровождением.</p>
              </div>
              <div class="studio_items">
                <div class="studio_item">
                  <div class="studio_item_block">
                    <h3 class="studio_item_h3">Услуги</h3>
                  </div>
                  <div class="studio_item_text">
                    <p class="studio_item_p">Предоставляем весь комплекс услуг, связанных с&nbsp;созданием интерьера, от&nbsp;проекта до&nbsp;воплощения. Исповедуем системный и&nbsp;креативный подход в&nbsp;проектировании и&nbsp;реализации дизайна интерьера. Создаем архитектурные проекты индивидуальных жилых домов. Выполняем контроль за&nbsp;подрядчиками на&nbsp;этапе строительства и&nbsp;ремонта.</p>
                    <p class="studio_item_p">Выступаем за&nbsp;гармонию между полетом творческой мысли и&nbsp;возможностью ее&nbsp;практического воплощения в&nbsp;существующих условиях. На&nbsp;100% разделяем формулу триады Витрувия: &laquo;Прочность. Польза. Красота&raquo;</p>
                  </div>
                </div>
                <div class="studio_item_right">
                  <div class="studio_item_right_square"></div>
                  <div class="studio_item_right_text">
                    <p class="studio_item_right_quote">&mdash;&nbsp;&laquo;Я&nbsp;всегда стремлюсь выстроить доверительные&nbsp;и, не&nbsp;побоюсь этого слова, дружеские отношения с&nbsp;заказчиком. В&nbsp;наших обоюдных интересах&nbsp;&mdash; вместе пройти весь увлекательный путь, от&nbsp;первых концептуальных идей, через детальный проект, который можно в&nbsp;подробностях прощупать на&nbsp;бумаге&nbsp;&mdash; к&nbsp;реальному, фактическому результату. Давайте постараемся получить максимальное творческое удовлетворение на&nbsp;этом пути!&raquo;</p>
                    <p class="studio_item_right_p">Игнатьев Александр&nbsp;&mdash; архитектор, дизайнер, основатель студии i-project.</p>
                  </div>
                  <StaticImage src="../../images/studio_alexander_iproject.png" alt="Архитектор, дизайнер, основатель студии i-project Александр Игнатьев" class="studio_item_right_img" />
                </div>
                <div class="studio_item">
                  <div class="studio_item_block">
                    <h3 class="studio_item_h3">Почему&nbsp;мы?</h3>
                  </div>
                  <div class="studio_item_text">
                    <p class="studio_item_p">Нам есть что показать! У&nbsp;нас за&nbsp;плечами 15&nbsp;лет положительного профессионального опыта. За&nbsp;это время с&nbsp;нашей помощью было запроектировано и&nbsp;введено в&nbsp;эксплуатацию более 100 объектов интерьерного дизайна и&nbsp;архитектуры. Часть из&nbsp;них можно увидеть на&nbsp;фото и&nbsp;видео в&nbsp;разделе портфолио.</p>
                    <p class="studio_item_p">Работы студии публикуются в&nbsp;популярных профильных журналах и&nbsp;на&nbsp;ведущих порталах об&nbsp;архитектуре и&nbsp;дизайне интерьеров.</p>
                  </div>
                </div>
              </div>
              <section className={stylesPublication.publication_about}>
                <h2 className="studio_h2">Публикации</h2>
                <Publication />
              </section>
              <h2 class="studio_h2" id={"diplomy"}>Наши награды</h2>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="rewards studio_rewards">
            <div class="reward_item rewards_white">
              <StaticImage src="../../images/rewards/reward_15.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Первое место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Жилые одноквартирные и&nbsp;малоэтажные дома (1-3 этажа)&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/architecture/garmony-dom-arch" className="link">&laquo;Гармоничный дом. Архитектура&raquo;</Link>.</p>
            </div>
            <div class="reward_item">
              <StaticImage src="../../images/rewards/reward_3.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/interier/interier-baltic-house" className="link">&laquo;Дом с&nbsp;Балтийским характером&raquo;</Link>.</p>
            </div>
            <div class="reward_item reward_change1">
              <StaticImage src="../../images/rewards/reward_2.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/architecture/rekonstrukciya-protos" className="link">&laquo;Реконструкция административного офисного здания группы компаний ПРОТОС&raquo;</Link>.</p>
            </div>
            <div class="reward_item rewards_white">
              <StaticImage src="../../images/rewards/reward_4.jpg" alt="" class="reward_image"/>
              <p class="reward_text">1&nbsp;место на&nbsp;Республиканском триеннале дизайнеров частного интерьера &laquo;Профессиональный интерьер&raquo; за&nbsp;2014, 2015, 2016&nbsp;гг в&nbsp;номинации &laquo;Интерьер квартиры&raquo; за&nbsp;реализацию проекта <Link to="/portfolio/interier/storojevskaya" className="link">&laquo;Дизайн интерьера квартиры&raquo;</Link>. Конкурс проводится при поддержке Министерства архитектуры и&nbsp;строительства и&nbsp;посольства Италии в&nbsp;Республике Беларусь. Работы оценивало авторитетное международное жюри из&nbsp;7&nbsp;стран: Беларуси, Германии, Испании, Италии, Латвии, Литвы, России.</p>
            </div>
            <div class="reward_item rewards_white">
              <StaticImage src="../../images/rewards/reward_5.jpg" alt="" class="reward_image"/>
              <p class="reward_text">1&nbsp;место на&nbsp;Международном архитектурном биеннале &laquo;Леонардо&nbsp;&mdash; 2019&raquo; в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo; за&nbsp;проект <Link to="/portfolio/architecture/dom-u-more" className="link">&laquo;Дом у&nbsp;моря&raquo;</Link>. В&nbsp;конкурсе участвовало более 300 работ из&nbsp;28&nbsp;стран за&nbsp;2016, 2017, 2018, 2019гг. Работы оценивало международное жюри: известные архитекторы из&nbsp;США, Австрии, Нидерландов, России и&nbsp;Беларуси.</p>
            </div>
            <div class="reward_item">
              <StaticImage src="../../images/rewards/reward_14.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Второе место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры общественных, административных и&nbsp;производственных объектов&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/interier/compact" className="link">&laquo;Дизайн интерьера офиса ООО &bdquo;Александров&ldquo;&raquo;</Link>.</p>
            </div>
            <div class="reward_item reward_change2">
              <StaticImage src="../../images/rewards/reward_1.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Второе место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/interier/interier-protos" className="link">&laquo;Интерьер офиса группы компаний ПРОТОС&raquo;</Link>.</p>
            </div>
            <div class="reward_item rewards_white">
              <StaticImage src="../../images/rewards/reward_16.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Второе место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Проект&raquo;, в&nbsp;номинации &laquo;Интерьеры жилых помещений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/interier/cyprus" className="link">&laquo;Дом на&nbsp;Кипре. Интерьер&raquo;</Link>.</p>
            </div>
            <div class="reward_item rewards_white">
              <StaticImage src="../../images/rewards/reward_13.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Студия дизайна интерьера I-PROJECT стала одним из&nbsp;победителей международного конкурса Global Kitchen Design Award &laquo;Международный дизайн кухни&raquo;, в&nbsp;номинации за&nbsp;лучшую архитектуру и&nbsp;дизайн кухни 2021 за&nbsp;проект в&nbsp;жилищном комплексе <Link to="/portfolio/interier/d3" className="link">&laquo;D3&raquo;</Link>.</p>
            </div>
            <div class="reward_item reward_item_hidden">
              <StaticImage src="../../images/rewards/reward_17.jpg" alt="" class="reward_image"/>
              <p class="reward_text">Второе место на&nbsp;XXI Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV&nbsp;Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Проект&raquo;, в&nbsp;номинации &laquo;Реконнструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/architecture/libknehta" className="link">&laquo;Реконструкция административно-производственного здания с&nbsp;паркингом в&nbsp;г.Минске по&nbsp;ул.К.Либкнехта&raquo;</Link>.</p>
            </div>
          </div>
          <section>
            <div class="studio_diplomas_text">
              <div class="studio_diplomas_text_block">
                <h3 class="studio_h3">Фестиваль архитектуры</h3>
                <p class="studio_diplomas_p">Общественное объединение &laquo;Белорусский Союз архитекторов&raquo; при поддержке, Министерства архитектуры и&nbsp;строительства Республики Беларусь, Министерства образования Республики Беларусь, Министерства культуры Республики Беларусь, Минского горисполкома, Международной Ассоциации союзов архитекторов (МАСА), начиная с&nbsp;1999&nbsp;года, проводит традиционный Национальный фестиваль архитектуры.</p>
                <p class="studio_diplomas_p">Фестиваль архитектуры&nbsp;&mdash; праздник тех, кто формирует среду обитания городов и&nbsp;сёл, проектирует массовое и&nbsp;индивидуальное жильё, уникальные объекты для бизнеса, спорта, туризма и&nbsp;культуры.</p>
                <p class="studio_diplomas_p">Фестиваль архитектуры&nbsp;&mdash; своеобразный отчет белорусских архитекторов, отражающий основные достижения отечественного зодчества на&nbsp;конкретном этапе, выявление и&nbsp;пропаганда лучших произведений белорусских мастеров архитектуры.</p>
                <h3 class="studio_h3">Профессиональный интерьер</h3>
                <p class="studio_diplomas_p">Республиканское триеннале дизайнеров частного интерьера &laquo;Профессиональный интерьер&raquo;&nbsp;&mdash; знаковое событие в&nbsp;сфере архитектуры, которое проводится при поддержке Министерства строительства и&nbsp;архитектуры Беларуси и&nbsp;Посольства Италии в&nbsp;Беларуси.</p>
              </div>
              <div class="studio_diplomas_text_block">
                <p class="studio_diplomas_p">В&nbsp;рамках выставки свои работы презентуют лучшие представители сферы, их&nbsp;оценивает авторитетное европейское жюри. Победа на&nbsp;конкурсе высоко ценится в&nbsp;профессиональной среде и&nbsp;является подтверждением мастерства.</p>
                <h3 class="studio_h3">Леонардо</h3>
                <p class="studio_diplomas_p">Учредителем и&nbsp;организатором Международного архитектурного биеннале &laquo;Леонардо-2019&raquo; является Белорусский союз архитекторов. Мероприятие проводится, чтобы выявить молодых и&nbsp;талантливых архитекторов и&nbsp;определить перспективные направления развития сферы.</p>
                <p class="studio_diplomas_p">В&nbsp;2019 году в&nbsp;конкурсе участвовали более 300 работ от&nbsp;архитекторов из&nbsp;28&nbsp;стран мира. Работы оценивали признанные мастера своего дела из&nbsp;США, Австрии, Нидерландов, России и&nbsp;Беларуси.</p>
                <h3 class="studio_h3">Конкурс Premio Decor Design</h3>
                <p class="studio_diplomas_p">Конкурс Premio Decor Design под патронажем Посольства Италии в&nbsp;Республике Беларусь. В&nbsp;2012 году в&nbsp;нем участвовали более сотни белорусских дизайнеров. Организаторы ставили перед собой цель найти лучшие проекты, созданные с&nbsp;использованием материалов компании OIKOS. Быть победителем такого конкурса особенно почетно, так как дизайн-проекты оценивает международное жюри. Это высокая оценка европейского уровня.</p>
              </div>
            </div>
          </section>
          <Fancybox>
            <div class="studio_diplomas_more">
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_6.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_6.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_7.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_7.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_8.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_8.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_9.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_9.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_10.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_10.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_11.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_11.jpg" alt="Диплом 1 места" />
              </a>
              <a
                href="https://i-project.by/portfolio_newsite/rewards/reward_12.webp"
                data-fancybox="gallery-1"
                class="studio_diplomas_more_link"
              >
                <StaticImage src="../../images/rewards/reward_12.jpg" alt="Диплом 1 места" />
              </a>
            </div>
          </Fancybox>
        </div>
        <StaticImage class="studio_kollazh" alt="Коллаж для страницы О студии i-project" src="../../images/studio_kollazh.jpg" />
      </section>
    </Layout>
  )
}

export default About
