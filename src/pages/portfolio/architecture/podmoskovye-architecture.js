import React from 'react';
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const podmoskovyeArch = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера дома в Подмосковье 300 м2 | I-PROJECT"} description={"Задача: Сделать современный жилой дом, используя традиционные решения, но с индивидуальной планировочной структурой."}
            location={"https://i-project.by/portfolio/architecture/podmoskovye-architecture"}
            image={"https://i-project.by/portfolio_newsite/podmoskovye_architecture/01_podmoskovye_architecture.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом в&nbsp;Подмосковье. Архитектура, 300м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/01_podmoskovye_architecture.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/podmoskovye_architecture/01_podmoskovye_architecture.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/podmoskovye-architecture/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/podmoskovye-architecture/#anchor_2" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/podmoskovye-architecture/#anchor_3" title="Фасад" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2017</span></p>
                <p class="project_info_p">Локация: <span>Московская область, Россия</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/02_podmoskovye_architecture.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/podmoskovye_architecture/02_podmoskovye_architecture.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/03_podmoskovye_architecture.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/podmoskovye_architecture/03_podmoskovye_architecture.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/04_podmoskovye_architecture.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/podmoskovye_architecture/04_podmoskovye_architecture.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Заказчиком была поставлена задача сделать современный жилой дом, используя традиционные решения, но&nbsp;с&nbsp;индивидуальной планировочной структурой.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">План дома</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/05_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/05_podmoskovye_architecture.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/06_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/06_podmoskovye_architecture.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Фасад</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/01_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/01_podmoskovye_architecture.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/02_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/02_podmoskovye_architecture.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/03_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/03_podmoskovye_architecture.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/podmoskovye_architecture/04_podmoskovye_architecture.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/podmoskovye_architecture/04_podmoskovye_architecture.jpg" alt="" />
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
};

export default podmoskovyeArch;