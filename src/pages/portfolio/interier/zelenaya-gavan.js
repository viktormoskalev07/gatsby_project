import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const zelenayaGavan = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера дома 250 м2, фото | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный дизайн интерьера дома в Зеленой Гавани."}
            location={"https://i-project.by/portfolio/interier/zelenaya-gavan"}
            image={"https://i-project.by/portfolio_newsite/zelenaya-gavan/01_zelenaya_gavan.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Зеленая Гавань. Интерьер дома, 250м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/zelenaya_gavan/01_zelenaya_gavan.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/zelenaya_gavan/01_zelenaya_gavan.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_2" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_3" title="Совмещенная зона" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_4" title="Кабинет" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_5" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_6" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/zelenaya-gavan/#anchor_7" title="Детские комнаты" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2023</span></p>
                <p class="project_info_p">Локация: <span>Минский район</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/zelenaya_gavan/24_zelenaya_gavan.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenaya_gavan/24_zelenaya_gavan.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zelenaya_gavan/11_zelenaya_gavan.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenaya_gavan/11_zelenaya_gavan.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zelenaya_gavan/33_zelenaya_gavan.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zelenaya_gavan/33_zelenaya_gavan.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дизайн интерьера дома в Минском районе для семьи с тремя детьми.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Первый этаж. Планировка</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/20_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/20_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/21_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/21_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Совмещенная зона</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/02_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/02_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/03_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/03_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/04_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/04_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Совмещенная зона гостиной, кухни, столовой имеет выход на&nbsp;большую открытую террасу и&nbsp;участок. Вместо привычной&nbsp;ТВ зоны&nbsp;&mdash; специальный проектор, который можно смотреть не&nbsp;только в&nbsp;вечернее, но&nbsp;и&nbsp;в&nbsp;дневное время. Экран&nbsp;&mdash; звукопроницаемый, за&nbsp;ним&nbsp;&mdash; встроенные колонки. Геометрию пространства усложняет второй свет&nbsp;&mdash; одно из&nbsp;окон хозяйской спальни выходит на&nbsp;гостиную.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/05_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/05_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/06_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/06_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/07_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/07_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/08_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/08_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/09_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/09_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Материалы отделки&nbsp;&mdash; натуральные и&nbsp;практичные: фасады кухни&nbsp;&mdash; керамика, стол&nbsp;&mdash; массив дуба, гладкие белые стены и&nbsp;потолок местами перебиваются планкеном из&nbsp;лиственницы, таким&nbsp;же, как и&nbsp;на&nbsp;фасадах. Цветовая гамма&nbsp;&mdash; почти скандинавская (белый-серый-дерево), но&nbsp;с&nbsp;вкраплениями сложных теплых оттенков.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/10_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/10_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/11_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/11_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/12_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/12_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/13_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/13_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <h2 class="content_h2" id="anchor_4">Кабинет</h2>
              <div class="content_text">
                <p class="content_p">Кабинет напротив&nbsp;&mdash; темный, атмосферный.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/14_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/14_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/15_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/15_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/16_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/16_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/17_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/17_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
              <h2 class="content_h2">Комната отдыха с сауной</h2>
                <p class="content_p">Имеется небольшая сауна с&nbsp;комнатой отдыха и&nbsp;гостевой санузел, совмещенный с&nbsp;постирочной.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/18_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/18_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/19_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/19_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Второй этаж. Планировка</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/46_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/46_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/47_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/47_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_6">Хозяйская мастер-спальня</h2>
              <div class="content_text">
                <p class="content_p">Мастер-спальня не&nbsp;имеет собственной гардеробной, зато оборудована большим плательным шкафом, при ней есть свой санузел и&nbsp;балкон, а&nbsp;также внутреннее окно с&nbsp;видом на&nbsp;гостиную.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/22_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/22_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/23_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/23_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/24_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/24_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/25_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/25_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/26_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/26_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <h2 class="content_h2">Холл</h2>
              <div class="content_text">
                <p class="content_p">Из&nbsp;общего коридора предусмотрен выход на&nbsp;большую террасу.</p>
              </div>
              <div class="content_images">
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/27_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/27_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/28_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/28_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/29_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/29_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузел</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/30_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/30_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/31_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/31_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/32_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/32_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_7">Детские комнаты</h2>
              <div class="content_text">
                <p class="content_p">Три детских спальни&nbsp;&mdash; продуманы индивидуально, c&nbsp;учетом интересов своих маленьких обитателей. Каждая из&nbsp;комнат имеет спальное место, шкаф для хранения одежды, стеллаж для книг и&nbsp;рабочее место. Для детей&nbsp;&mdash; оборудован отдельный санузел.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/33_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/33_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/34_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/34_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/35_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/35_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/36_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/36_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/37_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/37_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/38_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/38_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/39_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/39_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/40_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/40_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/41_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/41_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/42_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/42_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Детский санузел</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/43_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/43_zelenaya_gavan.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/44_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/44_zelenaya_gavan.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zelenaya_gavan/45_zelenaya_gavan.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zelenaya_gavan/45_zelenaya_gavan.jpg" alt="" />
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

export default zelenayaGavan
