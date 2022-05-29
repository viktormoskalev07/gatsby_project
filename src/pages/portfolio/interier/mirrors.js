import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/panfilova/03_panfilova.jpg"
import Seo from "../../../components/seo"

const mirrors = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера квартиры 100 м2, фотографии | I-PROJECT"} description={"Компактное пространство интерьера визуально расширяется при помощи эффектных отражений. Оригинальные фото реализованного объекта."}
            location={"https://www.i-project.by/portfolio/interier/mirrors"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске, 100м<sup>2</sup></h1>
          </div>
          {/* <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/mirrors/11_mirrors.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/mirrors/11_mirrors.jpg" alt="" />
            </a>
          </div> */}
          <div class="project_main_photo">
            <YouTobe
              param={'start=8'}
              image={thumbnail}
              title={"Игра с отражениями. Дизайн квартиры в Минске"}
              embed={'ki7KwSmPG0g'}>
              <StaticImage src={'../../../images/portfolio/mirrors/03_mirrors.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_5" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_6" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_7" title="Коридор" /></li>
                <li><AnchorLink to="/portfolio/interier/mirrors/#anchor_8" title="Санузел" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2013</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/mirrors/06_mirrors.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/mirrors/06_mirrors.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/mirrors/08_mirrors.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/mirrors/08_mirrors.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/mirrors/02_mirrors.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/mirrors/02_mirrors.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Компактное пространство интерьера визуально расширяется при помощи эффектных отражений.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/20_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/20_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/21_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/21_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/03_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/03_mirrors.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/09_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/09_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/07_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/07_mirrors.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/05_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/05_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/10_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/10_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/04_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/04_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/12_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/12_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/15_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/15_mirrors.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/14_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/14_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/17_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/17_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/19_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/19_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Коридор</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/01_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/01_mirrors.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/16_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/16_mirrors.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Санузел</h2>
                <div class="content_images_one">
                <a
                    href="https://www.i-project.by/portfolio_newsite/mirrors/18_mirrors.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/mirrors/18_mirrors.jpg" alt="" />
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

export default mirrors
