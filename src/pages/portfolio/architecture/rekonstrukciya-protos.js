import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/protos_reconstraction/01_protos_reconstraction.jpg"

const rekonstrukciyaProtos = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Реконструкция офисного здания группы компаний «Протос», 200&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=6"}
              image={thumbnail}
              title={"Реконструкция офисного здания группы компаний «Протос»"}
              embed={'d4MFvx0II4s'}>
              <StaticImage src={'../../../images/portfolio/protos_reconstraction/01_protos_reconstraction.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_2" title="Планировка" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_3" title="Реализация" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_4" title="Интерьер" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_5" title="Вид на&nbsp;вековой дуб" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_6" title="Отделка фасада" /></li>
                <li><AnchorLink to="/portfolio/architecture/rekonstrukciya-protos/#anchor_7" title="Благоустройство территории" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>Могилев</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/04_protos_reconstraction.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/04_protos_reconstraction.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/02_protos_reconstraction.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/02_protos_reconstraction.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/03_protos_reconstraction.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/03_protos_reconstraction.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Задача</span>
                  <p class="content_task_p">Разработать архитектурное и&nbsp;интерьерное решение, задействовав остов существующего здания, в&nbsp;соответствии с&nbsp;новыми потребностями и&nbsp;духом времени. Дано: Одноэтажное строение казарменного типа, родом из&nbsp;90-х, с&nbsp;высокой степенью морального и&nbsp;физического износа.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/22_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/22_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/23_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/23_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Реализация</h2>
                <div class="content_grid6_4_big">
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/02_protos_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/03_protos_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/04_protos_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/05_protos_before.jpg" class="content_grid6_4_big_img" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/06_protos_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/07_protos_before.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/before/08_protos_before.jpg" alt="" />
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/protos_reconstraction/11_1_protos_reconstraction.jpg" alt="" />
                      <figcaption>Стало</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after">
                      <StaticImage src="../../../images/portfolio/protos_reconstraction/before/01_protos_before.jpg" alt="" />
                      <figcaption>Было</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_two_left_narrow">
                  <figure class="before before_white">
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/before/09_protos_before.jpg" alt="" />
                    <figcaption>Было</figcaption>
                  </figure>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/02_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white">
                        <StaticImage src="../../../images/portfolio/protos_reconstraction/02_protos_reconstraction.jpg" alt="" />
                      <figcaption>Стало</figcaption>
                    </figure>
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before before_white_bcg">
                      <StaticImage src="../../../images/portfolio/protos_reconstraction/21_1_protos_reconstraction.jpg" alt="" />
                      <figcaption>Стало</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white_bcg">
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/before/10_protos_before.jpg" alt="" />
                      <figcaption>Было</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_4">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/protos_interior/01_protos_interior.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/protos_interior/19_protos_interior.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Интерьер офиса</p>
                      <Link to="/portfolio/interier/interier-protos" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/interier/interier-protos" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Вид на&nbsp;вековой дуб</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/06_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/06_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/07_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/07_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/08_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/08_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Пристроить к&nbsp;зданию новые объемы с&nbsp;помещениями таким образом, чтобы не&nbsp;повредить корневую систему векового дуба&nbsp;&mdash; главной природной достопримечательности на&nbsp;территории предприятия, и&nbsp;сохранить вид на&nbsp;него из&nbsp;всех существующих окон, выходящих на&nbsp;соответствующую сторону.</p>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/09_protos_reconstraction.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/protos_reconstraction/09_protos_reconstraction.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/10_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/10_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
                <h2 class="content_h2" id="anchor_6">Отделка фасада (крупноформатные керамические плиты)</h2>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/12_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/12_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/11_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/11_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/13_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/13_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/protos_reconstraction/pattern.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/14_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/14_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/16_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/16_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/15_protos_reconstraction.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/protos_reconstraction/15_protos_reconstraction.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_2.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Реконструкция административного офисного здания группы компаний ПРОТОС&raquo;.</p>
                  </div>
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_1.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Второе место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;<Link to="/portfolio/interier/interier-protos" className="link">Интерьер офиса группы компаний ПРОТОС</Link>&raquo;.</p>
                  </div>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Благоустройство территории</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/17_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/17_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/05_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/05_protos_reconstraction.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/20_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/20_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/19_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/19_protos_reconstraction.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/21_protos_reconstraction.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_reconstraction/21_protos_reconstraction.jpg" alt="" />
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

export default rekonstrukciyaProtos
