import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"

const libknehta = () => {
  return (
    <Layout>
      <Seo  title={"Реконструкция здания Либкнехта 68А, 1000 м2 | I-PROJECT"} description={"Разработали проект для реконструкции здания в Минске по улице Либкнехта."}
            location={"https://i-project.by/portfolio/architecture/libknehta"}
            image={"https://i-project.by/portfolio_newsite/libknehta/01_libknehta.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Либкнехта 68А. Реконструкция. 3000м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/libknehta/01_libknehta.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/libknehta/01_libknehta.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/libknehta/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/libknehta/#anchor_2" title="План здания" /></li>
                <li><AnchorLink to="/portfolio/architecture/libknehta/#anchor_3" title="Фото до реконструкции" /></li>
                <li><AnchorLink to="/portfolio/architecture/libknehta/#anchor_4" title="Фасад" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2023</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/libknehta/07_libknehta.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/libknehta/07_libknehta.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/libknehta/06_libknehta.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/libknehta/06_libknehta.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/libknehta/04_libknehta.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/libknehta/04_libknehta.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Проект реконструкции производственного здания с&nbsp;административной частью и&nbsp;паркингом на&nbsp;ул. Карла Либкнехта в&nbsp;Минске. Проектом предусмотрена надстройка третьего этажа, перепланировка здания с&nbsp;учетом специфики современных производственных процессов с&nbsp;перспективой развития, модернизация фасадов, устройство навесов над входными группами. Прилегающую территорию оживили благоустройством и&nbsp;озеленением, создав дополнительные зоны отдыха для сотрудников.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">План здания</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/09_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/09_libknehta.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/10_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/10_libknehta.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/11_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/11_libknehta.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Фото до&nbsp;реконструкции</h2>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/libknehta/before/01_before.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/libknehta/before/02_before.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/libknehta/before/03_before.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/libknehta/before/04_before.jpg" alt="" />
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Фасад</h2>
                <p class="content_p">Существующее здание выглядело немного уставшим, но&nbsp;при этом сохраняло чистоту стилистического решения. Мы&nbsp;не&nbsp;стали кардинально менять облик застройки, но&nbsp;актуализировали ее&nbsp;за&nbsp;счет устройства вент фасадов из&nbsp;ригельной клинкерной плитки с&nbsp;включениями стекла и&nbsp;металла. Обновленное здание органично вписалось в&nbsp;окружающую застройку эпохи советского конструктивизма.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/02_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/02_libknehta.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/03_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/03_libknehta.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/04_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/04_libknehta.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/05_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/05_libknehta.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="rewards">
                <div class="reward_item rewards_white">
                  <StaticImage src="../../../images/rewards/reward_17.jpg" alt="" class="reward_image"/>
                  <p class="reward_text">Второе место на&nbsp;XXI Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV&nbsp;Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Проект&raquo;, в&nbsp;номинации &laquo;Реконнструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Реконструкция административно-производственного здания с&nbsp;паркингом в&nbsp;г.Минске по&nbsp;ул.К.Либкнехта&raquo;.</p>
                </div>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/06_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/06_libknehta.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/07_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/07_libknehta.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/libknehta/08_libknehta.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/libknehta/08_libknehta.jpg" alt="" />
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

export default libknehta
