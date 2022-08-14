import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const shale = () => {
  return (
    <Layout>
      <Seo  title={"Современное шале. Архитектура дома 300 м2 | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный дом, похожий на фахверковое шале, но в монолите."}
            location={"https://i-project.by/portfolio/architecture/shale"}
            image={"https://i-project.by/portfolio_newsite/shale/01_shale.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Современное шале. Архитектура дома, 300м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/shale/01_shale.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/shale/01_shale.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/shale/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/shale/#anchor_2" title="Планировка дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/shale/#anchor_3" title="Фасад" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2017</span></p>
                <p class="project_info_p">Локация: <span>Беларусь</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/shale/03_shale.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/shale/03_shale.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/shale/02_shale.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/shale/02_shale.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/shale/04_shale.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/shale/04_shale.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Сделать современный дом, похожий на&nbsp;фахверковое шале, но&nbsp;в&nbsp;монолите.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка дома</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/05_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/05_shale.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/06_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/06_shale.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Фасад</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/01_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/01_shale.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/02_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/02_shale.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/03_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/03_shale.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/shale/04_shale.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/shale/04_shale.jpg" alt="" />
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

export default shale
