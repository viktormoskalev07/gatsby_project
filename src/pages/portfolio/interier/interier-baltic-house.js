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
            location={"https://www.i-project.by/portfolio/interier/interier-baltic-house"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
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
                  href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/03_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/03_baltic_home_interior.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/22_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/22_baltic_home_interior.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/08_baltic_home_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/baltic_house/interior/08_baltic_home_interior.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Через большие фасадные окна в&nbsp;интерьер дома проникает озелененное и&nbsp;благоустроенное пространство участка, на&nbsp;котором он&nbsp;расположен. Ощущение присутствия природы в&nbsp;интерьере усиливается благодаря большому световому оконному колодцу в&nbsp;крыше, через которое в&nbsp;центр дома заходит поток дневного света и&nbsp;небесная синь.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Первый этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/42_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/42_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/43_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/43_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">В&nbsp;части инженерного обеспечения дом построен в&nbsp;соответствии с&nbsp;самыми современными стандартами энергосбережения и&nbsp;экологичности. В&nbsp;нем полностью установлена автоматизированная система управления климатом, вентиляцией и&nbsp;освещением вкупе с&nbsp;солнечной электростанцией на&nbsp;крыше. Горячая вода частично нагревается в&nbsp;солнечном коллекторе. Такие решения позволяют сберегать до&nbsp;70% энергии.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/01_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/01_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/07_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/07_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/02_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/02_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <figure class="before">
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/1.jpg" alt="" />
                    <figcaption>Было</figcaption>
                  </figure>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/03_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/03_baltic_home_interior.jpg" alt="" />
                      <figcaption>Стало</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Обеденная зона</h2>
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
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/08_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/08_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/06_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/06_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
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
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/09_baltic_home_interior.webp"
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
              <div class="content_images">
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_3.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Дом с&nbsp;Балтийским характером&raquo;.</p>
                  </div>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузел</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/38_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/38_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/39_baltic_home_interior.webp"
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
                      <Link to="/portfolio/exterier-baltic-house" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/exterier-baltic-house" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <h2 class="content_h2">Второй этаж</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/44_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/44_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/45_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/45_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Бассейн на&nbsp;2-м этаже</h2>
                <div class="content_text">
                  <p class="content_p">Отдельное внимание стоит обратить на&nbsp;бассейн. Оказывается, он&nbsp;может быть и&nbsp;частью интерьера и&nbsp;для него не&nbsp;нужно выделять отдельное помещение в&nbsp;цоколе. В&nbsp;этом доме он&nbsp;находится на&nbsp;втором этаже и&nbsp;органично интегрирован в&nbsp;общее пространство вместе с&nbsp;центральным холлом и&nbsp;зоной отдыха.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/20_baltic_home_interior.webp"
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
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/26_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/26_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <figure class="before">
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/3d/2.jpg" alt="" />
                    <figcaption>Было</figcaption>
                  </figure>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/22_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white">
                      <StaticImage src="../../../images/portfolio/baltic_house/interior/22_baltic_home_interior.jpg" alt="" />
                      <figcaption>Стало</figcaption>
                    </figure>
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/27_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/27_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/23_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/23_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Спальни</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/28_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/28_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/29_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/29_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/30_baltic_home_interior.webp"
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
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/36_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/36_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Прихожая с&nbsp;лестницей на&nbsp;2-й этаж</h2>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/14_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/14_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/21_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/21_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/12_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/12_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/13_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/13_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/11_baltic_home_interior.webp"
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
              <div class="content_images">
                <h2 class="content_h2" id="anchor_8">Холл второго этажа</h2>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/17_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/17_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/15_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/15_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/18_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/18_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/16_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/16_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Санузел</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/31_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/31_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/32_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/32_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/33_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/33_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/34_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/34_baltic_home_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/35_baltic_home_interior.webp"
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
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/46_baltic_home_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/baltic_house/interior/46_baltic_home_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Бар</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/37_baltic_home_interior.webp"
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
