import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/garmony_dom_interier/01_garmony_dom.jpg"
import { IncontentYouToobe } from "../../../subitems/incontent-youToobe"
import Seo from "../../../components/seo"
import { CalculatorLink } from "../../../components/calculator/calculatorLink"
import { ProjectVideoTrigger } from "../../../subitems/project-video-trigger"
import { Compliment } from "../../../subitems/compliment/compliment"
import { PartnersGarmInt } from "../../../subitems/partners/partnersGarmInt"

const garmonyDomInterier = () => {
  return (
    <Layout>
      <Seo  title={"Гармоничный дом. Интерьер, реализованные фото | I-PROJECT"} description={"Построили индивидуальный 2-х этажный жилой, в интерьере сочетание светлых и темных тонов, которые подчеркивают живописные работы. Оригинальные фото и видео интерьера."}
            location={"https://i-project.by/portfolio/interier/garmony-dom-interier"}
            image={"https://i-project.by/portfolio_newsite/garmony-dom-interier/01_garmony_dom.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Гармоничный дом. Интерьер, 400м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={"start=1"}
              image={thumbnail}
              title={"Гармоничный дом. Интерьер"}
              embed={'5zXfED0tuQw'}>
              <StaticImage src={'../../../images/portfolio/garmony_dom_interier/01_garmony_dom.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_2" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_3" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_4" title="Кухня" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_5" title="Столовая" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_6" title="Бассейн" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_7" title="Aрхитектура дома" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_8" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_9" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_10" title="Бренды" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2022</span></p>
                <p class="project_info_p">Локация: <span>Минская область</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/garmony_dom_interier/24_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_interier/24_garmony_dom.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/garmony_dom_interier/09_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_interier/09_garmony_dom.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/garmony_dom_interier/17_garmony_dom.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/garmony_dom_interier/17_garmony_dom.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Индивидуальный жилой дом в&nbsp;стиле контемпорари для семьи из&nbsp;трёх человек площадью 400&nbsp;м.&nbsp;кв. Заказчики&nbsp;&mdash; супружеская пара и&nbsp;их&nbsp;взрослая дочь&nbsp;&mdash; уже оформляли с&nbsp;нашей помощью интерьер городской квартиры, поэтому полностью доверились нам в&nbsp;части создания этого проекта, что положительно повлияло на&nbsp;результат. В&nbsp;результате на&nbsp;объекте мы&nbsp;выполняли весь комплекс работ/услуг: <Link to="/uslugi/arxitekturnoe-proektirovanie" className="link" target='_blank'>архитектурное проектирование</Link>, <Link to="/uslugi/dizajn-interera-domov" className="link" target='_blank'>дизайн интерьера</Link>, <Link to="/uslugi/avtorskoe-soprovozhdenie" className="link" target='_blank'>авторское сопровождение</Link> и&nbsp;<Link to="/uslugi/komplektaciya-obekta" className="link" target='_blank'>комплектацию</Link>, курировали <Link to="/uslugi/stroitelstvo-i-rekonstrukciya" className="link" target='_blank'>строительство и&nbsp;ремонт</Link>, благоустройство и&nbsp;ландшафтный дизайн.</p>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_2">Участок и&nbsp;планировка</h2>
                <p class="content_p">Участок под строительство находится в&nbsp;черте типовой усадебной застройки, поэтому перед нами стояла нетривиальная задача: создать современный и&nbsp;стильный дом, но&nbsp;при этом не&nbsp;шокировать окружающих чересчур модернистскими решениями.</p>
                <p class="content_p">Главной целью было разработать гармоничное пространство для жизни, поэтому планировочное решение выглядит довольно традиционным. Дом &laquo;раскрывается&raquo; в&nbsp;направлении участка, а&nbsp;со&nbsp;стороны улиц относительно закрыт.</p>
                <p class="content_p">Основными цветами интерьера стали серовато-жемчужный, розовая глина, древесные оттенки (дуб и&nbsp;орех), а&nbsp;также тёмный антрацит. В&nbsp;качестве дополнительных и&nbsp;акцентных мы&nbsp;выбрали терракот, охру, сложные оттенки красного, синего и&nbsp;бирюзового, капучино, черный и&nbsp;белый цвета.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/39_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/39_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_2">Первый этаж</h2>
                <p class="content_p">Первый этаж разделён на&nbsp;два блока: общая и&nbsp;СПА-зоны. В&nbsp;общей зоне находятся гостиная и&nbsp;кухня, объединённая со&nbsp;столовой. В&nbsp;СПА расположены лаунж-зона с&nbsp;небольшим бассейном, парная, раздевалка с&nbsp;душевой и&nbsp;уборная.</p>
                <p class="content_p">В&nbsp;доме применяется система автоматизации от&nbsp;Gira, которая отвечает за&nbsp;управление светом и&nbsp;климатом, в&nbsp;том числе вентиляцией и&nbsp;радиаторами Zehnder.</p>
                <p class="content_p">Благодаря сдвижным оконным системам Reynaers хозяева и&nbsp;гости в&nbsp;тёплое время года могут свободно перемещаться между участком и&nbsp;комнатами первого этажа.</p>
                <p class="content_p">Из&nbsp;всех основных помещений открывается вид на&nbsp;придомовую территорию, где с&nbsp;помощью деревьев, кустарников и&nbsp;газона мы&nbsp;сформировали собственную экосистему. Воссозданный пейзаж проникает внутрь дома через большие оконные просветы и&nbsp;таким образом становится частью интерьера, гармонично дополняя его.</p>
              </div>
              <div class="content_images" id="anchor_3_1">
                <h2 class="content_h2" id="anchor_3">Гостиная</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/01_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/01_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Диванная группа итальянского производителя Arketipo Smooth&nbsp;&mdash; это условный центр гостиной, из&nbsp;которого открывается вид на&nbsp;четыре зоны, наполненные разным содержанием. Первая&nbsp;&mdash; вид на&nbsp;сад через большие окна, вторая&nbsp;&mdash; ТВ&nbsp;и&nbsp;аудио системы, которые размещаются вдоль стены, отделанной трёхмерными шпонированными панелями, третья&nbsp;&mdash; авторский стеллаж и&nbsp;интегрированный в&nbsp;него биокамин, точно подобранные по&nbsp;цвету (за&nbsp;реализацию всех авторских задумок по&nbsp;части корпусной мебели спасибо ребятам из&nbsp;Domani), четвертая&nbsp;&mdash; вид на&nbsp;столовую, часть сада и&nbsp;живопись.</p>
              </div>
              <div class="content_images">
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/02_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/02_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/03_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/03_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/04_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/04_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Общую цветовую гамму интерьера удачно подчеркнули живописные работы художника Дениса Синявского, созданные из&nbsp;песка разных оттенков, добытого на&nbsp;берегах Тенерифе.</p>
              </div>
              <div class="content_images">
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/05_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/05_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/06_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/06_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/07_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/07_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_3.mp4'
                />
              </div>
              <CalculatorLink />
              <div class="rewards">
                <div class="reward_item rewards_white">
                  <StaticImage src="../../../images/rewards/reward_15.jpg" alt="" class="reward_image"/>
                  <p class="reward_text">Первое место на&nbsp;XXI&nbsp;Республиканском конкурсе на&nbsp;лучший &laquo;Проект&raquo;, &laquo;Постройку&raquo;, &laquo;Публикацию&raquo;, в&nbsp;рамках XV Национального фестиваля архитектуры, в&nbsp;разделе &laquo;Постройка&raquo;, в&nbsp;номинации &laquo;Жилые одноквартирные и&nbsp;малоэтажные дома (1-3 этажа)&raquo;. За&nbsp;реализацию проекта <Link to="/portfolio/architecture/garmony-dom-arch" className="link">&laquo;Гармоничный дом. Архитектура&raquo;</Link>.</p>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_4">Кухня</h2>
                <p class="content_p">Кухонный гарнитур немецкой фирмы Leicht поворачивается вместе с&nbsp;угловым окном, которое находится над рабочей поверхностью и&nbsp;наполняет помещение естественным светом. Фасады из&nbsp;крашеного МДФ выглядят лаконично и&nbsp;изысканно благодаря окаймляющему их&nbsp;графичному фацету.</p>
                <p class="content_p">В&nbsp;процессе строительства в&nbsp;полу был заранее проложен вентиляционный канал, который подведен к&nbsp;варочной поверхности. Такое решение позволило обойтись без громоздкой подвесной вытяжки, которую обычно используют при создании барного полуострова на&nbsp;кухне.</p>
              </div>
              <div class="content_images">
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_2.mp4'
                />
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/08_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/08_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/09_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/09_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <IncontentYouToobe
                param={"start=0"}
                title={"Обзор интерьера дома от I-PROJECT"}
                embed={'rV3dhWrDcMU'}
              />
              <div class="content_text">
                <h2 class="content_h2" id="anchor_5">Столовая</h2>
                <p class="content_p">При оформлении обеденной зоны мы&nbsp;использовали оригинальный дизайнерский светильник Bomo, его форма перекликается с&nbsp;формой <AnchorLink to="/portfolio/interier/garmony-dom-interier/#anchor_3_1" className="link" title="светильника Moooi" />, который находится над диваном в&nbsp;гостиной.</p>
                <p class="content_p">На&nbsp;обеденном столе Sovet Palase антивандальное и&nbsp;при этом приятное наощупь керамическое покрытие, устойчивое к&nbsp;повреждениям.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/12_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/12_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/13_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/13_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_1.mp4'
                />
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/14_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/14_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/15_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/15_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/16_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/16_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_6">Лаунж-зона с&nbsp;бассейном</h2>
                <p class="content_p">В&nbsp;интерьере лаунж-зоны каждая деталь приходится к&nbsp;месту и&nbsp;помогает расслабиться. Диванная группа Borzalino Atena, журнальный столик, интерьерная живопись, комнатные растения и&nbsp;текстиль гармонично сочетаются друг с&nbsp;другом и&nbsp;с&nbsp;видом, который открывается из&nbsp;окна.</p>
                <p class="content_p">В&nbsp;качестве напольного покрытия в&nbsp;бассейне используется плитка итальянского бренда Ceramiche Keope, стены отделаны высококлассной плиткой ещё одного итальянского производителя Fondovalle.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/17_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/17_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/garmony_dom_interier/pattern1.jpg" alt="" />
                </div>
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/18_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/18_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/19_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/19_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/20_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/20_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2">Комната отдыха с&nbsp;сауной и&nbsp;душевой</h2>
                <p class="content_p">Атмосфера релакса находит продолжение в&nbsp;комнате отдыха, после душа или сауны можно попасть под снегопад, благодаря снегогенератору, встроенному в&nbsp;потолок душевой или наслодиться моментом на&nbsp;удобном диване Pianca.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/21_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/21_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/garmony_dom_interier/pattern2.jpg" alt="" />
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_6.mp4'
                />
              </div>
              <div class="content_text">
                <h2 class="content_h2">Лестница</h2>
                <p class="content_p">Переход из&nbsp;общей зоны в&nbsp;спальную осуществляется по&nbsp;стильной и&nbsp;лаконичной лестнице, которую акцентирует работа скульптора Кирилла Крохалева.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/22_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/22_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/23_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/23_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="content_images">
            <div class="partner_project" id="anchor_7">
              <div class="wrapper">
                <div class="right_content">
                  <div class="partner_project_flex">
                    <div class="partner_project_images">
                      <StaticImage src="../../../images/portfolio/garmony_dom_arch/09_garmony_dom.jpg" alt="" />
                      <StaticImage src="../../../images/portfolio/garmony_dom_arch/13_garmony_dom.jpg" alt="" />
                    </div>
                    <div class="partner_project_line"></div>
                    <div class="partner_project_text">
                      <p>Aрхитектура дома</p>
                      <Link to="/portfolio/architecture/garmony-dom-arch" className="partner_project_link" target='_blank'>Подробнее</Link>
                    </div>
                  </div>
                  <Link to="/portfolio/architecture/garmony-dom-arch" className="partner_project_link_mob" target='_blank'>Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_text">
                <h2 class="content_h2" id="anchor_8">Второй этаж</h2>
                <p class="content_p">На&nbsp;втором этаже находятся три спальни, две из&nbsp;них имеют свои гардеробные, ванные и&nbsp;уборные, а&nbsp;также выходы на&nbsp;террасу.</p>
                <p class="content_p">Для отделки стен использованы керамические плиты, трёхмерные шпонированные панели и&nbsp;гладкая покраска, для отделки пола&nbsp;&mdash; живописная паркетная доска Cadorin из&nbsp;европейского ореха.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/40_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/40_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_9">Хозяйская мастер-спальня</h2>
                <p class="content_p">В&nbsp;спальне хозяев есть всё необходимое для комфортной жизни, но&nbsp;при этом нет ничего лишнего. Двухспальная кровать Ditre Italia расположена напротив большого углового окна с&nbsp;выходом на&nbsp;террасу, рядом&nbsp;&mdash; туалетный столик Sangiacomo Venere с&nbsp;зеркалом. Гардеробная отделена от&nbsp;<Link to="/articles/spalnya" className="link" target="_blank">спальной зоны</Link> затемнённой стеклянной перегородкой, что позволяет разграничить пространство, не&nbsp;загромождая его. Через гардеробную можно попасть в&nbsp;просторную комнату с&nbsp;островной ванной напротив окна.</p>
                <p class="content_p">Интересный прием в&nbsp;оформлении комнаты&nbsp;&mdash; сочетание картины, прозрачного подвесного светильника и&nbsp;зеркальных панелей в&nbsp;дальнем углу. Завершает интерьер текстиль дизайнера Марины Игнатьевой, который также использован во&nbsp;всем интерьере&nbsp;&mdash; шторы, покрывала, пледы и&nbsp;подушки.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/24_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/24_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/25_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/25_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/26_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/26_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/27_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/27_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/28_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/28_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_5.mp4'
                />
              </div>
              <div class="content_text">
                <h2 class="content_h2" id="anchor_8">Мастер-спальня дочери</h2>
                <p class="content_p">В&nbsp;спальне дочери&nbsp;&mdash; тот&nbsp;же функциональный набор предметов интерьера, только в&nbsp;ином сочетании. Напротив кровати&nbsp;&mdash; угловое окно с&nbsp;выходом на&nbsp;террасу, в&nbsp;изголовье&nbsp;&mdash; необычное панно из&nbsp;зеркал-лепестков Сattelan, которые визуально увеличивают и&nbsp;усложняет пространство. Гардеробная и&nbsp;уборная отделены от&nbsp;спальной зоны глухой стеной глубокого цвета, который в&nbsp;зависимости от&nbsp;освещения имеет синий или бирюзовый оттенок. При этом <Link to="/articles/dveri" className="link" target="_blank">двери-невидимки</Link> выкрашены в&nbsp;цвет стены и&nbsp;не&nbsp;обращают на&nbsp;себя внимание.</p>
                <p class="content_p">Туалетный столик есть как непосредственно в&nbsp;комнате, перед окном, так и&nbsp;в&nbsp;гардеробной.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/29_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/29_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/30_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/30_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_three">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/31_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/31_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/32_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/32_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/33_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/33_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <ProjectVideoTrigger
                  shortVideo='https://i-project.by/video_newsite/luban_interior/luban_interiorFilm_4.mp4'
                />
              </div>
              <div class="content_text">
                <h2 class="content_h2">Гостевая спальня</h2>
                <p class="content_p">Гостевая спальня компактнее, чем хозяйские, но&nbsp;и&nbsp;в&nbsp;ней поместились все необходимые предметы интерьера: удобная двухспальная кровать, шкаф, переходящий в&nbsp;стеллаж, стол Sangiocomo, размер которого позволяет поработать за&nbsp;ним с&nbsp;документами или ноутбуком.</p>
                <p class="content_p">Над изголовьем кровати&nbsp;&mdash; картина, как один из&nbsp;связующих элементов всего интерьера, и&nbsp;стильные функциональные светильники.</p>
                <p class="content_p">Рядом с&nbsp;этой спальней находится дверь в&nbsp;общий санузел.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/34_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/34_garmony_dom.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_right_narrow">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/35_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/35_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/36_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/36_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <h2 class="content_h2">Санузлы</h2>
                <p class="content_p">Во&nbsp;всех санузлах есть окна, стены отделаны крупноформатным керамогранитом брендов FMG|Iris и&nbsp;Ceramiche Keope. Душевые перегородки нестандартной высоты, поэтому изготавливались по&nbsp;индивидуальному заказу.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/37_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/37_garmony_dom.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/garmony_dom_interier/38_garmony_dom.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/garmony_dom_interier/38_garmony_dom.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">В&nbsp;результате получился живой и&nbsp;тактильный интерьер, наполненный светом, смелыми цветовыми решениями и&nbsp;интересными формами. Он&nbsp;заряжает энергией, но&nbsp;не&nbsp;сводит с&nbsp;ума. Интерьер этого дома технологичный, функциональный, удобный для жизни и&nbsp;притягательный, его хочется рассматривать, трогать и&nbsp;пробовать на&nbsp;вкус.</p>
              </div>
              <Compliment />
              <PartnersGarmInt />
            </div>
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default garmonyDomInterier