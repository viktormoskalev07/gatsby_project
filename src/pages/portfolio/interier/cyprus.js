import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const cyprus = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера и экстерьера дома на Кипре, 1000 м2 | I-PROJECT"} description={"Дом находится на берегу моря в городе Лимассол, Кипр. Интерьер дома выполнен в спокойных тонах, преоблажает бежевые оттенки. Трехэтажный дом вмещает в себя мастер-спальни, кабинет, детские комнаты, комнаты отдоха и объединенное пространство кухни, столовой и гостиной."}
            location={"https://i-project.by/portfolio/interier/cyprus"}
            image={"https://i-project.by/portfolio_newsite/cyprus/01_cyprus.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дом на&nbsp;Кипре. Интерьер + Экстерьер, 1000&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/cyprus/01_cyprus.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/cyprus/01_cyprus.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_2" title="Экстерьер дома" /></li>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_3" title="Процесс реализации" /></li>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_4" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_5" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/cyprus/#anchor_6" title="Минус первый этаж" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2023</span></p>
                <p class="project_info_p">Локация: <span>Лимассол, Кипр</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/cyprus/06_cyprus.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cyprus/06_cyprus.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/cyprus/04_cyprus.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cyprus/04_cyprus.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/cyprus/17_cyprus.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/cyprus/17_cyprus.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дом расположен на&nbsp;склоне горы и&nbsp;имеет вид на&nbsp;море из&nbsp;всех помещений через панорамные окна. Мы&nbsp;разработали интерьерные решения, проект реконструкции фасадов и&nbsp;элементы благоустройства. Кипр&nbsp;&mdash; это обилие солнца в&nbsp;течение всего года, море, много песка и&nbsp;соли, живописные горы, в&nbsp;которые врезаются жилые дома, и&nbsp;английские нормы проектирования. Все эти моменты учитывались в&nbsp;работе над проектом.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Экстерьер дома</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/02_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/02_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/03_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/03_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/04_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/04_cyprus.jpg" alt="" />
                  </a> 
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Процесс реализации</h2>
                <div class="content_images_two_right_narrow">
                  <StaticImage src="../../../images/portfolio/cyprus/before/01_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cyprus/before/02_before.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/cyprus/before/03_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cyprus/before/04_before.jpg" alt="" />
                </div>
                <div class="content_images_three">
                  <StaticImage src="../../../images/portfolio/cyprus/before/05_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cyprus/before/06_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/cyprus/before/07_before.jpg" alt="" />
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Первый этаж</h2>
                <p class="content_p">Этажи дома слоями спускаются к&nbsp;морю. На&nbsp;первом&nbsp;&mdash; гостиная, столовая и&nbsp;кухня. Из&nbsp;всех помещений первого этажа можно выйти на&nbsp;большую террасу с&nbsp;бассейном. Терраса делится на&nbsp;зоны активного отдыха, спокойного отдыха, приема пищи; имеет свою летнюю кухню и&nbsp;спуск на&nbsp;нижние уровни.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/43_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/43_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_3">Гостиная, совмещенная с&nbsp;кухней-столовой</h2>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://i-project.by/portfolio_newsite/cyprus/05_cyprus.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/cyprus/05_cyprus.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/06_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/06_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/07_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/07_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/08_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/08_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/09_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/09_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="rewards">
                  <div class="reward_item rewards_white">
                    <StaticImage src="../../../images/rewards/reward_16.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Второе место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Проект&raquo;, в&nbsp;номинации &laquo;Интерьеры жилых помещений&raquo;. За&nbsp;реализацию проекта &laquo;Дом на&nbsp;Кипре. Интерьер&raquo;.</p>
                  </div>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/10_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/10_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/11_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/11_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/12_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/12_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/13_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/13_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/14_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/14_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/15_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/15_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/16_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/16_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Второй этаж</h2>
                <p class="content_p">На&nbsp;втором этаже&nbsp;&mdash; мастер спальня, кабинет и&nbsp;две детских комнаты.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/44_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/44_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Хозяйская мастер-спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/17_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/17_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/18_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/18_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/19_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/19_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузел при мастер-спальне</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/20_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/20_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/21_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/21_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/22_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/22_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Кабинет</h2>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/23_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/23_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/24_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/24_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Детские комнаты</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/25_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/25_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/26_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/26_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/27_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/27_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/28_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/28_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://i-project.by/portfolio_newsite/cyprus/29_cyprus.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/cyprus/29_cyprus.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/30_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/30_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/31_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/31_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/32_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/32_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/33_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/33_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_6">Минус первый этаж</h2>
                <p class="content_p">На&nbsp;минус первом уровне разместилась СПА зона с&nbsp;комнатой отдыха, из&nbsp;которой можно выйти на&nbsp;улицу и&nbsp;подняться в&nbsp;бассейн, а&nbsp;также гостевые апартаменты (две спальни со&nbsp;своими мини кухнями и&nbsp;уборными). Еще ниже&nbsp;&mdash; технические и&nbsp;подсобные помещения в&nbsp;двух уровнях. Между этажами курсирует лифт. Помимо этого, имеются связи через внутреннюю и&nbsp;наружные уличные лестницы.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/45_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/45_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Комната отдыха</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/34_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/34_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/35_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/35_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Гостевая спальня</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/36_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/36_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/37_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/37_cyprus.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Гостевая спальня</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/38_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/38_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/39_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/39_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/40_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/40_cyprus.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/41_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/41_cyprus.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/cyprus/42_cyprus.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/cyprus/42_cyprus.jpg" alt="" />
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

export default cyprus