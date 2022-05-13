import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"

const fine = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Хорошее настроение. Дизайн квартиры в&nbsp;Минске, 140м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              title={"Хорошее настроение. Дизайн квартиры в Минске (140м2)"}
              embed={'TbQZLyJnJ34'}>
              <StaticImage src={'../../../images/portfolio/fine/02_fine.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_5" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_6" title="Детская комната" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_7" title="Прихожая" /></li>
                <li><AnchorLink to="/portfolio/interier/fine/#anchor_8" title="Санузел" /></li>
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
                  href="https://www.i-project.by/portfolio_newsite/fine/02_fine.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/fine/02_fine.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/fine/13_fine.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/fine/13_fine.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/fine/07_fine.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/fine/07_fine.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Интерьер для молодой семьи</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/15_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/15_fine.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/16_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/16_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/01_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/01_fine.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/03_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/03_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/05_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/05_fine.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/04_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/04_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/10_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/10_fine.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/12_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/12_fine.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/11_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/11_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Детская комната</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/08_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/08_fine.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/09_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/09_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Прихожая</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/06_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/06_fine.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Санузел</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/fine/14_fine.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/fine/14_fine.jpg" alt="" />
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

export default fine
