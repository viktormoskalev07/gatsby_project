import React from 'react';
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const domSovremeniy = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера дома 300 м2, фотографии | I-PROJECT"} description={"Студия дизайна и архитектуры I-PROJECT, разработала современный интерьер дома под Минском."}
            location={"https://i-project.by/portfolio/interier/dom-sovremeniy"}
            image={"https://i-project.by/portfolio_newsite/dom_sovremeniy/01_dom_sovremeniy.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн дома под Минском. Современный, 300м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/dom_sovremeniy/01_dom_sovremeniy.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/dom_sovremeniy/01_dom_sovremeniy.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_2" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_3" title="Обеденная зона" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_5" title="Холл" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_6" title="Коридор" /></li>
                <li><AnchorLink to="/portfolio/interier/dom-sovremeniy/#anchor_7" title="Спальня" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2014</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/dom_sovremeniy/09_dom_sovremeniy.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_sovremeniy/09_dom_sovremeniy.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/dom_sovremeniy/11_dom_sovremeniy.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_sovremeniy/11_dom_sovremeniy.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/dom_sovremeniy/18_dom_sovremeniy.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_sovremeniy/18_dom_sovremeniy.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Интерьер двухэтажного дома для небольшой современной семьи. На&nbsp;первом этаже находится кухня, обеденная зона, кабинет, гостевой санузел и&nbsp;гардеробная, в&nbsp;которую можно попасть из&nbsp;гаража. На&nbsp;втором&nbsp;&mdash; два санузла, три спальни и&nbsp;два санузла. На&nbsp;обоих этажах есть выходы на&nbsp;террасу.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/19_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/19_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/20_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/20_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_2">Гостиная</h2>
                <p class="content_p">Для оформления гостиной используются необычные материалы&nbsp;&mdash; сочетание сланца и&nbsp;мрамора. Мрамором, например, отделан каминный портал.</p>
                <p class="content_p">Центральная точка гостиной&nbsp;&mdash; стильный модульный диван Flexform, с&nbsp;которого открывается вид на&nbsp;террасу и&nbsp;участок.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/01_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/01_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/02_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/02_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/03_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/03_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_3">Обеденная зона</h2>
                <p class="content_p">Интересный прием использован для того, чтобы снивелировать колонны, которые находится между обеденной зоной и&nbsp;гостиной. Их&nbsp;интегрировали в&nbsp;стеллаж так, что они выглядят как часть мебельного гарнитура.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/04_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/04_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/05_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/05_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/06_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/06_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/07_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/07_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/08_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/08_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <p class="content_p">Кухня частично отделена от&nbsp;обеденной зоны и&nbsp;гостиной с&nbsp;помощью перегородок Rimadesio. Здесь размещается барная стойка, бытовая техника и&nbsp;вместительный кухонный гарнитур.</p>
              </div>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://i-project.by/portfolio_newsite/dom_sovremeniy/09_dom_sovremeniy.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/dom_sovremeniy/09_dom_sovremeniy.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Холл</h2>
                <p class="content_p">На&nbsp;второй этаж можно попасть через холл по&nbsp;парящей лестнице на&nbsp;металлическом косоуре.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/10_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/10_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/11_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/11_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Второй этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/21_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/21_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/22_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/22_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_6">Коридор</h2>
                <p class="content_p">Окна коридора выходят на&nbsp;террасу, через него можно попасть в&nbsp;любую из&nbsp;спален.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/12_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/12_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/13_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/13_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/14_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/14_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_7">Мастер-спальня</h2>
                <p class="content_p">Индивидуальные решения для оформления интерьера применяются и&nbsp;в&nbsp;хозяйской спальне. Так, столешница под телевизором плавно переходит в&nbsp;подвесной стол. За&nbsp;спинкой островной кровати находится вход в&nbsp;гардеробную, через которую можно попасть в&nbsp;санузел.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/15_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/15_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/16_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/16_dom_sovremeniy.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/17_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/17_dom_sovremeniy.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_sovremeniy/18_dom_sovremeniy.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_sovremeniy/18_dom_sovremeniy.jpg" alt="" />
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

export default domSovremeniy;
