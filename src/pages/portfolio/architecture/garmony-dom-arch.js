import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import { IncontentYouToobe } from "../../../subitems/incontent-youToobe"
import thumbnail from  "../../../images/portfolio/garmony_dom_arch/01_garmony_dom.jpg"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { ProjectVideoTrigger } from "../../../subitems/project-video-trigger"
import { Compliment } from "../../../subitems/compliment/compliment"
import { PartnersGarmExt } from "../../../subitems/partners/partnersGarmExt"


const garmonyDomArch = () => {
  return (
    <Layout>
      <Seo  title={"Гармоничный дом. Архитектура 400 м2, фото | I-PROJECT"} description={"Выполнили реконструкцию фасада и реализовали мероприятия по благоустройству территории. Представлены оригинальные фото и видео."}
            location={"https://i-project.by/portfolio/architecture/garmony-dom-arch"}
            image={"https://i-project.by/portfolio_newsite/garmony_dom_arch/01_garmony_dom.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Гармоничный дом. Архитектура, 400&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=1"}
              image={thumbnail}
              title={"Гармоничный дом. Архитектура"}
              embed={'kxzQ-g1t_WQ'}>
              <StaticImage src={'../../../images/portfolio/garmony_dom_arch/01_garmony_dom.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_2" title="3D-визуализации и&nbsp;фотографии" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_3" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_4" title="Реализация" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_5" title="Фасад дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_6" title="Интерьер дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_7" title="Благоустройство территории" /></li>
                <li><AnchorLink to="/portfolio/architecture/garmony-dom-arch/#anchor_8" title="Бренды" /></li>
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
                  href="https://i-project.by/portfolio_newsite/garmony_dom_arch/10_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/10_garmony_dom.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/garmony_dom_arch/11_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/11_garmony_dom.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/garmony_dom_arch/04_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/04_garmony_dom.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Все архитекторы любят проектировать дома на&nbsp;холмах, с&nbsp;видом на&nbsp;водную гладь, или в&nbsp;живописном лесу... Но&nbsp;бывает и&nbsp;так, что участок под строительство дома находится в&nbsp;черте типовой малоэтажной застройки, а&nbsp;у&nbsp;заказчиков есть категорическое пожелание&nbsp;&mdash; деликатно вписать в&nbsp;нее новый дом, не&nbsp;шокируя окружающих соседей чересчур модернистскими решениями.</p>
                  <p class="content_task_p">Обстоятельства накладывали на&nbsp;нас некоторые ограничения, тем не&nbsp;менее мы&nbsp;согласились сыграть по&nbsp;этим правилам, поскольку сочли их&nbsp;логичными.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">3D-визуализации и&nbsp;фотографии</h2>
                <ImgComparisonSlider class="slider-opacity-and-size" value="70">
                  <figure slot="first" width="100%" class="before">
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/18_garmony_dom.jpg" alt="" />
                    <figcaption>Фото</figcaption>
                  </figure>
                  <figure slot="second" width="100%" class="after after_white">
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/3d/01_garmony_dom.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                </ImgComparisonSlider>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/3d/05_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="before">
                      <StaticImage src="../../../images/portfolio/garmony_dom_arch/3d/05_garmony_dom.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/08_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white_bcg">
                      <StaticImage src="../../../images/portfolio/garmony_dom_arch/08_garmony_dom.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">План дома</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/19_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/19_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/20_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/20_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p"><Link to="/articles/plan-house" className="link" target="_blank">Планировочное решение дома</Link> достаточно традиционно. Со&nbsp;стороны улиц дом относительно &laquo;закрыт&raquo; и&nbsp;&laquo;раскрывается&raquo; в&nbsp;направлении участка.</p>
                <p class="content_p">Первый этаж дома состоит из&nbsp;двух основных блоков: общей зоны, состоящей из&nbsp;большой гостиной и&nbsp;кухни, размещенной в&nbsp;одном помещении со&nbsp;столовой, СПА-зоны, в&nbsp;границах которой разместились раздевалка с&nbsp;душевой, парная, уборная и&nbsp;лаунж-зона с&nbsp;небольшим бассейном. Предусмотрена связь всех основных помещений первого этажа с&nbsp;участком и&nbsp;возможность свободного перемещения между уличным и&nbsp;внутридомовым пространством в&nbsp;теплое время, благодаря сдвижным оконным системам REYNAERS. На&nbsp;втором этаже находятся 3&nbsp;спальни, две из&nbsp;которых имеют свои гардеробные, сан узлы и&nbsp;выходы на&nbsp;террасу.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Реализация</h2>
                <div class="content_images_two_right_narrow">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/1.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/2.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/3.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/4.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/5.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/6.jpg" alt="" />
                </div>
                <div class="content_images_three">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/7.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/10.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/9-1.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/9.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/8.jpg" alt="" />
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Фасад дома</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/02_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/02_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/03_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/03_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/04_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/04_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/05_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/05_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/06_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/06_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <IncontentYouToobe
                param={"start=0"}
                title={"Обзор архитектурных решений и ландшафтного дизайна от I-PROJECT"}
                embed={'d7himngzT4s'} />
              <div class="rewards">
                <div class="reward_item rewards_white">
                  <StaticImage src="../../../images/rewards/reward_15.jpg" alt="" class="reward_image"/>
                  <p class="reward_text">Первое место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Жилые одноквартирные и&nbsp;малоэтажные дома (1-3 этажа)&raquo;. За&nbsp;реализацию проекта &laquo;Гармоничный дом. Архитектура&raquo;.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/garmony_dom_arch/01_garmony_dom.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/garmony_dom_arch/01_garmony_dom.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <p class="content_p">Дом отвечает всем самым современным требованиям по&nbsp;части энергосбережения и&nbsp;экологии, оборудован системой автоматизации управления климатом и&nbsp;освещением &laquo;умный дом&raquo; от&nbsp;GIRA, приточно-вытяжной вент системой с&nbsp;рекуперацией тепла от&nbsp;ZEHNDER.</p>
                <p class="content_p">На&nbsp;территории участка, под газоном, помимо системы автоматического полива, проложены направляющие для робота-косилки, который прекрасно справляется со&nbsp;своей работой. А&nbsp;в&nbsp;вечернее время на&nbsp;участке создается своя особая атмосфера, благодаря тщательно продуманному размещению групп фасадных и&nbsp;ландшафтных светильников от&nbsp;CENTRSVET.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/07_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/07_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_exterior/luban_exteriorFilm_1.mp4'
                />
              </div>
              <div class="content_text">
                <p class="content_p">Все угловые окна стыкуются напрямую, без профилей и&nbsp;вспомогательных конструктивных элементов, такое решение выглядит чисто и&nbsp;эффектно. Отделочные материалы для фасада, помимо своей натуральности и&nbsp;эстетичности, соответствуют принципу: &laquo;сделал и&nbsp;забыл&raquo; (не&nbsp;требуют ухода и&nbsp;обслуживания). Стены дома облицованы клинкерной ригельной плиткой STROEHER двух цветов, по&nbsp;вентилируемому фасаду из&nbsp;аквапанелей.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/08_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/08_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/09_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/09_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/garmony_dom_arch/pattern.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/10_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/10_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/11_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/11_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/12_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/12_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/13_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/13_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <CalculatorLink />
              <div class="content_text">
                <p class="content_p">Для того чтобы лучше проявить пластику фасада, мы&nbsp;немного &laquo;поиграли&raquo; с&nbsp;уровнями и&nbsp;направлениями раскладки клинкера. Свесы двускатной фальцевой кровли подшиты алюмо-композитными панелями, из&nbsp;этого&nbsp;же материала исполнены оконные откосы и&nbsp;отливы. Террасная доска&nbsp;&mdash; также из&nbsp;композитного материала, на&nbsp;втором этаже она уложена на&nbsp;фальшпол с&nbsp;мембраной. Пошаговые дорожки и&nbsp;мощения&nbsp;&mdash; из&nbsp;натурального камня: разных видов гранита и&nbsp;сланца.</p>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_6">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/garmony_dom_interier/05_garmony_dom.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/garmony_dom_interier/03_garmony_dom.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Интерьер дома</p>
                      <Link to="/portfolio/interier/garmony-dom-interier/" className="partner_project_link" target='_blank'>Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/interier/garmony-dom-interier/" className="partner_project_link_mob" target='_blank'>Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <h2 class="content_h2" id="anchor_7">Благоустройство территории</h2>
                <div class="content_text">
                  <p class="content_p">Ограждение&nbsp;&mdash; комбинированное, из&nbsp;вибробетонных блоков и&nbsp;металлических элементов, оцинкованных и&nbsp;окрашенных промышленным способом, в&nbsp;заводских условиях, что исключает возможность коррозии. Со&nbsp;стороны участка к&nbsp;забору примыкает изгородь из&nbsp;буков, которая выгодно отличается от&nbsp;грабовой изгороди тем, что и&nbsp;в&nbsp;зимнее время выполняет свою ограждающую функцию, так как листья у&nbsp;буков хоть и&nbsp;высыхают, но&nbsp;не&nbsp;осыпаются, пока не&nbsp;отрастут новые.</p>
                  <p class="content_p">За&nbsp;неимением видов на&nbsp;природные достопримечательности, мы&nbsp;решили сформировать свою экосистему на&nbsp;участке, посадив собственные красивые деревья, травы и&nbsp;кустарники. Стоит отметить, что процесс этот не&nbsp;быстрый, и&nbsp;на&nbsp;данном этапе мы&nbsp;видим его начало. С&nbsp;каждым годом деревья будут разрастаться больше и&nbsp;гуще, добавятся цветы, новые растения и&nbsp;объекты инфраструктуры.</p>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/14_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/14_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/15_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/15_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/16_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/16_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_arch/17_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_arch/17_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <Compliment />
              <PartnersGarmExt />
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}


export default garmonyDomArch

