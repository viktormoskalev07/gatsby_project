import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/protos_interior/01_protos_interior.jpg"
import Seo from "../../../components/seo"

const interierProtos = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера офисов «Протос» 200 м2 | I-PROJECT"} description={"Разработали не только интерьерное, но и архитектурное решение. Представлены оригинальные фото и видео."}
            location={"https://www.i-project.by/portfolio/interier/interier-protos"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=6"}
              image={thumbnail}
              title={"Дизайн интерьера офисов «Протос»"}
              embed={'_FHzDPN9lU8'}>
              <StaticImage src={'../../../images/portfolio/protos_interior/01_protos_interior.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_2" title="Планировка" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_3" title="Кабинет директора" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_4" title="Зал заседаний" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_5" title="Переговорная" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_6" title="Экстерьер" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_7" title="Приемная" /></li>
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_8" title="Лаунж-зона с&nbsp;терассой" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
            <div class="project_info">
                <p class="project_info_p">Год: <span>2020</span></p>
                <p class="project_info_p">Локация: <span>Могилев</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_interior/03_protos_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_interior/03_protos_interior.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_interior/07_protos_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_interior/07_protos_interior.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/protos_interior/15_protos_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_interior/15_protos_interior.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Разработать <Link to="/portfolio/architecture/rekonstrukciya-protos" className="link">архитектурное</Link> и&nbsp;интерьерное решение, задействовав остов существующего здания, в&nbsp;соответствии с&nbsp;новыми потребностями и&nbsp;духом времени.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/33_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/33_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/34_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/34_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Офис до&nbsp;реконструкции</h2>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/protos_interior/before/1.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_interior/before/2.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/protos_interior/before/3.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/protos_interior/before/4.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/protos_interior/before/5.jpg" alt="" />
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Кабинет директора</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/01_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/01_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/02_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/02_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Зал заседаний</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/05_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/05_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/08_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/08_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Переговорная</h2>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/13_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/13_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/11_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/11_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/06_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/06_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/32_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/32_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_6">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/protos_reconstraction/01_protos_reconstraction.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/protos_reconstraction/02_protos_reconstraction.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Экстерьер офиса</p>
                      <Link to="/portfolio/architecture/rekonstrukciya-protos" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/architecture/rekonstrukciya-protos" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Приемная</h2>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/31_1_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/31_1_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/14_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/14_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/10_1_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/10_1_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/10_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/10_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/09_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/09_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/protos_interior/12_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/12_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images">
                  <h2 class="content_h2">Освещение</h2>
                  <div class="before_after">
                    <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                      <div slot="first" width="100%">
                        <StaticImage src="../../../images/portfolio/protos_interior/31_protos_interior.jpg" alt="" />
                      </div>
                      <div slot="second" width="100%">
                        <StaticImage src="../../../images/portfolio/protos_interior/04_protos_interior.jpg" alt="" />
                      </div>
                    </ImgComparisonSlider>
                  </div>
                </div>
                <div class="content_images">
                  <h2 class="content_h2" id="anchor_8">Лаунж-зона с&nbsp;закрытой терассой</h2>
                  <div class="content_images_two">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/19_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/19_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/20_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/20_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_two_left_narrow">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/29_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/29_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/28_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/28_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_two">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/16_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/16_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/23_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/23_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="content_images">
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_1.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Второе место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Интерьер офиса группы компаний ПРОТОС&raquo;.</p>
                  </div>
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_2.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;<Link to="/portfolio/architecture/rekonstrukciya-protos" className="link">Реконструкция административного офисного здания группы компаний ПРОТОС</Link>&raquo;.</p>
                  </div>
                </div>
              </div>
                <div class="content_images">
                  <h2 class="content_h2">Терасса</h2>
                  <div class="content_images_three_left_narrow">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/27_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/27_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/22_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/22_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/25_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/25_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_one">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/17_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/17_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_two_left_narrow">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/23_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/23_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/30_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/30_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_one">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/24_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/24_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                  <div class="content_images_two">
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/26_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/26_protos_interior.jpg" alt="" />
                    </a>
                    <a
                      href="https://www.i-project.by/portfolio_newsite/protos_interior/18_protos_interior.webp"
                      data-fancybox="gallery"
                    >
                      <StaticImage src="../../../images/portfolio/protos_interior/18_protos_interior.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default interierProtos
