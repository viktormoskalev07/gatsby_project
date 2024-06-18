import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/storojevskaya/03_storojevskaya.jpg"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const storojevskaya = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера квартиры 130 м2, фото | I-PROJECT"} description={"Фото интерьера на ул. Сторожевская. Интерьер получил первое место на Республиканском конкурсе дизайнеров частного интерьера «Профессиональный интерьер» в 2016."}
            location={"https://i-project.by/portfolio/interier/storojevskaya"}
            image={"https://i-project.by/portfolio_newsite/storojevskaya/01_storojevskaya.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={'start=8'}
              image={thumbnail}
              title={"Дизайн интерьера квартиры на ул.Сторожовская"}
              embed={'6GB79vo1bZA'}>
              <StaticImage src={'../../../images/portfolio/storojevskaya/03_storojevskaya.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_3" title="Гостиная, совмещанная со&nbsp;столовой" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_5" title="Прихожая" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_6" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/storojevskaya/#anchor_7" title="Санузел" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2015</span></p>
                <p class="project_info_p">Локация: <span>ЖК&nbsp;&laquo;У&nbsp;Троицкого&raquo;, Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/storojevskaya/09_storojevskaya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/storojevskaya/09_storojevskaya.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/storojevskaya/27_storojevskaya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/storojevskaya/27_storojevskaya.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/storojevskaya/30_storojevskaya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/storojevskaya/30_storojevskaya.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Реализуя этот проект, мы&nbsp;выбирали довольно смелые и&nbsp;оригинальные решения, которые позволили создать интерьер, идеально отражающий характер владельца.</p>
                  <p class="content_task_p">Нашей задачей было создать интерьер, который будет соответствовать стилю жизни заказчика.</p>
                  <p class="content_task_p">Заказчик: молодой парень, ведущий активный образ жизни и&nbsp;любящий проводить время в&nbsp;кругу друзей.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/38_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/38_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/39_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/39_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_3">Гостиная, совмещанная со&nbsp;столовой</h2>
                <p class="content_p">Реализуя этот проект, мы&nbsp;выбирали довольно смелые и&nbsp;оригинальные решения, которые позволили создать интерьер, идеально отражающий характер владельца.</p>
                <p class="content_p">Пространство квартиры было зонировано следующим образом:</p>
                <ul class="content_list">
                  <li>1. кухня-столовая, совмещенная с&nbsp;видовой гостиной (при этой зоне имеется свой санузел);</li>
                  <li>2. спальня, совмещенная с&nbsp;эффектной ванной комнатой/санузлом;</li>
                  <li>3. прихожая, которая соединяет и&nbsp;разграничивают зоны 1&nbsp;и&nbsp;2.</li>
                </ul>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/01_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/01_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/03_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/03_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/06_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/06_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">В&nbsp;гостиной организовали выразительную ТВ-зону с&nbsp;большим и&nbsp;очень удобным мягким тканевым диваном и&nbsp;двумя кожаными креслами. Обеденный стол разместили таким образом, чтобы для участников трапезы также был доступен просмотр ТВ-программ.</p>
                <p class="content_p">Интерьер достаточно сдержанный, но&nbsp;с&nbsp;яркими акцентными элементами. Так, например, журнальные столики&nbsp;&mdash; это ни&nbsp;что иное, как шлифованные пни. Выполнены они из&nbsp;натурального, цельного, химически необработанного дерева ценной породы. На&nbsp;фоне идеально выверенной геометрии окружающего пространства они появляются неожиданно, но&nbsp;органично.</p>
                <p class="content_p">Мебель для ТВ-зоны полностью авторская работа. Разрабатывалась по&nbsp;проекту нашей студии.</p>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/storojevskaya/02_storojevskaya.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/storojevskaya/02_storojevskaya.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <p class="content_p">Поскольку вид из&nbsp;окон выходит на&nbsp;реку и&nbsp;старый город, мы&nbsp;решили отказаться от&nbsp;портьер в&nbsp;пользу легких гардин из&nbsp;металлической нити, и&nbsp;римских штор на&nbsp;электроуправлении.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/09_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/09_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/16_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/16_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/15_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/15_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/10_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/10_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/12_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/12_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/14_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/14_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Чтобы усилить вау-эффект, мы&nbsp;объединили балкон с&nbsp;пространством гостиной и&nbsp;разместили там барную стойку. Расположившись за&nbsp;ней можно наблюдать по-настоящему захватывающие виды на&nbsp;город.</p>
              </div>
              <CalculatorLink />
              <div class="rewards">
                <div class="reward_item rewards_white">
                  <StaticImage src="../../../images/rewards/reward_4.jpg" alt="" class="reward_image"/>
                  <p class="reward_text">1&nbsp;место на&nbsp;Республиканском триеннале дизайнеров частного интерьера &laquo;Профессиональный интерьер&raquo; за&nbsp;2014, 2015, 2016&nbsp;гг. Конкурс проводится при поддержке Министерства архитектуры и&nbsp;строительства и&nbsp;посольства Италии в&nbsp;Республике Беларусь. Работы оценивало авторитетное международное жюри из&nbsp;7&nbsp;стран: Беларуси, Германии, Испании, Италии, Латвии, Литвы, России.</p>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_4">Кухня</h2>
              <div class="content_text">
                <p class="content_p">Кухня лаконичная, мужская, с&nbsp;барной стойкой, на&nbsp;которую вынесена варочная поверхность. Особенность кухни&nbsp;&mdash; столешница, выполненная из&nbsp;закаленного стекла со&nbsp;специальным химическим травлением, которое делает ее&nbsp;практичной и&nbsp;стойкой к&nbsp;царапинам.</p>
              </div>
              <div class="content_images">
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/13_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/13_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/08_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/08_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/11_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/11_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Прихожая</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/18_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/18_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_6">Мастер-спальня</h2>
                <p class="content_p">На&nbsp;полу лежит итальянская половая доска ручной работы. В&nbsp;целом, в&nbsp;интерьере задействованы исключительно натуральные материалы.</p>
                <p class="content_p">Особого внимания заслуживает просторная спальня с&nbsp;санузлом.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/27_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/27_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/21_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/21_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Освещение</h2>
                <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                  <div slot="first" width="100%">
                    <StaticImage src="../../../images/portfolio/storojevskaya/24_storojevskaya.jpg" alt="" />
                  </div>
                  <div slot="second" width="100%">
                    <StaticImage src="../../../images/portfolio/storojevskaya/22_storojevskaya.jpg" alt="" />
                  </div>
                </ImgComparisonSlider>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/25_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/25_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/26_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/26_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/28_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/28_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/29_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/29_storojevskaya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_7">Санузел</h2>
                <p class="content_p">Для санузла было использовано неординарное и&nbsp;смелое решение с&nbsp;перчинкой: угловое тонированное стекло, отделяющее ее&nbsp;от&nbsp;спальни, через которое просматривается островная ванная, установленная по&nbsp;диагонали и&nbsp;душевая с&nbsp;хромотерапией.</p>
                <p class="content_p">Со&nbsp;стороны ванной есть шторы, с&nbsp;помощью которых можно регулировать степень интимности. Благодаря такому решению и&nbsp;встроенной акустике, можно лежа в&nbsp;ванной смотреть любимый фильм.</p>
                <p class="content_p">Цветовое решение: сдержанная скандинавская палитра оттенков с&nbsp;яркими акцентами, натуральные материалы.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/36_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/36_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/31_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/31_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/33_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/33_storojevskaya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/32_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/32_storojevskaya.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/storojevskaya/35_storojevskaya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/storojevskaya/35_storojevskaya.jpg" alt="" />
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

export default storojevskaya
