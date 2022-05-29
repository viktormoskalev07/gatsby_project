import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const color = () => {
  return (
    <Layout>
      <Seo  title={"Интерьер квартиры в Минске 120 м2, фото | I-PROJECT"} description={"Энергия Цвета. Интерьер без случайных элементов, сочетает в себе традиционные шкафы-колонны со встроенной техникой и яркие стеновые панели с комодом."}
            location={"https://www.i-project.by/portfolio/interier/color"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Энергия цвета. Интерьер квартиры в&nbsp;Минске&nbsp;, 120&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/color/05_color.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/color/05_color.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_5" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/color/#anchor_6" title="Кабинет" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>ЖК &laquo;D3&raquo;, Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/color/01_color.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/color/01_color.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/color/12_color.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/color/12_color.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/color/06_color.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/color/06_color.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Очередной интерьер в&nbsp;жилом комплексе &laquo;D3&raquo; от&nbsp;нашей студии получился бодрым и&nbsp;жизнерадостным. Сформирована удобная планировочная структура, которая оживает благодаря смелым цветовым сочетаниям и&nbsp;композиционным приемам.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/16_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/16_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/17_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/17_color.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/03_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/03_color.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/10_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/10_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/04_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/04_color.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Отдельного внимания заслуживает мебельная группа, разделяющая зоны кухни и&nbsp;гостиной: со&nbsp;стороны кухни&nbsp;&mdash; это традиционные шкафы-колонны со&nbsp;встроенной техникой и&nbsp;холодильным оборудованием, а&nbsp;со&nbsp;стороны гостиной&nbsp;&mdash; яркие стеновые панели с&nbsp;комодом, которые формируют TV-зону. Интерьерное решение&nbsp;&mdash; &laquo;чистое&raquo;, без случайных элементов, при этом не&nbsp;скучное, с&nbsp;внимательным отношением к&nbsp;деталям.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <div class="content_images_one">
                <a
                    href="https://www.i-project.by/portfolio_newsite/color/07_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/07_color.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/08_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/08_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/09_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/09_color.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Мастер-спальня</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/11_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/11_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/13_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/13_color.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/14_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/14_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/15_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/15_color.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Кабинет</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/16_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/16_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/18_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/18_color.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/20_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/20_color.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                <a
                    href="https://www.i-project.by/portfolio_newsite/color/17_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/17_color.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/color/19_color.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/color/19_color.jpg" alt="" />
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

export default color