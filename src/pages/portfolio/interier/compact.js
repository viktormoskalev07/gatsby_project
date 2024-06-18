import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/compact/01_compact.jpg"
import { IncontentYouToobe } from "../../../subitems/incontent-youToobe"
import { IncontentReviewCompact } from "../../../subitems/review-inproject/reviewCompact"
import Seo from "../../../components/seo"
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { ProjectVideoTrigger } from "../../../subitems/project-video-trigger"
import { Compliment } from "../../../subitems/compliment/compliment"

const compact = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера офиса ООО Александров 50 м2, фото | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер офиса. Нам удалось найти место для 3-х помещений и 5-ти функциональных зон."}
            location={"https://i-project.by/portfolio/interier/compact"}
            image={"https://i-project.by/portfolio_newsite/compact/01_compact.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера офиса ООО&nbsp;&laquo;Александров&raquo;, 50м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=6"}
              image={thumbnail}
              title={"Дизайн интерьера офиса"}
              embed={'7P7pibFNjRo'}>
              <StaticImage src={'../../../images/portfolio/compact/01_compact.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_2" title="План" /></li>
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_3" title="Кабинет руководителя" /></li>
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_4" title="Приемная" /></li>
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_5" title="Кабинет заместителя" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
            <div class="project_info">
                <p class="project_info_p">Год: <span>2023</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/compact/06_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/06_compact.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/compact/16_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/16_compact.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/compact/04_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/04_compact.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Разработали и&nbsp;реализовали проект интерьера офиса для руководителей компании Александров. На&nbsp;небольшой площади в&nbsp;50м<sup>2</sup> организовали ресепшен, кабинеты директора и&nbsp;помощника.</p>
                </div>
              </div>
              <div class="content_images">
              <h2 class="content_h2" id="anchor_2">План</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/18_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/18_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <IncontentYouToobe
                  param={"start=0"}
                  title={"Обзор интерьера офиса от I-PROJECT"}
                  embed={'OQpDR0Miv_U'}
                />
              </div>
              <div class="content_text">
                <p class="content_p">Рабочее пространство каждого из&nbsp;кабинетов оборудовано удобными столами с&nbsp;дополнительной переговорной частью и&nbsp;стеллажами, выполненными по&nbsp;индивидуальным авторским эскизам.</p>
                <p class="content_p">Пол и&nbsp;стены облицованы крупноформатными плитами из&nbsp;керамогранита и&nbsp;панелями в&nbsp;отделке из&nbsp;шпона дуба. Участок стены между кабинетами выполнен из&nbsp;стеклоблоков, к&nbsp;которым примыкают зеленые панно. Помещения офиса украшает живопись Дениса Синявского.</p>
                <h2 class="content_h2" id="anchor_3">Кабинет руководителя</h2>
                <p class="content_p">В&nbsp;кабинете директора так&nbsp;же нашлось место для размещения кожаного дивана и&nbsp;двух кресел.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/01_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/01_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/02_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/02_compact.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="60">
                    <figure slot="first" width="100%" class="before before_white_bcg">
                      <StaticImage src="../../../images/portfolio/compact/03_compact.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white_bcg">
                      <StaticImage src="../../../images/portfolio/compact/3d/1.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/alexandrov/alexandrovFilm_1.mp4'
                />
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/04_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/04_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/05_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/05_compact.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/03_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/03_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="rewards">
                <div class="reward_item rewards_white">
                  <StaticImage src="../../../images/rewards/reward_14.jpg" alt="" class="reward_image"/>
                  <p class="reward_text">Второе место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры общественных, административных и&nbsp;производственных объектов&raquo;. За&nbsp;реализацию проекта &laquo;Дизайн интерьера офиса ООО &bdquo;Александров&ldquo;&raquo;.</p>
                </div>
              </div>
              <div class="content_images">
                <IncontentReviewCompact />
              </div>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://i-project.by/portfolio_newsite/compact/01_compact.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/compact/01_compact.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/alexandrov/alexandrovFilm_2.mp4'
                />
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/06_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/06_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/07_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/07_compact.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/08_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/08_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/09_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/09_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Приемная</h2>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/10_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/10_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/11_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/11_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Кабинет заместителя</h2>
                <p class="content_p">Кабинет помощника отделен от&nbsp;зоны ресепшен стеклянной перегородкой, сквозь которую в&nbsp;него проникает естественный свет.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/12_compact.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="before before_white_bcg">
                      <StaticImage src="../../../images/portfolio/compact/12_compact.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                  <figure class="after after_white_bcg">
                    <StaticImage src="../../../images/portfolio/compact/3d/2.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/14_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/14_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/15_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/15_compact.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/alexandrov/alexandrovFilm_3.mp4'
                />
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/13_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/13_compact.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/16_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/16_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/compact/17_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/17_compact.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/alexandrov/alexandrovFilm_4.mp4'
                />
              </div>
              <Compliment />
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default compact
