import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Fancybox from "../components/fancybox.js";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { Video } from "../subitems/hompage/video"
import ProcessVideo from "../video/design_interiera.mp4"
import ProcessVideoMobile from "../video/design_interiera_mob.mp4"
import Seo from "../components/seo"

const process = () => {
  return (
    <Layout>
      <Seo  title={"Как работают над проектом в дизайн-студии | I-PROJECT"} description={"На примере квартиры показываем все 7 этапов: от проектирования до реализации."}
            location={"https://i-project.by/process"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <section>
        <div class="process_video">
          <Video  mobileSrc={ProcessVideoMobile} desktopSrc={ProcessVideo} />
          <div class="wrapper">
            <div class="process_video_text">
              <h1 class="process_video_title">Как строится работа в&nbsp;I‑PROJECT</h1>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/process/#process_1" title="Выезжаем на&nbsp;объект" /></li>
                <li><AnchorLink to="/process/#process_2" title="Обмерочные чертежи" /></li>
                <li><AnchorLink to="/process/#process_3" title="Планировочная концепция" /></li>
                <li><AnchorLink to="/process/#process_4" title="3D-визуализация" /></li>
                <li><AnchorLink to="/process/#process_5" title="Проектная документация" /></li>
                <li><AnchorLink to="/process/#process_6" title="Строительство и&nbsp;реализация" /></li>
                <li><AnchorLink to="/process/#process_7" title="Сопровождение и&nbsp;комплектация" /></li>
                <li><AnchorLink to="/process/#process_8" title="Фотографии реализованного объекта" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="content_images">
                  <h2 class="content_h2" id="process_1">Выезжаем на&nbsp;объект</h2>
                  <div class="content_text">
                    <p class="content_p">Архитектор, дизайнер выезжает на&nbsp;объект, производит фотофиксацию, осуществляет визуальную оценку и&nbsp;первичный анализ исходных планировочных и&nbsp;технических данных, видовых точек. На&nbsp;этом этапе становится понятно, понадобится&nbsp;ли замена всех окон, радиаторов, инженерных коммуникаций и&nbsp;т.п. При необходимости, если объект имеет высокую степень физического износа, заказывается техническое обследование.</p>
                  </div>
                  <StaticImage src="../images/process/process_img_1.png" alt="Как строится работа в i-project" />
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_2">Делаем обмерочные чертежи</h2>
                  <div class="content_text">
                    <p class="content_p">При подготовке к&nbsp;проектированию объекта важную роль играют обмерочные чертежи, на&nbsp;которых указывается вся информация о&nbsp;помещении. На&nbsp;выезде архитектор измеряет все стены, оконные и&nbsp;дверные проемы, колонны, балки. Фиксируются привязки сантехнических стояков, счетчиков учета тепла, электроприборов и&nbsp;т.п. Вся эта информация ложится в&nbsp;основу обмерочных чертежей: планов, разрезов, сечений и&nbsp;узлов.</p>
                  </div>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_3">Создаем несколько вариантов планировочной концепции</h2>
                  <div class="content_text">
                    <p class="content_p">После проведения подготовительных работ, описанных выше, мы&nbsp;начинаем разработку планировочной концепции. Подходим к&nbsp;делу творчески и&nbsp;с&nbsp;огоньком! Создаем столько интересных планировок, сколько потребуется, пока не&nbsp;найдем идеальное решение.</p>
                    <p class="content_p">На&nbsp;этом важном этапе учитываются все пожелания клиента с&nbsp;одной стороны, и&nbsp;технические ограничения с&nbsp;другой. Разумная и&nbsp;креативная планировочная концепция&nbsp;&mdash; залог удобного и&nbsp;красивого интерьера.</p>
                  </div>
                </div>
                <div class="content_images">
                  <div class="content_images_two">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_2.webp"
                      data-fancybox="gallery-1"
                    >
                      <StaticImage src="../images/process/process_img_2.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_3.webp"
                      data-fancybox="gallery-1"
                    >
                      <StaticImage src="../images/process/process_img_3.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                  <div class="content_images_two">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_4.webp"
                      data-fancybox="gallery-1"
                    >
                      <StaticImage src="../images/process/process_img_4.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_5.webp"
                      data-fancybox="gallery-1"
                    >
                      <StaticImage src="../images/process/process_img_5.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_4">Создаем образ интерьера в&nbsp;виде фотореалистичной 3D-визуализации</h2>
                  <div class="content_text">
                    <p class="content_p">Прежде, чем приступить к&nbsp;этому этапу, мы&nbsp;вместе с&nbsp;клиентами просматриваем примеры удачных интерьеров и(или) архитектурных объектов, разработанных как внутри нашей студии, так и&nbsp;в&nbsp;мире в&nbsp;целом. Собираем кейс понравившихся работ&nbsp;&mdash; отмечаем, что именно в&nbsp;них Вас привлекает или отталкивает. Определяемся со&nbsp;стилистическими и&nbsp;цветовыми предпочтениями. После такой подготовительной работы начинаем создавать образ Вашего интерьерного или архитектурного объекта.</p>
                    <p class="content_p">На&nbsp;этапе создания 3D-визуализации клиент первый раз увидит картинку, которая будет максимально похожа на&nbsp;его будущий дом или интерьер квартиры, дома, офиса. Для наглядности мы&nbsp;презентуем ее&nbsp;как фотореалистичное трехмерное изображение. 3D-визуализация выполняется для каждого помещения с&nbsp;разных ракурсов, с&nbsp;целью максимально реалистично показать будущий дизайн интерьера.</p>
                  </div>
                </div>
                <div class="content_images">
                  <div class="content_images_two">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_6.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_6.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_7.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_7.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                  <div class="content_images_three">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_8.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_8.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_9.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_9.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_10.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_10.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_11.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_11.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_12.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_12.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_13.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_13.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_14.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_14.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_15.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_15.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_16.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_16.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_17.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_17.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_18.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_18.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_19.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_19.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_20.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_20.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_21.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_21.jpg" alt="Как строится работа в i-project" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/process/process_img_22.webp"
                      data-fancybox="gallery-2"
                    >
                      <StaticImage src="../images/process/process_img_22.jpg" alt="Как строится работа в i-project" />
                    </a>
                  </div>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_5">Разрабатываем проектную документацию</h2>
                  <div class="content_text">
                    <p class="content_p">После согласования 3d-визуализации, архитектор приступает к&nbsp;разработке проектной документации. В&nbsp;нее входят все чертежи, необходимые для строительства объекта&nbsp;&mdash; рабочая документация. На&nbsp;основе нее прораб составляет смету объекта, в&nbsp;которой будет просчитана стоимость работ и&nbsp;черновых материалов.</p>
                  </div>
                  <StaticImage src="../images/process/process_img_23.jpg" alt="Как строится работа в i-project" />
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_6">Начинаем строительство и&nbsp;приступаем к&nbsp;реализации</h2>
                  <div class="content_text">
                    <p class="content_p">В&nbsp;зависимости от&nbsp;первоначального состояния и&nbsp;особенностей вашего объекта или наших идей, иногда необходимо выполнить перепланировку, согласованную с&nbsp;гос.органами. После получения всех разрешений, если такие понадобятся, мы&nbsp;начинаем строительные работы.</p>
                  </div>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_7">Сопровождаем строительство и&nbsp;комплектуем объект</h2>
                  <div class="content_text">
                    <p class="content_p">Пока на&nbsp;объекте ведутся строительные работы, мы&nbsp;занимаемся <Link to="/uslugi/komplektaciya-obekta" className="link">комплектацией объекта</Link>. Она включает в&nbsp;себя поиск и&nbsp;закупку всех материалов, оборудования для воплощения дизайн проекта. Согласование поставок материалов с&nbsp;графиком строительных работ. Клиент может быть уверен, что его интерьер получиться такой&nbsp;же, как в&nbsp;3D-визуализации или лучше.</p>
                    <p class="content_p">Услуга комплектации включает в&nbsp;себя регулярные посещения ведущих салонов Минска с&nbsp;экспозицией чистовых отделочных материалов, мебели, инженерного, сантехнического и&nbsp;электрического оборудования, которые будут использованы для реализации вашего проекта.</p>
                    <p class="content_p">Салоны, с&nbsp;которыми мы&nbsp;работаем, являются первыми поставщиками или производителями продукции. С&nbsp;нами гарантированно будут работать самые опытные специалисты, совместно с&nbsp;которыми мы&nbsp;проработаем все детали. Для вас будут предложены лучшие условия. Наши основные партнеры:</p>
                  </div>
                  <SimpleBar class="process_gallery" forceVisible="y" autoHide={false}>
                    <StaticImage src="../images/process/process_gallery_1.png" alt="Кухни Porto-porto. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_2.png" alt="Центр интерьерных решений Domani. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_3.png" alt="Салон межкомнатных дверей 2 бобра. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_4.png" alt="Мебель Megafort. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_5.png" alt="Салон Центрсвет. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_6.png" alt="Остекление Archiglass. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_7.png" alt="Плитка и сантехника Домино. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_8.png" alt="Салон керамической плитки FSN Gallery. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_9.png" alt="Мебель Furman. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_10.png" alt="Розетки Gira. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_11.png" alt="Обои Krea. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_12.png" alt="Салон межкомнатных дверей Lazio. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_13.png" alt="Салон декоративной штукатурки и акриловых красок Oikos. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_14.png" alt="Салон напольных покрытий и дверей Openini. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_15.png" alt="Салон дизайнерской мебели, светильников и аксессуаров Rooms. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_16.png" alt="Салон-студия Viridian. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_17.png" alt="Деревянные окна Vithouse. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_18.png" alt="Мультибрендовый салон светильников и декора Luminoso. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_19.png" alt="Салон натурального камня Kameya. Партнер дизайн-студии i-project" class="process_gallery_img" />
                    <StaticImage src="../images/process/process_gallery_20.png" alt="Мультибрендовый салон керамической плитки, сантехники, мебели, посуды и подарков Skvirel. Партнер дизайн-студии i-project" class="process_gallery_img" />
                  </SimpleBar>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="process_8">Фотографии реализованного объекта</h2>
                  <div class="content_text">
                    <p class="content_p">Наша команда всегда доводит задуманное до&nbsp;конца, поэтому в&nbsp;нашем портфолио вы&nbsp;увидите десятки <Link to="/portfolio/realize" className="link">реализованных проектов</Link>. В&nbsp;этом разделе вы&nbsp;увидите настоящие фото и&nbsp;видео объектов с&nbsp;описанием.</p>
                  </div>
                </div>
                <div class="content_images">
                  <div class="content_images_two">
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/01_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/01_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/02_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/02_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                  </div>
                  <div class="content_images_three">
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/15_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/15_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/03_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/03_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/12_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/12_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/11_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/11_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/23_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/23_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/09_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/09_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/05_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/05_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/20_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/20_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/19_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/19_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/14_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/14_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/07_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/07_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                  </div>
                  <div class="content_images_four">
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/26_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/26_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/06_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/06_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/16_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/16_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                    <a
                      href="https://i-project.by/portfolio_newsite/d3/24_d3.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../images/portfolio/d3/24_d3.jpg" alt="Дизайн квартиры в жилом комплексе «D3», Минск" />
                    </a>
                  </div>
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
      </section>
    </Layout>
      
    
  )
}

export default process