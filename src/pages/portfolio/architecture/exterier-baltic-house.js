import React from 'react';
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/baltic_house/exterior/01_baltic_home_exterior.jpg"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { Compliment } from "../../../subitems/compliment/compliment"
import { PartnersBalticExt } from "../../../subitems/partners/partnersBalticExt"

const exterierBalticHouse = () => {
  return (
    <Layout>
      <Seo  title={"Экстерьер дома с Балтийским характером 500 м2 | I-PROJECT"} description={"Завершили строительство дома под Минском, выполнили полную отделку всех помещений. Представлены оригинальные фото и видео."}
            location={"https://i-project.by/portfolio/architecture/exterier-baltic-house"}
            image={"https://i-project.by/portfolio_newsite/baltic_house/exterior/01_baltic_home_exterior.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={'start=8'}
              image={thumbnail}
              title={"Дом с балтийским характером. Экстерьер"}
              embed={'gXVnpRAr5p4'}>
              <StaticImage src={'../../../images/portfolio/baltic_house/exterior/01_baltic_home_exterior.jpg'} />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/exterier-baltic-house/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/exterier-baltic-house/#anchor_2" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/exterier-baltic-house/#anchor_3" title="Фасад" /></li>
                <li><AnchorLink to="/portfolio/architecture/exterier-baltic-house/#anchor_4" title="Интерьер" /></li>
                <li><AnchorLink to="/portfolio/architecture/exterier-baltic-house/#anchor_5" title="Бренды" /></li>
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
                  href="https://i-project.by/portfolio_newsite/baltic_house/exterior/01_baltic_home_exterior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images//portfolio/baltic_house/exterior/01_baltic_home_exterior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/baltic_house/exterior/05_baltic_home_exterior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images//portfolio/baltic_house/exterior/05_baltic_home_exterior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/baltic_house/exterior/07_baltic_home_exterior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images//portfolio/baltic_house/exterior/07_baltic_home_exterior.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Работа над проектом началась не&nbsp;с&nbsp;чистого листа, в&nbsp;наследство досталась прямоугольная &laquo;коробка&raquo; из&nbsp;красного кирпича. Было принято решение работать над проектом комплексно&nbsp;&mdash; создать новый, актуальный экстерьер, и&nbsp;интерьер в&nbsp;современном стиле.</p>
                </div>
              </div>
              <div class="content_images">
                <div class="content_text">
                  <p class="content_p">Проект получил название &laquo;Дом с&nbsp;балтийским характером&raquo; неслучайно. Скандинавское направление выражается не&nbsp;только через лаконичность и&nbsp;традиционную простоту форм, но&nbsp;и&nbsp;с&nbsp;помощью характерной цветовой гаммы&nbsp;&mdash; сочетания белого и&nbsp;серого цветов, дерева и&nbsp;зелени. Она используется как в&nbsp;экстерьере, так и&nbsp;в&nbsp;интерьере. Таким образом экстерьер будто перетекает в&nbsp;интерьер, и&nbsp;наоборот, они одновременно дополняют и&nbsp;раскрывают друг друга.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">План дома</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/23_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/23_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/24_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/24_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/25_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/25_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <div class="before_after">
                  <figure  class="after after_white_bcg">
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/before/1.jpg" alt="" />
                    <figcaption>Было</figcaption>
                  </figure>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_3">Фасад</h2>
              <div class="content_text">
                <p class="content_p">При <Link to="/articles/reconstruction" className="link" target="_blank">реконструкции</Link> фасадов в&nbsp;необходимых местах были добавлены солнцезащитные элементы, перголы, которые выполняют практическую и&nbsp;эстетическую функции&nbsp;&mdash; защищают от&nbsp;попадания прямых солнечных лучей и&nbsp;делают экстерьер более сложным и&nbsp;выразительным, создавая графику из&nbsp;света и&nbsp;тени на&nbsp;стенах дома.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/02_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/02_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/03_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/03_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/05_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/05_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/06_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/06_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images//rewards/reward_3.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Проект занял первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/interier/interier-baltic-house" className="link">&laquo;Дом с&nbsp;Балтийским характером&raquo;</Link>.</p>
                  </div>
                </div>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/07_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/07_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/08_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/08_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/baltic_house/exterior/08_baltic_home_exterior.webp"
                data-fancybox="gallery"
                >
                <StaticImage src="../../../images//portfolio/baltic_house/exterior/08_baltic_home_exterior.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <p class="content_p">Фасады частично оштукатурены, частично отделаны планкеном из&nbsp;натурального фасадного дерева. Вдоль одной из&nbsp;стен по&nbsp;вантовым тросам вьется виноградная лоза, придавая экстерьеру особый шарм. На&nbsp;&laquo;задний&raquo; фасад для простоты обслуживания вынесены инженерные системы.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/09_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/09_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/10_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/10_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/11_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/11_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_4">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images//portfolio/baltic_house/interior/02_baltic_home_interior.jpg" alt="" />
                      <StaticImage src="../../../images//portfolio/baltic_house/interior/22_baltic_home_interior.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Интерьер дома</p>
                      <Link to="/portfolio/interier/interier-baltic-house" className="partner_project_link">Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/interier/interier-baltic-house" className="partner_project_link_mob">Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <p class="content_p">Ограждения французских балконов выполнены из&nbsp;закаленного стекла. На&nbsp;первом этаже расположена большая терраса, защищенная от&nbsp;избыточных солнечных лучей с&nbsp;помощью пергольного навеса.</p>
                <p class="content_p">Участок имеет вытянутую форму, главный фасад раскрывается в&nbsp;направлении участка, на&nbsp;котором выполнен стильный ландшафтный дизайн, и&nbsp;соснового бора. Именно в&nbsp;этой части дома находятся самые большие окна, через которые элементы ландшафта и&nbsp;окружающей природы проникают в&nbsp;дом.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/12_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/12_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/13_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/13_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/14_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/14_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/15_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/15_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/16_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/16_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/17_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/17_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/18_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/18_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/19_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/19_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/20_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/20_baltic_home_exterior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/baltic_house/exterior/21_baltic_home_exterior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images//portfolio/baltic_house/exterior/21_baltic_home_exterior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <Compliment />
              <PartnersBalticExt />
            </div>
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
};

export default exterierBalticHouse;
