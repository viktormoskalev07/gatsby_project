import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

function cafe () {
  return (
<Layout>
      <Seo  title={"Дизайн интерьера игровой зоны 100 м2 | I-PROJECT"} description={"Пример визуализации игрвой зоны в досуговом центре."}
            location={"https://i-project.by/portfolio/interier/cafe"}
            image={"https://i-project.by/portfolio_newsite/cafe/01_cafe.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Гэтсби. Дизайн пространства кафе, бара, ресторана, 250м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/cafe/01_cafe.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/cafe/01_cafe.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/cafe/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/cafe/#anchor_2" title="Планировка" /></li>
                <li><AnchorLink to="/portfolio/interier/cafe/#anchor_3" title="VIP зал" /></li>
                <li><AnchorLink to="/portfolio/interier/cafe/#anchor_4" title="Основной зал" /></li>
                <li><AnchorLink to="/portfolio/interier/cafe/#anchor_5" title="Дизайн игровой зоны" /></li>
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
                  href="https://i-project.by/portfolio_newsite/cafe/02_cafe.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cafe/02_cafe.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/cafe/08_cafe.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cafe/08_cafe.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/cafe/16_cafe.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cafe/16_cafe.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Интерьер кафе-ресторана в&nbsp;составе реконструируемого по&nbsp;нашему проекту досугового центра в&nbsp;Минской области.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/17_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/17_cafe.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/18_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/18_cafe.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Фото интерьера до&nbsp;реконструкции</h2>
                <div class="content_images_three">
                  <StaticImage src="../../../images/portfolio/cafe/before/01_cafe.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cafe/before/02_cafe.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cafe/before/03_cafe.jpg" alt="" />
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">VIP зал</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/02_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/02_cafe.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Создавая настроение для этого заведения, мы&nbsp;вдохновлялись романами Фицджеральда и&nbsp;фильмами Вуди Аллена. Атмосфера &laquo;Эпохи джаза&raquo; наполняет собой пространство, а&nbsp;дух гедонизма проявляется в&nbsp;деталях интерьера.</p>
                <p class="content_p">Добавим сюда переосмысленную кухню Нового Света начала прошлого века, соответствующую карту напитков, немного томного вокала под аккомпанемент фортепиано и&nbsp;попытаемся на&nbsp;несколько сладких мгновений перенестись во&nbsp;времени и&nbsp;пространстве. Ночь нежна...</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/04_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/04_cafe.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/05_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/05_cafe.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/03_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/03_cafe.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/06_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/06_cafe.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/07_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/07_cafe.jpg" alt="" />
                  </a>
                </div>
                <h2 class="content_h2" id="anchor_4">Основной зал</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/10_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/10_cafe.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/12_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/12_cafe.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://i-project.by/portfolio_newsite/cafe/14_cafe.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/cafe/14_cafe.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/08_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/08_cafe.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/09_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/09_cafe.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/11_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/11_cafe.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_5">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/billard/01_billard.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/billard/05_billard.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Дизайн игровой зоны</p>
                      <Link to="/portfolio/interier/billard-bowling" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/interier/billard-bowling" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/16_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/16_cafe.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/13_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/13_cafe.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cafe/15_cafe.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cafe/15_cafe.jpg" alt="" />
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
}

export default cafe