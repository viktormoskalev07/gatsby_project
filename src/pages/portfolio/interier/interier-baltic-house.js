import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/baltic_house/interior/01_baltic_home_interior.jpg"
import Seo from "../../../components/seo"

const interierBalticHouse = () => {
  return (
    <Layout>
      <Seo  title={"Интерьер дома с Балтийским характером 500м2, фото | I-PROJECT"} description={"В интерьере присутствует большой световой оконный колодец в крыше, бассейн на втором этаже. Дом построен по последним стандартам энергосбережения и экологичности."}
            location={"https://i-project.by/portfolio/interier/interier-baltic-house"}
            image={"https://i-project.by/portfolio_newsite/baltic_house/interior/01_baltic_home_interior.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дом с&nbsp;балтийским характером. Интерьер, 500&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=9"}
              image={thumbnail}
              title={"Дом с&nbsp;балтийским характером. Интерьер"}
              embed={'qT_tsEeFD-s'}>
              <StaticImage src={'../../../images/portfolio/baltic_house/interior/01_baltic_home_interior.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_2" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_3" title="Обеденная зона" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_5" title="Экстерьер" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_6" title="Бассейн" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_7" title="Спальни" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-baltic-house/#anchor_8" title="Холл второго этажа" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2017</span></p>
                <p class="project_info_p">Локация: <span>Беларусь</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/baltic_house/interior/03_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/03_baltic_home_interior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/baltic_house/interior/22_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/22_baltic_home_interior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/baltic_house/interior/08_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/08_baltic_home_interior.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Дом рассчитан на&nbsp;семью из&nbsp;трех человек, но&nbsp;здесь может комфортно разместиться и&nbsp;большее количество людей (гостей), при необходимости.</p>
                </div>
              </div>
              <div class="content_images">
                <div class="content_text">
                  <p class="content_p">Инженерное обеспечение дома выполнено по&nbsp;самым современным стандартам энергосбережения и&nbsp;экологичности. Используется система &laquo;умный дом&raquo; с&nbsp;автоматизированным управлением климатом, вентиляцией и&nbsp;освещением. На&nbsp;крыше расположен комплект солнечных батарей, горячая вода для дома частично нагревается в&nbsp;солнечном коллекторе, что позволяет сберегать до&nbsp;70% энергии.</p>
                  <p class="content_p">Планировочное решение почти не&nbsp;затронуло несущие стены. Ключевые преобразования заключались в&nbsp;грамотном функциональном зонировании, распределении и&nbsp;наполнении помещений.</p>
                  <p class="content_p">В&nbsp;интерьере используются те&nbsp;же цвета, что и&nbsp;на&nbsp;фасаде&nbsp;&mdash; оттенки серого, белого, различных пород дерева. Пол&nbsp;&mdash; доска из&nbsp;европейского ореха с&nbsp;ручной обработкой поверхности. Цвет проникает в&nbsp;интерьер через большие фасадные окна вместе с&nbsp;озелененным и&nbsp;благоустроенным пространством участка. Ощущение присутствия природы в&nbsp;интерьере усиливает окно светового колодца в&nbsp;крыше над лестницей, через которое в&nbsp;центр дома попадает дневной свет и&nbsp;небесная синева.</p>
                </div>
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_3.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Дом с&nbsp;Балтийским характером&raquo;.</p>
                  </div>
                </div>
              </div>
              <h2 class="content_h2">Первый этаж</h2>
              <div class="content_text">
                <p class="content_p">На&nbsp;первом этаже находятся гостиная, кухня, обеденная зона, рабочий кабинет, кладовая, прихожая, ванная комната и&nbsp;санузел.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/42_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/42_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/43_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/43_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_2">Гостиная</h2>
              <div class="content_text">
                <p class="content_p">Особую атмосферу гостиной придает камин на&nbsp;дровах, в&nbsp;сторону которого развернут один из&nbsp;диванов. Здесь&nbsp;же находится и&nbsp;телевизор, но&nbsp;акцент с&nbsp;него смещен в&nbsp;сторону пейзажа за&nbsp;окном и&nbsp;камина. В&nbsp;отделке стен этой зоны использованы выбеленные сланцевые плиты с&nbsp;красивой природной фактурой.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/01_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/01_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/07_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/07_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/02_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/02_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <figure class="before">
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/1.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/03_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/03_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_3">Обеденная зона</h2>
              <div class="content_text">
                <p class="content_p">Обеденную зону от&nbsp;кухни отделяет ажурная перемещаемая перегородка, выполненная по&nbsp;специальному заказу. Она позволяет аккуратно зонировать пространство и&nbsp;оживляет интерьер.</p>
                <p class="content_p">Оригинальный цветовой акцент&nbsp;&mdash; светильники над столом, выполненные из&nbsp;муранского стекла, также, как и&nbsp;в&nbsp;гостиной. Столовая группа стоит не&nbsp;на&nbsp;&laquo;голом&raquo; полу, а&nbsp;на&nbsp;ковре, что помимо эстетической составляющей несет еще и&nbsp;функцию защиты доски пола от&nbsp;неизбежных царапин, оставляемых стульями.</p>
              </div>
              <div class="content_images">
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/3.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white_bcg">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/04_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/08_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/08_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/06_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/06_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_4">Кухня</h2>
              <div class="content_text">
                <p class="content_p">При оформлении кухни использована динамичная композиция: часть гарнитура парит в&nbsp;воздухе не&nbsp;соприкасаясь с&nbsp;полом. Основные фасады выполнены из&nbsp;керамики, устойчивой к&nbsp;разного рода повреждениям и&nbsp;царапинам.</p>
                <p class="content_p">Отдельный блок&nbsp;&mdash; шкафы-колонны со&nbsp;встроенными в&nbsp;них холодильниками и&nbsp;большим духовым шкафом шириной в&nbsp;90&nbsp;см.</p>
                <p class="content_p">Интерьер кухни дополняет барная стойка, на&nbsp;которой находится варочная поверхность.</p>
              </div>
              <div class="content_images">
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before before_white">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/4.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/05_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/09_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/09_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before before_white">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/5.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after after_white">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/10_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
              <h2 class="content_h2">Санузел</h2>
              <div class="content_text">
                <p class="content_p">Лаконичное светлое помещение с&nbsp;необычным умывальником.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/38_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/38_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/39_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/39_baltic_home_interior.jpg" alt="" />
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
                      <StaticImage src="../../../images/portfolio/baltic_house/exterior/05_baltic_home_exterior.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/baltic_house/exterior/02_baltic_home_exterior.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Экстерьер дома</p>
                      <Link to="/portfolio/architecture/exterier-baltic-house" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/architecture/exterier-baltic-house" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <h2 class="content_h2">Второй этаж</h2>
              <div class="content_text">
                <p class="content_p">На&nbsp;втором этаже находятся две спальни, два санузла, гардеробная бассейн и&nbsp;зона отдыха.</p>
              </div>
              <div class="content_images">
                
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/44_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/44_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/45_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/45_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Бассейн на&nbsp;2-м этаже</h2>
                <div class="content_text">
                  <p class="content_p">Бассейн на&nbsp;втором этаже органично интегрирован в&nbsp;общее пространство вместе с&nbsp;центральным холлом и&nbsp;зоной отдыха. Мокрая зона отделена от&nbsp;сухой с&nbsp;помощью прозрачной стеклянной перегородки. Бассейном очень удобно пользоваться&nbsp;&mdash; можно начинать с&nbsp;этого каждое утро, т.к.&nbsp;он&nbsp;расположен на&nbsp;том&nbsp;же этаже, что и&nbsp;спальни. При бассейне есть своя парная и&nbsp;санузел.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/baltic_house/interior/20_baltic_home_interior.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/baltic_house/interior/20_baltic_home_interior.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/26_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/26_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <figure class="before">
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/2.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/22_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/22_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/27_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/27_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/23_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/23_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_7">Спальни</h2>
              <div class="content_text">
                <p class="content_p">Из&nbsp;обеих спален открывается красивый вид на&nbsp;участок. По&nbsp;тому, как в&nbsp;этих комнатах расположены телевизоры, можно сделать вывод, что хозяева дома отдают свое предпочтение не&nbsp;его просмотру, а&nbsp;шикарным пейзажам за&nbsp;окнами.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/28_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/28_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/29_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/29_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/30_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/30_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Гардеробная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/36_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/36_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2">Прихожая с&nbsp;лестницей на&nbsp;2-й этаж</h2>
              <div class="content_text">
                <p class="content_p">Лестница на&nbsp;второй этаж на&nbsp;металлических косоурах выполнена с&nbsp;просветами, чтобы пространство было наполнено воздухом, цветом и&nbsp;светом, проникающим сюда через окно в&nbsp;крыше. Каждый косоур отделан МДФ-панелью. Воплощение идеи в&nbsp;жизнь потребовало значительных усилий, но&nbsp;благодаря этому холл пространство ожило и&nbsp;&laquo;зазвенело&raquo;.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/14_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/14_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/21_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/21_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/12_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/12_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/13_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/13_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/11_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/11_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="before_after">
                  <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                    <figure slot="first" width="100%" class="before">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/6.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                    <figure slot="second" width="100%" class="after">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/11_baltic_home_interior.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_8">Холл второго этажа</h2>
              <div class="content_text">
                <p class="content_p">В&nbsp;холле находится аквариум, который является одним из&nbsp;акцентов и&nbsp;отделяет холл от&nbsp;лаунж зоны, а&nbsp;прозрачные стеклянные перегородки отсекают от&nbsp;холла спа зону с&nbsp;бассейном и&nbsp;сауной.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/17_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/17_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/15_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/15_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/18_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/18_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/16_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/16_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2">Санузел</h2>
              <div class="content_text">
                <p class="content_p">На&nbsp;втором этаже находится два санузла. Один&nbsp;&mdash; с&nbsp;островной ванной, второй&nbsp;&mdash; с&nbsp;душевой кабиной. В&nbsp;обоих используются оригинальные полотенцедержатели.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/31_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/31_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/32_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/32_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/33_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/33_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/34_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/34_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/35_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/35_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">План цокольного этажа</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/46_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/46_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2">Бар</h2>
              <div class="content_text">
                <p class="content_p">В&nbsp;доме есть цокольный этаж, в&nbsp;котором расположена винотека с&nbsp;дегустационной комнатой, в&nbsp;которой помимо вина хранится коллекция сувенирных кружек. Остальную часть этажа занимают технические помещения.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/interior/37_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/37_baltic_home_interior.jpg" alt="" />
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

export default interierBalticHouse
