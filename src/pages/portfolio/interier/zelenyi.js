import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const zelenyi = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера дома 250 м2, фото | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный дизайн интерьера дома в Острошицком городке."}
            location={"https://i-project.by/portfolio/interier/zelenyi"}
            image={"https://i-project.by/portfolio_newsite/zelenyi/01_zelenyi.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/zelenyi/03_zelenyi.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/zelenyi/03_zelenyi.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_2" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_5" title="Прихожая" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_6" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_7" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenyi/#anchor_8" title="Санузел" /></li>
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
                  href="https://i-project.by/portfolio_newsite/zelenyi/06_zelenyi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenyi/06_zelenyi.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zelenyi/17_zelenyi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenyi/17_zelenyi.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zelenyi/11_zelenyi.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenyi/11_zelenyi.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дизайн интерьера дома в Острошицком городке</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/20_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/20_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/22_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/22_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/02_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/02_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/04_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/04_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/05_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/05_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Прихожая</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/07_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/07_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/01_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/01_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Второй этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/21_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/21_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/23_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/23_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Спальня</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/10_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/10_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/09_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/09_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/zelenyi/13_zelenyi.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/zelenyi/13_zelenyi.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/14_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/14_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/12_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/12_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/08_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/08_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Санузел</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/19_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/19_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/15_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/15_zelenyi.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/10_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/18_zelenyi.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenyi/16_zelenyi.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenyi/16_zelenyi.jpg" alt="" />
                  </a>
                </div>
              </div>
              <Compliment />
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default zelenyi
