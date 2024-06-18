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

const simpleHouse = () => {
  return (
    <Layout>
      <Seo  title={"Обычный дом 250 м2, фото | I-PROJECT"} description={"Студия дизайна и архитектуры Александра Игнатьева спроектировала обычный дом в Минской области."}
            location={"https://i-project.by/portfolio/interier/simple-house"}
            image={"https://i-project.by/portfolio_newsite/simple_house/01_simple_house.webp"}/>
      <Fancybox options={{ infinite: false }}>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера обычного дома, 250&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/simple_house/02_simple_house.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/simple_house/02_simple_house.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_2" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_3" title="Гостиная, совмещенная с&nbsp;кухней" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_4" title="Лестница на&nbsp;второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_5" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_6" title="Зона отдыха на&nbsp;втором этаже" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_7" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/simple-house/#anchor_8" title="Гардеробная" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2021</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/simple_house/01_simple_house.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/simple_house/01_simple_house.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/simple_house/03_simple_house.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/simple_house/03_simple_house.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/simple_house/04_simple_house.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/simple_house/04_simple_house.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Отправной точкой в&nbsp;проекте стал обычный двухэтажный каркасный дом со&nbsp;скатной крышей. Внутреннее пространство дома требовалось организовать таким образом, чтобы заказчикам было предельно удобно и&nbsp;комфортно в&nbsp;повседневной жизни.</p>
                  <p class="content_task_p">Перед нами стояла задача сделать комфортный и&nbsp;рациональный интерьер для семьи с&nbsp;двумя детьми.</p>
                </div>
              </div>
              <div class="content_images">
                <div class="content_text">
                  <p class="content_p">Довольно часто бывает так, что человек покупает участок и&nbsp;строит на&nbsp;нем &laquo;какой-нибудь&raquo; дом, а&nbsp;потом задумывается над тем, чтобы сделать в&nbsp;нем интерьер.</p>
                  <p class="content_p">Мы&nbsp;всегда призываем к&nbsp;тому, чтобы наши клиенты обращались к&nbsp;услугам архитектора/дизайнера прежде, чем возведут строение, но&nbsp;в&nbsp;реальности часто бывает и&nbsp;наоборот. Больше половины своих интерьеров мы&nbsp;создали в&nbsp;обычных домах, построенных по&nbsp;простым типовым проектам, а&nbsp;иногда и&nbsp;вовсе без проекта. Наша задача&nbsp;&mdash; сделать все, что от&nbsp;нас зависит, для преображения внутреннего пространства.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/18_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/18_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/19_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/19_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Все пространство в&nbsp;доме организовано рационально и&nbsp;функционально. Для каждого предусмотрено личное пространство.</p>
                <p class="content_p"><b>Цветовая гамма:</b> сочетание сдержанных нейтральных оттенков с&nbsp;умеренными яркими акцентами на&nbsp;первом этаже и&nbsp;смелых насыщенных цветовых решений на&nbsp;втором этаже.</p>
                <h2 class="content_h2" id="anchor_3">Гостиная, совмещенная с&nbsp;кухней</h2>
                <p class="content_p">На&nbsp;первом этаже традиционно разместилась совмещенная зона кухни, столовой и&nbsp;гостинной, а&nbsp;также гостевая спальня. Барная стойка кухни&nbsp;&mdash; полуостровная, большой обеденный стол. Рабочее пространство расположено у&nbsp;окна, что позволяет готовить при естественном <Link to="/articles/lighting" className="link" target="_blank">освещении</Link>.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/05_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/05_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/08_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/08_simple_house.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/simple_house/pattern.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/06_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/06_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/07_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/07_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Гостиная получилась уютной. Стоит обратить внимание на&nbsp;расположение поворотного дивана и&nbsp;диагонального камина. Они &laquo;поддерживают&raquo; друг друга на&nbsp;плане своими формами. Такое расположение камина (диагональное) позволило избежать его &laquo;конфликта&raquo; с&nbsp;окном и&nbsp;телевизором.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/03_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/03_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Лестница на&nbsp;второй этаж</h2>
                <p class="content_p">На&nbsp;первом этаже также есть еще одна спальная комната, гостевая, что очень удобно, а&nbsp;также гардеробная, санузел и&nbsp;душевая. Входная зона смежная с&nbsp;хозяйственными помещениями&nbsp;&mdash; топочной.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/09_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/09_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Для пола второго этажа выбрали дубовую паркетную доску. Тип укладки&nbsp;&mdash; французская ель. На&nbsp;полу первого этажа&nbsp;&mdash; плитка, которая выглядит точно так&nbsp;же как и&nbsp;доска на&nbsp;втором. Под ней, как и&nbsp;в&nbsp;большинстве современных домов, проведен водный обогрев.</p>
                <p class="content_p">Цветовая гамма двух этажей отличается. Первый&nbsp;&mdash; выполнен в&nbsp;сдержанных <Link to="/articles/beliy-interier" className="link" target="_blank">светлых оттенках</Link>. Есть акценты в&nbsp;виде облицовки камина, картин, мелких предметов интерьера. Второй&nbsp;&mdash; кардинально другой. Здесь использованы смелые цветовые сочетания. Объединены оба этажа плотно-бирюзовой стеной вдоль лестницы.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/10_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/10_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Пространство получилось открытым, не&nbsp;перегруженным, лаконичным. Благодаря отсутствию стен, лестница, ведущая на&nbsp;второй этаж, хорошо освещена. Над лестницей мы&nbsp;использовали акцентные оригинальные светильники &laquo;CENTRSVET&raquo;</p>
                <h2 class="content_h2" id="anchor_5">Второй этаж</h2>
                <p class="content_p">Наличие <Link to="/articles/krovlya" className="link">скатной крыши</Link> предполагает особо тщательную проработку планировки второго этажа, так как за&nbsp;счет конструкции крыши, внутреннее пространство мансардного этажа имеет свои особенности: скат ограничивает использование пространства сверху.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/20_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/20_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/21_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/21_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_6">Зона отдыха на&nbsp;втором этаже</h2>
                <p class="content_p">Также на&nbsp;втором этаже удалось организовать лаунж-зону. Задумка была сделать это пространство общим, где семья может проводить время вместе: пообщаться, поиграть в&nbsp;настольные игры в&nbsp;течение дня или перед сном.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/12_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/12_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/11_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/11_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_7">Мастер-спальня</h2>
                <p class="content_p">Поскольку проект разрабатывался для семьи с&nbsp;детьми, на&nbsp;втором этаже мы&nbsp;организовали три спальных комнаты: хозяйскую и&nbsp;две детских. При хозяйской спальне есть свой санузел, а&nbsp;для детских&nbsp;&mdash; один на&nbsp;двоих, зато в&nbsp;каждой комнате есть собственная гардеробная и&nbsp;рабочее место. Важно было создать личное пространство для каждого.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/17_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/17_simple_house.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/16_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/16_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/14_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/14_simple_house.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/15_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/15_simple_house.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Гардеробная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/simple_house/13_simple_house.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/simple_house/13_simple_house.jpg" alt="" />
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

export default simpleHouse