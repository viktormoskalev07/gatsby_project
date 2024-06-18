import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const moskvina = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера квартиры 180 м2, фотографии | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер квартиры который разместился на мансардном этаже."}
            location={"https://i-project.by/portfolio/interier/moskvina"}
            image={"https://i-project.by/portfolio_newsite/moskvina/01_moskvina.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дама с&nbsp;собачкой. Дизайн квартиры на&nbsp;ул.Москвина, 180м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/moskvina/01_moskvina.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/moskvina/01_moskvina.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_5" title="Спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_6" title="Детская комната" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_7" title="Прихожая" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_8" title="Коридор с&nbsp;лестницей" /></li>
                <li><AnchorLink to="/portfolio/interier/moskvina/#anchor_9" title="Санузлы" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2014</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/moskvina/16_moskvina.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/moskvina/16_moskvina.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/moskvina/10_moskvina.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/moskvina/10_moskvina.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/moskvina/13_moskvina.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/moskvina/13_moskvina.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Квартира находится на&nbsp;мансардном этаже, что потребовало нестандартных решений в&nbsp;процессе создания интерьера.</p>
                  <p class="content_task_p">Например, скошенный потолок позволил разместить над санузлами дополнительное помещение, попасть в&nbsp;которое можно попасть по&nbsp;лестнице. Чтобы добавить ему естественного освещения, в&nbsp;крыше пришлось проделать дополнительно окно. Притом все эти изменения мы&nbsp; <Link to="/uslugi/soglasovanie" className="link">согласовали</Link>и&nbsp;внесли в&nbsp;техпаспорт. Таким образом получилась дополнительная небольшая комната: полноценный кабинет.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/23_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/23_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/24_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/24_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <p class="content_p">Зону гостиной от&nbsp;входной зоны отделяет стенка с&nbsp;телевизором&nbsp;&mdash; универсальное решение для максимального использования пространства. Под телевизором со&nbsp;стороны гостиной есть место для аппаратуры, а&nbsp;над телевизором уже со&nbsp;стороны гостиной&nbsp;&mdash; шкаф для хранения одежды.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/02_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/02_moskvina.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/03_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/03_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/05_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/05_moskvina.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/14_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/14_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/06_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/06_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <p class="content_p">Пожелание заказчика&nbsp;&mdash; полностью изолированная кухня с&nbsp;небольшой буферной зоной, отделяющей ее&nbsp;от&nbsp;гостиной. Потолки здесь тоже скошенные, с&nbsp;окнами, что было необходимо учесть в&nbsp;интерьере.</p>
                <p class="content_p">В&nbsp;квартире есть своя топочная. Используется приточно-вытяжная система вентиляции.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/15_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/15_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/16_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/16_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Спальня</h2>
                <p class="content_p">Все спальни отделены от&nbsp;общей зоны с&nbsp;помощью холла, чтобы создать дополнительную шумоизоляцию. Это тоже было одним из&nbsp;пожеланий заказчика.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/18_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/18_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Детская комната</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/20_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/20_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_7">Прихожая</h2>
                <p class="content_p">Для того, чтобы отделить общую зону от&nbsp;прихожей используется шкаф и&nbsp;шторы. Этот прием позволяет зонировать пространство, не&nbsp;загромождая его и&nbsp;не&nbsp;теряя функциональности.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/08_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/08_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/04_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/04_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_8">Коридор с&nbsp;лестницей</h2>
                <p class="content_p">В&nbsp;коридоре размещается двухслойный стеллаж: каркас из&nbsp;МДФ, в&nbsp;который монтируются вкладыши из&nbsp;шпона. Лестница, под которой находится несколько небольших отсеков для хранения и&nbsp;домик для собачки, в&nbsp;сочетании со&nbsp;стеллажом добавляют интерьеру индивидуальности.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/11_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/11_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/12_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/12_moskvina.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_9">Санузлы</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/21_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/21_moskvina.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/moskvina/22_moskvina.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/moskvina/22_moskvina.jpg" alt="" />
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

export default moskvina
