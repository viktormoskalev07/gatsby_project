import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const luxury = () => {
  return (
    <Layout>
      <Seo  title={"LUXURY HOUSE. Интерьер дома под Минском 400 м2 | I-PROJECT"} description={"Дизайн интерьера дома, архитектуру которого тоже придумывали мы. Также мы разработали архитектурное решение."}
            location={"https://i-project.by/portfolio/interier/luxury"}
            image={"https://i-project.by/portfolio_newsite/luxury/01_luxury.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Luxury house. Интерьер дома под Минском, 400м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/luxury/01_luxury.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/luxury/01_luxury.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_2" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_3" title="Экстерьер" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_4" title="Кухня-столовая" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_5" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_6" title="Спальни" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_7" title="Бассейн" /></li>
                <li><AnchorLink to="/portfolio/interier/luxury/#anchor_8" title="Баня с&nbsp;комнатой отдыха" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2019</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/luxury/05_luxury.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luxury/05_luxury.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/luxury/07_luxury.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luxury/07_luxury.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/luxury/27_luxury.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luxury/27_luxury.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дизайн интерьера дома, архитектуру которого тоже придумывали&nbsp;мы. Также мы&nbsp;разработали <Link to="/portfolio/architecture/luban" className="link">архитектурное решение.</Link></p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Первый этаж</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/13_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/13_luban.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/03_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/03_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/04_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/04_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/02_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/02_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_3">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/luban/03_luban.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/luban/04_luban.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Экстерьер дома</p>
                      <Link to="/portfolio/architecture/luban" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/architecture/luban" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня-столовая</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/11_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/11_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/06_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/06_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/10_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/10_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/09_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/09_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/08_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/08_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Второй этаж</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/14_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/14_luban.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Мастер-спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/18_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/18_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/20_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/20_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/19_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/19_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/21_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/21_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/22_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/22_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузел при мастер-спальне</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/26_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/26_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/24_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/24_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/25_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/25_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/23_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/23_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/31_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/31_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images">
                  <div class="content_images_one">
                    <a
                      href="https://i-project.by/portfolio_newsite/luxury/29_luxury.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/luxury/29_luxury.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_two">
                    <a
                      href="https://i-project.by/portfolio_newsite/luxury/30_luxury.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/luxury/30_luxury.jpg" alt="" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/luxury/28_luxury.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/luxury/28_luxury.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Гардеробная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/42_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/42_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/40_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/40_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/41_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/41_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/34_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/34_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/37_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/37_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/38_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/38_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/36_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/36_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/35_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/35_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/39_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/39_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузлы</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/32_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/32_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/33_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/33_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Холл</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/47_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/47_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/48_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/48_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Бассейн</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/50_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/50_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/13_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/13_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/12_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/12_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/14_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/14_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/17_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/17_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/15_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/15_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/16_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/16_luxury.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Баня с&nbsp;комнатой отдыха</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/43_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/43_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/46_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/46_luxury.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/45_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/45_luxury.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luxury/44_luxury.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luxury/44_luxury.jpg" alt="" />
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

export default luxury
