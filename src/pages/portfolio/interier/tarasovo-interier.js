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

const tarasovoInterier = () => {
  return (
    <Layout>
      <Seo  title={"Дом в Тарасово. Интерьер, 800 м2 | I-PROJECT"} description={"Разработали современный дизайн интерьра большого дома под Минском."}
            location={"https://i-project.by/portfolio/interier/tarasovo-interier"}
            image={"https://i-project.by/portfolio_newsite/tarasovo_interier/01_tarasovo.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дом в&nbsp;Тарасово. Интерьер, 800м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/tarasovo_interier/01_tarasovo.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/tarasovo_interier/01_tarasovo.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/tarasovo-interier/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/tarasovo-interier/#anchor_2" title="До реконструкции" /></li>
                <li><AnchorLink to="/portfolio/interier/tarasovo-interier/#anchor_3" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/interier/tarasovo-interier/#anchor_4" title="Интерьер" /></li>
                <li><AnchorLink to="/portfolio/interier/tarasovo-interier/#anchor_5" title="Экстерьер" /></li>
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
                  href="https://i-project.by/portfolio_newsite/tarasovo_interier/04_tarasovo.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/04_tarasovo.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/tarasovo_interier/12_tarasovo.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/12_tarasovo.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/tarasovo_interier/02_tarasovo.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/02_tarasovo.jpg" alt="" />
                </a>
                
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Проект реконструкции жилого дома в&nbsp;д.Тарасово под Минском состоит из&nbsp;<Link to="/portfolio/architecture/tarasovo-rekonstrukciya" className="link">архитектурной части</Link> и&nbsp;интерьера. Дом рассчитан для постоянного проживания семьи из&nbsp;6&nbsp;человек. Мы&nbsp;нашли оптимальное планировочное решение c&nbsp;учетом существующих исходных данных, пристроили к&nbsp;дому новые объемы: помещение бассейна со&nbsp;СПА зоной, лаунж зону, открытую и&nbsp;закрытую террасы, а&nbsp;также техническое помещение под бассейном и&nbsp;навес для авто.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Фото до&nbsp;реконструкции</h2>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/before/01_tarasovo.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/before/02_tarasovo.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/before/03_tarasovo.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/tarasovo_interier/before/04_tarasovo.jpg" alt="" />
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">План дома</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/13_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/13_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/14_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/14_tarasovo.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/15_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/15_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/16_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/16_tarasovo.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/17_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/17_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/18_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/18_tarasovo.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Интерьер</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/01_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/01_tarasovo.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/02_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/02_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/03_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/03_tarasovo.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/04_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/04_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/05_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/05_tarasovo.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/tarasovo_interier/06_tarasovo.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/tarasovo_interier/06_tarasovo.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/07_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/07_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/08_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/08_tarasovo.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/09_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/09_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/10_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/10_tarasovo.jpg" alt="" />
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
                      <StaticImage src="../../../images/portfolio/tarasovo_rekonstrukciya/01_tarasovo.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/tarasovo_rekonstrukciya/02_tarasovo.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Экстерьер дома</p>
                      <Link to="/portfolio/architecture/tarasovo-rekonstrukciya" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/architecture/tarasovo-rekonstrukciya" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/11_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/11_tarasovo.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/tarasovo_interier/12_tarasovo.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/tarasovo_interier/12_tarasovo.jpg" alt="" />
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

export default tarasovoInterier
