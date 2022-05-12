import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import mainVideo from "../../video/design_interiera.mp4"
import mainVideoMobile from "../../video/design_interiera_mob.mp4"

const designInteriera = () => {
  return (
    <Layout>
      <div class="services_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Дизайн-проект квартиры</h1>
            <p class="services_video_p">Создадим не&nbsp;просто красивый интерьер, но&nbsp;удобное для жизни пространство, в&nbsp;котором вы&nbsp;сможете чувствовать себя комфортно в&nbsp;любое время.</p>
          </div>
        </div>
      </div>
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_1" title="Планировка квартиры" /></li>
              {/* <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_2" title="Что входит в&nbsp;проект" /></li> */}
              {/* <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_7" title="Авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_8" title="Комплектация квартиры" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera/#anchor_9" title="Вопрос / ответ" /></li>
            </ul>
          </div>
        </div>
        <section class="services_diff services_diff_flat">
          <StaticImage class="services_diff_flat_img" src="../../images/services/services_flat.jpg" alt="" />
          <div class="wrapper">
            <div class="right_content">
              <div class="services_diff_flat_block">
                <h2 class="services_diff_title" id="anchor_1">Планировка квартиры</h2>
                <div class="services_diff_text">
                  <p class="services_diff_p">Первым этапом проектирования нового интерьера является создание планировочной концепции. Основная задача&nbsp;&mdash; проработать все возможные варианты планировок и&nbsp;выбрать из&nbsp;них наилучшее, учитывая пожелания клиента, конструктивные особенности и&nbsp;технические ограничения.</p>
                </div>
                <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_flat.jpg" alt="" />
                <div class="services_diff_text">
                  <h3 class="services_diff_smalltitle">Необходимость перепланировки</h3>
                  <p class="services_diff_p">Основная задача Застройщика, который продает вам квартиру,&nbsp;&mdash; извлечь из&nbsp;объекта максимальную прибыль, не&nbsp;нарушая существующих строительных норм. Типовые планировочные решения далеки от&nbsp;совершенства, пространство внутри квартиры распределено как минимум не&nbsp;оптимально, а&nbsp;иногда и&nbsp;попросту не&nbsp;рационально.</p>
                </div>
                <div class="services_diff_text">
                  <h3 class="services_diff_smalltitle">Количество планировочных концепций</h3>
                  <p class="services_diff_p">Мы&nbsp;знаем как нивелировать недостатки помещений, грамотно распределить пространство для работы и&nbsp;отдыха, выделив при этом достаточно места для хранения, хозяйственных и&nbsp;бытовых нужд. Сколько планировочных концепций мы&nbsp;делаем? &mdash;&nbsp;столько, сколько потребуется, пока не&nbsp;найдем идеальное решение. Разумная и&nbsp;креативная планировочная концепция&nbsp;&mdash; залог удобного и&nbsp;красивого интерьера.</p>
                </div>
                {/* <div class="services_diff_text">
                  <p class="services_diff_p"></p>
                </div> */}

              </div>
            </div> 
          </div> 
        </section>
        <div class="wrapper">
          <div class="right_content">
            <div class="content_images">
              <div class="services_include" id="anchor_2">
                <h2 class="services_include_title">Что входит в&nbsp;проект:</h2>
                <div class="services_include_item">
                  <h3 class="services_include_item_smtitle">Документация</h3>
                  <div class="services_include_text">
                    <ul class="services_include_item_list">
                      <li>1. Планировочная концепция (несколько вариантов)</li>
                      <li>2. Обмерочные чертежи (планы)</li>
                      <li>3. Планы с&nbsp;обозначением демонтируемых элементов стен, перегородок</li>
                      <li>4. Планы с&nbsp;обозначением возводимых элементов стен, перегородок</li>
                      <li>5. Планы с&nbsp;расстановкой мебели и&nbsp;привязками сантехнического оборудования</li>
                      <div class="services_include_list_hidden">
                        <li class="services_include_li">Планы с&nbsp;обозначением напольных покрытий</li>
                        <li class="services_include_li">Схема подогрева полов</li>
                        <li class="services_include_li">Планы подвесных потолков</li>
                        <li class="services_include_li">Схема установки кондиционеров</li>
                        <li class="services_include_li">Сечения подвесных потолков</li>
                        <li class="services_include_li">Планы установки светильников и&nbsp;выключателей</li>
                        <li class="services_include_li">Спецификация светильников и&nbsp;выключателей</li>
                        <li class="services_include_li">Планы установки розеток</li>
                        <li class="services_include_li">Спецификация розеток</li>
                        <li class="services_include_li">Ведомость внутренней отделки помещений</li>
                        <li class="services_include_li">Разрезы и(или) развертки по&nbsp;всем стенам с&nbsp;нанесением основных размеров</li>
                        <li class="services_include_li">Разрезы и(или) развертки по&nbsp;всем стенам в&nbsp;цвете</li>
                        <li class="services_include_li">Узлы, фрагменты (укрупненные с&nbsp;размерами)</li>
                        <p class="services_include_li">Общий объем: 30–50 листов А3, А4</p>
                      </div>
                      <div class="services_include_button">Показать все</div>
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_flat_1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="services_include_item services_include_item_control">
                  <h3 class="services_include_item_smtitle">Контроль за&nbsp;подрядчиками</h3>
                  <ul class="services_include_item_list">
                    <li>&mdash;&nbsp;Схемы и&nbsp;расчет системы отопления, спецификация оборудования</li>
                    <li>&mdash;&nbsp;Схемы и&nbsp;расчет системы вентиляции и&nbsp;кондиционирования помещений, спецификация оборудования</li>
                    <li>&mdash;&nbsp;Схемы и&nbsp;расчет системы управления электроосвещением и&nbsp;электрооборудованием &laquo;Умный Дом&raquo;, спецификация оборудования</li>
                    <li>&mdash;&nbsp;Схемы раскладки плитки, спецификация элементов</li>
                  </ul>
                </div>
                <div class="services_include_item">
                  <h3 class="services_include_item_smtitle">Фотореалистичная 3D-визуализация</h3>
                  <div class="services_include_text">
                    <ul class="services_include_item_list">
                      <li>&mdash;&nbsp;Обычно 3-5 ракурсов на&nbsp;одно помещение</li>
                      <li>&mdash;&nbsp;Совмещенная зона кухни-столовой-гостиной: 7-10 ракурсов</li>
                      <li>&mdash;&nbsp;Количество помещений, для которых требуется визуализация, уточняется индивидуально для каждого проекта, но, как минимум, необходимо визуализировать основные помещения: прихожая, гостиная, кухня, столовая, спальня.</li>
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_flat_2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <section>
                <h2 class="main_portfolio_title" id="anchor_5">Наши работы</h2>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="portfolio_grid"
                  columnClassName="my-masonry-grid_column">
                  <Link to="/portfolio/interier/korolya/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/korolya/00_korolya.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/d3/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/color/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/color/00_color.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Энергия цвета. Интерьер квартиры в&nbsp;Минске, 120м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/sochi/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/sochi/00_sochi.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дизайн интерьера в&nbsp;апарт-комплексе &laquo;Матисс&raquo; в&nbsp;г.Сочи, 45м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                </Masonry>
              </section>
              <div class="faq" id="anchor_9">
                <h3 class="faq_title">Вопрос / ответ</h3>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Для чего нужен дизайн проект?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Словосочетание дизайн проект состоит из&nbsp;двух составляющих его слов/понятий&nbsp;&mdash; дизайн и&nbsp;проект. Дизайн интерьера нужен для того&nbsp;же, для чего в&nbsp;принципе нужен любой дизайн,&nbsp;&mdash; для удобства и&nbsp;красоты, а&nbsp;проект необходим, т.к. удобство нужно продумать, а&nbsp;красоту придумать. Для этого нужно понимать как работают законы эргономики, композиции и&nbsp;цвета, ориентироваться в&nbsp;планировочных нормах и&nbsp;конструктивных особенностях, инженерных сетях и&nbsp;коммуникациях, свойствах материалов и&nbsp;специфике самого разного оборудования.</p>
                    <p>В&nbsp;дизайн проект входят все документы, которые позволяют построить новый интерьер в&nbsp;вашей квартире. Это дает возможность рассчитать стоимость всех работ и&nbsp;предусмотреть все возможные проблемы на&nbsp;этапе проектирования.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Сколько времени вы&nbsp;делаете дизайн-проект квартиры?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>В среднем около 60 дней.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Будет&nbsp;ли учтен бюджет при разработке дизайн проекта?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Мы&nbsp;можем точно рассчитать все затраты на&nbsp;строительные работы и&nbsp;черновые материалы. Затраты&nbsp;же на&nbsp;чистовые материалы, мебель и&nbsp;оборудование удобнее подсчитывать в&nbsp;процессе комплектации, и&nbsp;эта услуга у&nbsp;нас совмещена с&nbsp;услугой авторского сопровождения.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>В&nbsp;каком стиле дизайна вы&nbsp;работаете?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Мы&nbsp;работаем во&nbsp;всех стилистических направлениях без ограничений.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Как оплачивается дизайн-проект?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Дизайн-проект оплачивается в&nbsp;4&nbsp;этапа по&nbsp;25% от&nbsp;стоимости, наличными или переводом на&nbsp;расчетный счет.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Сколько времени понадобится на&nbsp;ремонт квартиры?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>От&nbsp;6-ти до&nbsp;12-ти месяцев. Важно также понимать, что речь идет о&nbsp;создании уникального интерьера по&nbsp;индивидуальному проекту, не&nbsp;путать с&nbsp;так называемым &laquo;евроремонтом&raquo;.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </Layout>
  )
}

export default designInteriera

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};
