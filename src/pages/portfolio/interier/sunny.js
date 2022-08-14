import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const sunny = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера таунхауса в Солнечном | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер таунхауса."}
            location={"https://i-project.by/portfolio/interier/sunny"}
            image={"https://i-project.by/portfolio_newsite/sunny/01_sunny.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Таунхаус в&nbsp;Солнечном. Дизайн интерьера, 300м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/sunny/01_sunny.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/sunny/01_sunny.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_2" title="Гостиная, совмещенная с&nbsp;кухней-столовой" /></li>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_3" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_4" title="Кабинет" /></li>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_5" title="Спальни детей" /></li>
                <li><AnchorLink to="/portfolio/interier/sunny/#anchor_6" title="Кинозал с&nbsp;зоной отдыха" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/sunny/02_sunny.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sunny/02_sunny.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/sunny/28_sunny.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sunny/28_sunny.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/sunny/32_sunny.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sunny/32_sunny.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p"></p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/43_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/43_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/44_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/44_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Гостиная, совмещенная с&nbsp;кухней-столовой</h2>
                <div class="content_images_one">
                  <a
                  href="https://i-project.by/portfolio_newsite/sunny/03_sunny.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/sunny/03_sunny.jpg" alt="" />
                </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/04_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/04_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/05_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/05_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/06_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/06_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/07_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/07_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Закрытая терасса</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/12_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/12_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/13_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/13_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Лестница</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/08_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/08_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Прихожая</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/10_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/10_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/11_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/11_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/09_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/09_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Второй этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/45_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/45_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/46_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/46_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Мастер-спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/14_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/14_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/sunny/15_sunny.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/sunny/15_sunny.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/20_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/20_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/16_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/16_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кабинет</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/29_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/29_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/30_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/30_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/31_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/31_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Третий этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/47_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/47_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/48_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/48_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Спальня дочери</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/37_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/37_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/38_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/38_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/39_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/39_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/40_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/40_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Спальня сына</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/34_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/34_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/33_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/33_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/35_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/35_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/36_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/36_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">План цокольного этажа</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/41_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/41_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/42_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/42_sunny.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Кинозал с&nbsp;зоной отдыха</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/25_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/25_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/21_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/21_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/23_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/23_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/24_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/24_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/22_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/22_sunny.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/26_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/26_sunny.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/sunny/27_sunny.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sunny/27_sunny.jpg" alt="" />
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

export default sunny
