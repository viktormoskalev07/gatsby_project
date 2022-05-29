import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const compact = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера офиса COMPACT 50 м2, фото | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер офиса. Нам удалось найти место для 3-х помещений и 5-ти функциональных зон."}
            location={"https://www.i-project.by/portfolio/interier/compact"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера офиса Compact, 50м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/compact/01_compact.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/compact/01_compact.jpg" alt="" />
            </a>
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
                <li><AnchorLink to="/portfolio/interier/compact/#anchor_5" title="Переговорная с&nbsp;рабочими местами" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
            <div class="project_info">
                <p class="project_info_p">Год: <span>2021</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/compact/08_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/08_compact.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/compact/04_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/04_compact.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/compact/05_compact.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/compact/05_compact.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Мы&nbsp;редко берем в&nbsp;работу маленькие объекты, но&nbsp;для постоянных клиентов делаем исключения. В&nbsp;компактном пространстве (общей площадью 50м<sup>2</sup>) нам удалось найти место для 3-х помещений и&nbsp;5-ти функциональных зон: приемной; помещения двойного назначения (переговорная&nbsp;/ кабинет заместителя), отделенного от&nbsp;приемной раздвижной стеклянной перегородкой; кабинета руководителя с&nbsp;рабочим столом, приставным столом для посетителей и&nbsp;небольшой зоной отдыха.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">План</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/11_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/11_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/12_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/12_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Кабинет руководителя</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/02_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/02_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/03_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/03_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Приемная</h2>
                <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                  <div slot="first" width="100%">
                    <StaticImage src="../../../images/portfolio/compact/10_compact.jpg" alt="" />
                  </div>
                  <div slot="second" width="100%">
                    <StaticImage src="../../../images/portfolio/compact/07_compact.jpg" alt="" />
                  </div>
                </ImgComparisonSlider>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Переговорная</h2>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/06_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/06_compact.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/compact/09_compact.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/compact/09_compact.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default compact
