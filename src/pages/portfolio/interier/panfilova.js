import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/panfilova/07_panfilova.jpg"
import Seo from "../../../components/seo"

const panfilova = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн квартиры в Минске 85 м2 | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер небольшой квартиры для 1-го-2-х человек."}
            location={"https://www.i-project.by/portfolio/interier/panfilova"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={'start=6'}
              image={thumbnail}
              title={"Двушка на Панфилова. Дизайн квартиры в Минске"}
              embed={'GRFSiz-Or50'}>
              <StaticImage src={'../../../images/portfolio/panfilova/07_panfilova.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_2" title="3D-визуализации и&nbsp;фотографии" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_3" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_4" title="Кухня-столовая" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_5" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_6" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/panfilova/#anchor_7" title="Санузел" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2017</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/panfilova/03_panfilova.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/panfilova/03_panfilova.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/panfilova/04_panfilova.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/panfilova/04_panfilova.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/panfilova/08_panfilova.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/panfilova/08_panfilova.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дизайн интерьера небольшой квартиры для 1-2&nbsp;человек.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">3D-визуализации и&nbsp;фотографии</h2>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/panfilova/3d/1.jpg" alt="" />
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/01_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/01_panfilova.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="40">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/panfilova/3d/2.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/panfilova/03_panfilova.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                  <ImgComparisonSlider class="slider-opacity-and-size" value="60">
                    <figure slot="first" width="100%" class="before before_white">
                      <StaticImage src="../../../images/portfolio/panfilova/3d/3.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after">
                      <StaticImage src="../../../images/portfolio/panfilova/04_panfilova.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                  <ImgComparisonSlider class="slider-opacity-and-size" value="40">
                    <figure slot="first" width="100%" class="before before_white">
                      <StaticImage src="../../../images/portfolio/panfilova/3d/4.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/panfilova/08_panfilova.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/15_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/15_panfilova.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/16_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/16_panfilova.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня-столовая</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/01_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/01_panfilova.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/05_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/05_panfilova.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Гостиная</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/02_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/02_panfilova.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/06_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/06_panfilova.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/07_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/07_panfilova.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/12_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/12_panfilova.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/09_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/09_panfilova.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/10_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/10_panfilova.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/11_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/11_panfilova.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Прихожая</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/14_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/14_panfilova.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Санузел</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/panfilova/13_panfilova.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/panfilova/13_panfilova.jpg" alt="" />
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

export default panfilova
