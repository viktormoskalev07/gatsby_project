import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import { IncontentReviewProtos } from "../../../subitems/review-inproject/reviewProtos"
import  thumbnail  from  "../../../images/portfolio/protos_interior/01_protos_interior.jpg"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { ProjectVideoTrigger } from "../../../subitems/project-video-trigger"
import { Compliment } from "../../../subitems/compliment/compliment"
import { PartnersProtosInt } from "../../../subitems/partners/partnersProtosInt"

const interierProtos = () => {
  return (
    <Layout>
      <Seo  title={"Дизайн интерьера офисов «Протос» 200 м2 | I-PROJECT"} description={"Разработали не только интерьерное, но и архитектурное решение. Представлены оригинальные фото и видео."}
            location={"https://i-project.by/portfolio/interier/interier-protos"}
            image={"https://i-project.by/portfolio_newsite/protos_interior/01_protos_interior.webp"}/>
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
                <li><AnchorLink to="/portfolio/interier/interier-protos/#anchor_9" title="Бренды" /></li>
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
                  href="https://i-project.by/portfolio_newsite/protos_interior/03_protos_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_interior/03_protos_interior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/protos_interior/04_protos_interior.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/protos_interior/04_protos_interior.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/protos_interior/15_protos_interior.webp"
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
                    href="https://i-project.by/portfolio_newsite/protos_interior/33_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/33_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/34_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/34_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Внутренняя планировка разработана согласно четко поставленной заказчиком задаче. Мы&nbsp;реализовали две переговорных, ресепшн, открытую и&nbsp;закрытую зоны общения. Пристроили лаунж-зону с&nbsp;большой терассой для проведения культурных мероприятий и&nbsp;встреч особых гостей.</p>
                <p class="content_p">Цветовое решение: натуральные цвета деревянных и&nbsp;керамических фактур, зелени, нейтральные оттенки серого, графит, антрацит, белый.</p>
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
              <h2 class="content_h2" id="anchor_3">Кабинет директора</h2>
              <div class="content_text">
                <p class="content_p">В&nbsp;кабинете директора имеется фитостена из&nbsp;стабилизированного мха. Такая композиция эффектна и&nbsp;не&nbsp;требует особого ухода.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/01_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/01_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/02_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/02_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/protos_interior/protosFilm_1.mp4'
                />
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Зал заседаний</h2>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/05_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/05_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/08_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/08_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Материалы, использованные в&nbsp;отделке и&nbsp;изготовлении деталей, антивандальные. Полностью отсутствуют обои, окрашенные поверхности. На&nbsp;стенах&nbsp;&mdash; керамогранитные и&nbsp;шпонированные панели, пол&nbsp;&mdash; керамогранит.</p>
                <p class="content_p">Мебель вся уникальная, спроектированная по&nbsp;авторским эскизам. Для ее&nbsp;создания использовались те&nbsp;же материалы, что участвовали в&nbsp;отделке. Например, корпус тумбы в&nbsp;лаунж-зоне выполнен из&nbsp;того&nbsp;же материала, что и&nbsp;стеновые панели. Такой прием создает визуальный эффект, будто&nbsp;бы тумба вырастает из&nbsp;стены. Ножки столов в&nbsp;переговорных выполнены из&nbsp;тех&nbsp;же двутавров, что и&nbsp;портал входа, только меньшего сечения, вдоль них от&nbsp;пола к&nbsp;поверхности проходит электрическая разводка (к&nbsp;розеткам, беспроводным зарядным устройствам).</p>
              </div>
              <div class="content_images">
                <CalculatorLink />
              </div>
              <h2 class="content_h2" id="anchor_5">Переговорная</h2>
              <div class="content_text">
                <p class="content_p">&laquo;Открытая&raquo; переговорная, расположилась сразу за&nbsp;ресепшн и&nbsp;отделена от&nbsp;этой зоны стеклянной перегородкой с&nbsp;затемнением. Это позволило визуально увеличить как пространство переговорной, так и&nbsp;пространство ресепшн. Степень прозрачности между ресепшн и&nbsp;переговорной можно регулировать при помощи шторы.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/03_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/03_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/13_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/13_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/11_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/11_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/06_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/06_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/32_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/32_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Объединить интерьерное пространство, добавить в&nbsp;него динамики и&nbsp;ритма помог прием с&nbsp;горизонтальной &laquo;отсечкой&raquo;. Во&nbsp;всех помещениях достаточно высокие потолки, поэтому мы&nbsp;разбили их&nbsp;вертикально на&nbsp;два яруса. Верх окон послужил естественной привязкой этому делению, под эту высоту мы&nbsp;изготовили стеновые панели и&nbsp;увеличили дверные проемы.</p>
                <p class="content_p">Тем самым не&nbsp;только добавили интерьеру выразительности, но&nbsp;и&nbsp;сэкономили на&nbsp;отделочных материалах, т.к. пространство от&nbsp;верха панелей до&nbsp;потолка не&nbsp;подвергается внешним воздействиям&nbsp;&mdash; его мы&nbsp;решили просто покрасить. По&nbsp;потолку&nbsp;же развели все инженерные коммуникации, доступ к&nbsp;которым осуществляется через съемные потолочные панели.</p>
              </div>
              <ProjectVideoTrigger
                shortVideo='https://i-project.by/video_newsite/protos_interior/protosFilm_2.mp4'
              />
              <div class="content_images">
                <IncontentReviewProtos />
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
              <h2 class="content_h2" id="anchor_7">Приемная</h2>
              <div class="content_text">
                <p class="content_p">Стоит отметить двери скрытого монтажа, которые активно задействованы в&nbsp;интерьере. Все они высотой 2,7м и&nbsp;имеют ту&nbsp;же отделку, что и&nbsp;стены (керамогранит, шпонированный мдф)&nbsp;&mdash; все это индивидуальная работа.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/31_1_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/31_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/14_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/14_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/10_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/10_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/protos_interior/protosFilm_3.mp4'
                />
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
              <h2 class="content_h2" id="anchor_8">Лаунж-зона с&nbsp;закрытой терассой</h2>
              <div class="content_text">
                <p class="content_p">В&nbsp;пристраиваемую часть можно попасть из&nbsp;кабинета через стеклянный коридор. Лаунж зона может раскрываться при хорошей погоде, при ней имеется большая терасса, часть которой закрыта от&nbsp;осадков.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/19_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/19_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/20_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/20_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/29_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/29_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/28_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/28_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/16_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/16_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/23_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/23_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/protos_interior/protosFilm_4.mp4'
                />
              </div>
              <div class="content_images">
                <div class="rewards">
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_1.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Второе место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта &laquo;Интерьер офиса группы компаний ПРОТОС&raquo;.</p>
                  </div>
                  <div class="reward_item">
                    <StaticImage src="../../../images/rewards/reward_2.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Первое место на&nbsp;XX&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XIV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/architecture/rekonstrukciya-protos" className="link">&laquo;Реконструкция административного офисного здания группы компаний ПРОТОС&raquo;</Link>.</p>
                  </div>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2">Терасса</h2>
                <div class="content_images_three_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/27_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/27_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/22_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/22_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/25_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/25_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/17_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/17_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/23_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/23_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/30_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/30_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/24_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/24_protos_interior.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/26_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/26_protos_interior.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/protos_interior/18_protos_interior.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/protos_interior/18_protos_interior.jpg" alt="" />
                  </a>
                </div>
              </div>
              <Compliment />
              <PartnersProtosInt />
            </div>
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default interierProtos
