import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"

const d3 = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fv9YJ7cNTjI?start=6" title="Дизайн квартиры в ЖК D3 в Минске (120м2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_3" title="Гостиная, совмещенная с&nbsp;кухней" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_4" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_5" title="Гардеробная" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_6" title="Кабинет-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/d3/#anchor_7" title="Санузел" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>ЖК &laquo;D3&raquo;, Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/d3/02_d3.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/d3/02_d3.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/d3/26_d3.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/d3/26_d3.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/d3/06_d3.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/d3/06_d3.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">В&nbsp;интерьерах современных квартир, чаще всего, основная площадь и&nbsp;виды отдаются совмещенной зоне гостиной-кухни-столовой, а&nbsp;другие комнаты нарезаются по&nbsp;остаточному принципу... В&nbsp;данном интерьере мы&nbsp;позволили себе отойти от&nbsp;этого стереотипа и&nbsp;равномерно распределили &laquo;планировочные плюшки&raquo; по&nbsp;всем помещениям.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/27_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/27_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/28_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/28_d3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_3">Гостиная, совмещенная с&nbsp;кухней</h2>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://www.i-project.by/portfolio_newsite/d3/01_d3.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/d3/01_d3.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/03_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/03_d3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Общая зона&nbsp;&mdash; умеренная, все элементы интерьера достаточно компактно, но&nbsp;при этом удобно разместились: нашлось место и&nbsp;длинному фронту шкафов колонн на&nbsp;кухне, и&nbsp;барной стойке, и&nbsp;большому столу, и&nbsp;угловому дивану. За&nbsp;счет демонтированных глухих стен между кухней и&nbsp;балконом, и&nbsp;возведением на&nbsp;их&nbsp;месте стеклянного витража&nbsp;&mdash; получили больше света и&nbsp;пространства.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/11_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/11_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/09_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/09_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/10_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/10_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/07_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/07_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/08_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/08_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="40">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/d3/3d/3.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/d3/02_1_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/05_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/05_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/04_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/04_d3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Мастер-спальня</h2>
                <div class="content_text">
                  <p class="content_p">Лучший вид из&nbsp;окна, по&nbsp;желанию заказчицы, отдан хозяйской спальне, из&nbsp;которой через просторную и&nbsp;&laquo;прозрачную&raquo; гардеробную можно попасть в&nbsp;закрепленный за&nbsp;ней санузел. Из&nbsp;спальни и&nbsp;кухни открывается вид на&nbsp;водохранилище &laquo;Дрозды&raquo;.</p>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before before_white">
                      <StaticImage src="../../../images/portfolio/d3/3d/5.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/d3/16_1_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/14_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/14_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/12_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/12_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/d3/pattern.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/15_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/15_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before before_white_bcg">
                      <StaticImage src="../../../images/portfolio/d3/3d/4.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white_bcg">
                      <StaticImage src="../../../images/portfolio/d3/15_1_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/13_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/13_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/17_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/17_d3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Гардеробная</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/18_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/18_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/19_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/19_d3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2"  id="anchor_6">Кабинет-спальня</h2>
                  <div class="content_text">
                  <p class="content_p">Второй комнате (спальне-кабинету взрослой дочери) досталась полноценная гардеробная и&nbsp;балкон. В&nbsp;интерьерной палитре преобладают оттенки пряного меда, дерева, корицы, светлого коралла и&nbsp;ячменного зерна.</p>
                </div>
                <div class="content_images_two">
                  <figure class="before before_white">
                    <StaticImage src="../../../images/portfolio/d3/3d/1.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/23_d3.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white">
                      <StaticImage src="../../../images/portfolio/d3/23_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/25_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/25_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/22_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/22_d3.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/d3/3d/2.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after">
                      <StaticImage src="../../../images/portfolio/d3/24_1_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Прихожая</h2>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/d3/3d/6.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/d3/26_1_d3.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Санузел</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/20_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/20_d3.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/d3/21_d3.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/d3/21_d3.jpg" alt="" />
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

export default d3