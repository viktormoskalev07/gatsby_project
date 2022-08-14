import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/luban/01_luban.jpg"
import Seo from "../../../components/seo"

const luban = () => {
  return (
    <Layout>
      <Seo  title={"Дом для жизни. Архитектура 400 м2, фото | I-PROJECT"} description={"Выполнили реконструкцию фасада и реализовали мероприятия по благоустройству территории. Представлены оригинальные фото и видео."}
            location={"https://i-project.by/portfolio/architecture/luban"}
            image={"https://i-project.by/portfolio_newsite/luban/01_luban.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом для жизни. Архитектура, 400&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=1"}
              image={thumbnail}
              title={"Дом для жизни. Архитектура"}
              embed={'BTDlAUgy9dY'}>
              <StaticImage src={'../../../images/portfolio/luban/01_luban.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_2" title="3D-визуализации и&nbsp;фотографии" /></li>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_3" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_4" title="Реализация" /></li>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_5" title="Фасад дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/luban/#anchor_6" title="Благоустройство территории" /></li>
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
                  href="https://i-project.by/portfolio_newsite/luban/02_luban.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luban/02_luban.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/luban/12_luban.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luban/12_luban.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/luban/04_luban.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/luban/04_luban.jpg" alt="" />
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
                    <StaticImage src="../../../images/portfolio/luban/12_luban.jpg" alt="" />
                    <figcaption>Фото</figcaption>
                  </figure>
                  <figure slot="second" width="100%" class="after after_white">
                    <StaticImage src="../../../images/portfolio/luban/3d/01_luban.jpg" alt="" />
                    <figcaption>3D</figcaption>
                  </figure>
                </ImgComparisonSlider>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/3d/05_luban.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="before">
                      <StaticImage src="../../../images/portfolio/luban/3d/05_luban.jpg" alt="" />
                      <figcaption>3D</figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/05_luban.webp"
                    data-fancybox="gallery"
                  >
                    <figure class="after after_white_bcg">
                      <StaticImage src="../../../images/portfolio/luban/05_luban.jpg" alt="" />
                      <figcaption>Фото</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">План дома</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/13_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/13_luban.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/14_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/14_luban.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Реализация</h2>
                <div class="content_images_two_right_narrow">
                  <StaticImage src="../../../images/portfolio/luban/1.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/luban/2.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/luban/3.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/luban/4.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <StaticImage src="../../../images/portfolio/luban/5.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/luban/6.jpg" alt="" />
                </div>
                <div class="content_images_three">
                  <StaticImage src="../../../images/portfolio/luban/7.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/luban/10.jpg" alt="" />
                  <StaticImage src="../../../images/portfolio/luban/9-1.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/luban/9.jpg" alt="" />
                </div>
                <div class="content_images_one">
                  <StaticImage src="../../../images/portfolio/luban/8.jpg" alt="" />
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Планировочное решение дома достаточно традиционно. Со&nbsp;стороны улиц дом относительно &laquo;закрыт&raquo; и&nbsp;&laquo;раскрывается&raquo; в&nbsp;направлении участка.</p>
                <p class="content_p">Первый этаж дома состоит из&nbsp;двух основных блоков: общей зоны, состоящей из&nbsp;большой гостиной и&nbsp;кухни, размещенной в&nbsp;одном помещении со&nbsp;столовой, СПА-зоны, в&nbsp;границах которой разместились раздевалка с&nbsp;душевой, парная, уборная и&nbsp;лаунж-зона с&nbsp;небольшим бассейном. Предусмотрена связь всех основных помещений первого этажа с&nbsp;участком и&nbsp;возможность свободного перемещения между уличным и&nbsp;внутридомовым пространством в&nbsp;теплое время, благодаря сдвижным оконным системам REYNAERS. На&nbsp;втором этаже находятся 3&nbsp;спальни, две из&nbsp;которых имеют свои гардеробные, сан узлы и&nbsp;выходы на&nbsp;террасу.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Фасад дома</h2>
                <div class="content_text">
                  <p class="content_p">Дом отвечает всем самым современным требованиям по&nbsp;части энергосбережения и&nbsp;экологии, оборудован системой автоматизации управления климатом и&nbsp;освещением &laquo;умный дом&raquo; от&nbsp;GIRA, приточно-вытяжной вент системой с&nbsp;рекуперацией тепла от&nbsp;ZEHNDR.</p>
                  <p class="content_p">На&nbsp;территории участка, под газоном, помимо системы автоматического полива, проложены направляющие для робота-косилки, который прекрасно справляется со&nbsp;своей работой. А&nbsp;в&nbsp;вечернее время на&nbsp;участке создается своя особая атмосфера, благодаря тщательно продуманному размещению групп фасадных и&nbsp;ландшафтных светильников от&nbsp;CENTRSVET.</p>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/03_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/03_luban.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/05_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/05_luban.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/luban/pattern.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/08_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/08_luban.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/09_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/09_luban.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Все угловые окна стыкуются напрямую, без профилей и&nbsp;вспомогательных конструктивных элементов, такое решение выглядит чисто и&nbsp;эффектно. Отделочные материалы для фасада, помимо своей натуральности и&nbsp;эстетичности, соответствуют принципу: &laquo;сделал и&nbsp;забыл&raquo; (не&nbsp;требуют ухода и&nbsp;обслуживания). Стены дома облицованы клинкерной ригельной плиткой STROEHER двух цветов, по&nbsp;вентилируемому фасаду из&nbsp;аквапанелей.</p>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="content_images_one_big">
              <a
                href="https://i-project.by/portfolio_newsite/luban/01_luban.webp"
                data-fancybox="gallery"
              >
                <StaticImage src="../../../images/portfolio/luban/01_luban.jpg" alt="" />
              </a>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <p class="content_p">Для того чтобы лучше проявить пластику фасада, мы&nbsp;немного &laquo;поиграли&raquo; с&nbsp;уровнями и&nbsp;направлениями раскладки клинкера. Свесы двускатной фальцевой кровли подшиты алюмо-композитными панелями, из&nbsp;этого&nbsp;же материала исполнены оконные откосы и&nbsp;отливы. Террасная доска&nbsp;&mdash; также из&nbsp;композитного материала, на&nbsp;втором этаже она уложена на&nbsp;фальшпол с&nbsp;мембраной. Пошаговые дорожки и&nbsp;мощения&nbsp;&mdash; из&nbsp;натурального камня: разных видов гранита и&nbsp;сланца.</p>
                <p class="content_p">Ограждение&nbsp;&mdash; комбинированное, из&nbsp;вибробетонных блоков и&nbsp;металлических элементов, оцинкованных и&nbsp;окрашенных промышленным способом, в&nbsp;заводских условиях, что исключает возможность коррозии. Со&nbsp;стороны участка к&nbsp;забору примыкает изгородь из&nbsp;буков, которая выгодно отличается от&nbsp;грабовой изгороди тем, что и&nbsp;в&nbsp;зимнее время выполняет свою ограждающую функцию, так как листья у&nbsp;буков хоть и&nbsp;высыхают, но&nbsp;не&nbsp;осыпаются, пока не&nbsp;отрастут новые.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Благоустройство территории</h2>
                  <div class="content_text">
                  <p class="content_p">За&nbsp;неимением видов на&nbsp;природные достопримечательности, мы&nbsp;решили сформировать свою экосистему на&nbsp;участке, посадив собственные красивые деревья, травы и&nbsp;кустарники. Стоит отметить, что процесс этот не&nbsp;быстрый, и&nbsp;на&nbsp;данном этапе мы&nbsp;видим его начало. С&nbsp;каждым годом деревья будут разрастаться больше и&nbsp;гуще, добавятся цветы, новые растения и&nbsp;объекты инфраструктуры.</p>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/06_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/06_luban.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/luban/11_luban.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/luban/11_luban.jpg" alt="" />
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


export default luban

