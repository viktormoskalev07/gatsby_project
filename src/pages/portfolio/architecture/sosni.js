import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"

const sosni = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом в&nbsp;сосновом бору. Архитектура, 750м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/sosni/01_sosni.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/sosni/01_sosni.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/sosni/#anchor_1" title="Планировка дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/sosni/#anchor_2" title="Фасад" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>Московская область, Россия</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_1">Планировка дома</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/08_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/08_sosni.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/09_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/09_sosni.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Фасад</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/02_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/02_sosni.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/03_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/03_sosni.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/04_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/04_sosni.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/05_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/05_sosni.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/06_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/06_sosni.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/sosni/07_sosni.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/sosni/07_sosni.jpg" alt="" />
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

export default sosni
