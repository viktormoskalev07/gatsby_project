import React from 'react';
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const billard = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера игровой зоны 100 м2 | I-PROJECT"} description={"Пример визуализации игрвой зоны в досуговом центре."}
            location={"https://i-project.by/portfolio/interier/billard-bowling"}
            image={"https://i-project.by/portfolio_newsite/billard/01_billard.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн игровой зоны (боулинг, бильярд), 100м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/billard/01_billard.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/billard/01_billard.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/billard-bowling/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/billard-bowling/#anchor_2" title="Планировка" /></li>
                <li><AnchorLink to="/portfolio/interier/billard-bowling/#anchor_3" title="Игровая зона" /></li>
                <li><AnchorLink to="/portfolio/interier/billard-bowling/#anchor_4" title="Дизайн интерьера ресторана" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2022</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/billard/02_billard.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/billard/02_billard.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/billard/03_billard.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/billard/03_billard.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/billard/07_billard.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/billard/07_billard.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Интерьер помещений для игры в&nbsp;боулинг и&nbsp;бильярд в&nbsp;составе реконструируемого по&nbsp;нашему проекту досугового центра в&nbsp;Минской области.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/09_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/09_billard.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/10_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/10_billard.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Фото до&nbsp;реконструкции</h2>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/billard/before/01_billard.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/billard/before/02_billard.jpg" alt="" />
                </div>
                <div class="content_images_three">
                  <StaticImage src="../../../images/portfolio/billard/before/03_billard.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/billard/before/04_billard.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/billard/before/05_billard.jpg" alt="" />
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Игровая зона</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/01_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/01_billard.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/02_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/02_billard.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/03_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/03_billard.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_4">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/cafe/14_cafe.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/cafe/06_cafe.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Дизайн интерьера ресторана</p>
                      <Link to="/portfolio/interier/cafe" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/interier/cafe" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/04_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/04_billard.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/05_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/05_billard.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/06_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/06_billard.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/07_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/07_billard.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/billard/08_billard.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/billard/08_billard.jpg" alt="" />
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

export default billard
