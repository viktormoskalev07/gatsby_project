import React from 'react';
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const zhodino = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера дома 120 м2, фотографии | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева, разработала современный интерьер дома для небольшой современной семьи."}
            location={"https://i-project.by/portfolio/interier/zhodino"}
            image={"https://i-project.by/portfolio_newsite/zhodino/01_zhodino.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн дома в&nbsp;Жодино, 250м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/zhodino/01_zhodino.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/zhodino/01_zhodino.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/zhodino/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/zhodino/#anchor_2" title="Прихожая" /></li>
                <li><AnchorLink to="/portfolio/interier/zhodino/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/zhodino/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/zhodino/#anchor_5" title="Спальня" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2015</span></p>
                <p class="project_info_p">Локация: <span>Жодино</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/zhodino/02_zhodino.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zhodino/02_zhodino.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zhodino/08_zhodino.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zhodino/08_zhodino.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/zhodino/04_zhodino.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/zhodino/04_zhodino.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дом для небольшой семьи, где до&nbsp;реконструкции уже была своя структура. Перед дизайнером стояла задача организовать функциональное зонирование, сохранив структуру и&nbsp;несущие конструкции, а&nbsp;также создать лаконичный интерьер.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/13_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/13_zhodino.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/14_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/14_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_2">Прихожая</h2>
                <p class="content_p">На&nbsp;первом этаже во&nbsp;входной зоне расположена прихожая, совмещенная с&nbsp;тамбуром. Здесь&nbsp;же находится шкаф для одежды.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/01_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/01_zhodino.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/03_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/03_zhodino.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/07_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/07_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <p class="content_p">Общая зона&nbsp;&mdash; это кухня с&nbsp;барной стойкой, гостиная и&nbsp;столовая. В&nbsp;процессе реконструкции все, кроме несущих стен и&nbsp;вентиляционных стояков, снесли. Благодаря такому решению у&nbsp;жильцов появилась возможность свободно перемещаться по&nbsp;всему первому этажу.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/02_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/02_zhodino.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/04_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/04_zhodino.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/05_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/05_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">В&nbsp;гостиной также находится lounge-зона с&nbsp;камином, которую от&nbsp;лестницы отделяет стеллаж с&nbsp;просветами. Он&nbsp;разграничивает пространство, но&nbsp;пропускает свет.</p>
                <p class="content_p">Лестницу заменили на&nbsp;более стильную с&nbsp;просветами, которая дополняет интерьер.</p>
              </div>
              <CalculatorLink />
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/06_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/06_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2">Второй этаж</h2>
                <p class="content_p">На&nbsp;втором этаже&nbsp;&mdash; две детские, кабинет и&nbsp;один большой санузел. Проектирование одного просторного санузла вместо нескольких маленьких было пожеланием заказчика.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/15_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/15_zhodino.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/16_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/16_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Спальня</h2>
                <p class="content_p">С&nbsp;лестничной площадки можно попасть на&nbsp;промежуточный мансардный этаж со&nbsp;скошенными потолками. Здесь находится хозяйская спальня.</p>
                <p class="content_p">Особенность этой комнаты&nbsp;&mdash; четыре несущие деревянные колонны, которые необходимо было нивелировать в&nbsp;интерьере. В&nbsp;результате две из&nbsp;них находятся справа и&nbsp;слева от&nbsp;кровати, формируя своеобразный портал, а&nbsp;две&nbsp;&mdash; зашиты в&nbsp;тело гардеробной, рядом с&nbsp;которой стоит тумба с&nbsp;телевизором.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/08_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/08_zhodino.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/zhodino/10_zhodino.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/zhodino/10_zhodino.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/09_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/09_zhodino.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/11_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/11_zhodino.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/zhodino/12_zhodino.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/zhodino/12_zhodino.jpg" alt="" />
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

export default zhodino;
