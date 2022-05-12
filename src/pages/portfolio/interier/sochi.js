import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"

const sochi = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера в&nbsp;апарт-комплексе &laquo;Матисс&raquo; в&nbsp;г.Сочи, 45&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/sochi/05_sochi.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/sochi/05_sochi.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_3" title="Кухня-столовая" /></li>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_4" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_5" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/sochi/#anchor_6" title="Санузел" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>Сочи, Россия</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/sochi/08_sochi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sochi/08_sochi.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/sochi/13_sochi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sochi/13_sochi.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/sochi/01_sochi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sochi/01_sochi.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Мы&nbsp;редко берем в&nbsp;работу интерьеры, площадь которых меньше 100м<sup>2</sup>. Делаем исключения только для постоянных клиентов или интересных объектов. В&nbsp;данном случае сошлись оба фактора.</p>
                  <p class="content_task_p">На&nbsp;ограниченной площади апартаментов мы&nbsp;компактно разместили все самое необходимое для беззаботного курортного отдыха. В&nbsp;интерьере нашлось место и&nbsp;для спальни, и&nbsp;для гостиной, и&nbsp;для небольшой кухни-столовой. Интерьер получился немного сказочным, с&nbsp;легким ретро-флером, но&nbsp;без нафталина.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/19_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/19_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/20_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/20_sochi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Кухня-столовая</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/04_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/04_sochi.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/03_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/03_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/02_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/02_sochi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/12_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/12_sochi.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/07_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/07_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/06_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/06_sochi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Спальня</h2>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/09_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/09_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/10_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/10_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/11_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/11_sochi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Санузел</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/16_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/16_sochi.jpg" alt="" />
                  </a>
                </div>
                {/* <div class="pattern">
                  <StaticImage src="../../../images/portfolio/sochi/pattern.jpg" alt="" />
                </div> */}
                <div class="content_images_three">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/14_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/14_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/15_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/15_sochi.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sochi/18_sochi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sochi/18_sochi.jpg" alt="" />
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

export default sochi