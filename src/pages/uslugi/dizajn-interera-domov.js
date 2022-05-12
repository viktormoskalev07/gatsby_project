import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import mainVideo from "../../video/design_interiera_house.mp4"
import mainVideoMobile from "../../video/design_interiera_house_mob.mp4"

const designInterieraDomov = () => {
  return (
    <Layout>
      <div class="services_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Дизайн-проект частного дома</h1>
            <p class="services_video_p">Воплотим ваши мечты и&nbsp;идеи в&nbsp;жизнь благодаря слаженной работе грамотных специалистов&nbsp;&mdash; архитекторов, дизайнеров и&nbsp;строителей.</p>
          </div>
        </div>
      </div>
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_1" title="Автоматизация дома, &laquo;умный дом&raquo;" /></li>
              {/* <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_2" title="Что входит в&nbsp;проект" /></li> */}
              {/* <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_7" title="Авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_8" title="Комплектация объекта" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_9" title="Вопрос / ответ" /></li>
            </ul>
          </div>
        </div>
        <section class="services_diff services_diff_house">
          <StaticImage class="services_diff_house_img" src="../../images/services/services_house.jpg" alt="" />
          <div class="wrapper">
            <div class="right_content">
              <div class="services_diff_house_block">
                <h2 class="services_diff_title" id="anchor_1">Автоматизация дома, &laquo;умный дом&raquo;</h2>
                <div class="services_diff_text">
                  <p class="services_diff_p">Понятие современный дом тесно связано с&nbsp;автоматизацией систем контроля климата, освещения и&nbsp;безопасности. Все управление дублируется на&nbsp;смартфон/планшет/компьютер, что очень удобно и&nbsp;позволяет сэкономить время.</p>
                </div>
                <StaticImage class="services_diff_house_img_mob" src="../../images/services/services_house.jpg" alt="" />
                <div class="services_diff_text">
                  <h3 class="services_diff_smalltitle">Основные составляющие умного дома:</h3>
                  <p class="services_diff_p">Система управления климатом, которая регулирует отопление (включая радиаторы, внутрипольные конвекторы и&nbsp;подогрев пола), кондиционирование, вентиляцию. Все функционирует на&nbsp;основании показаний климатических датчиков, а&nbsp;также настроенных пользовательских режимов, с&nbsp;учетом поры года, времени суток, распорядка дня.</p>
                  <p class="services_diff_p">Система управления освещением регулируют работу светильников внутри и&nbsp;снаружи дома. Программируются определенные сценарии, зависящие от&nbsp;времени суток, или атмосферы, которую необходимо создать. Датчики присутствия в&nbsp;определенных местах позволяют рационально тратить электроэнергию, не&nbsp;задумываясь при этом&nbsp;&mdash; какую клавишу на&nbsp;выключателе нужно нажимать.</p>
                  <p class="services_diff_p">Системы безопасности и&nbsp;охранные сигнализации. Понятие безопасности в&nbsp;&laquo;умном доме&raquo; имеет более широкий смысл и&nbsp;помогает защитить здание не&nbsp;только от&nbsp;нежелательного проникновения, но&nbsp;и&nbsp;от&nbsp;утечек газа, пожаров и&nbsp;протечек воды. Обилие датчиков позволяет не&nbsp;только контролировать, но&nbsp;и&nbsp;предотвращать аварийные ситуации.</p>
                </div>
              </div>
            </div> 
          </div>
          {/* <div class="wrapper">
            <div class="services_cert">
              <StaticImage src="../../images/rewards/reward_gira.png" alt="Диплом gira" class="services_cert_img1" />
              <StaticImage src="../../images/rewards/reward_gira_mob.png" alt="Приложение gira" class="services_cert_img2" />
            </div>
          </div> */}
          
          
        </section>
        <div class="wrapper">
          <div class="right_content">
            <div class="content_images">
              {/* <div class="services_include" id="anchor_2">
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
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_house_1.png" alt="" />
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
                      <li>&mdash;&nbsp;Количество помещений, для которых требуется визуализация, уточняется индивидуально для каждого проекта, но, как минимум, необходимо визуализировать основные помещения: прихожая, гостиная, кухня, столовая, жилые комнаты (спальни хозяйские и&nbsp;детские).</li>
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_house_2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
              <section>
                <h2 class="main_portfolio_title" id="anchor_5">Наши работы</h2>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="portfolio_grid"
                  columnClassName="my-masonry-grid_column">
                  <Link to="/portfolio/architecture/dom-u-more" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/dom_u_more/00_dom_u_more.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/luxury" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/luxury/00_luxury.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Luxury house. Интерьер дома под Минском, 400м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/house-minsk" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/house_minsk/00_house_minsk.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дизайн интерьера дома под Минском, 250м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/design-interier-1" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/design_interier_1/00_design_interier_1.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 1000м<sup>2</sup></h2>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/zelenyi" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/zelenyi/00_zelenyi.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h2>
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
                    <p>Для того чтобы сделать дизайн проект дома, требуется больше компетенций и&nbsp;опыта, чем для разработки <a href="/uslugi/dizajn-interera" target="_blank">дизайн проекта квартиры</a>. Наличие архитектурного образования у&nbsp;дизайнера в&nbsp;легких случаях приветствуется, а&nbsp;в&nbsp;трудных&nbsp;&mdash; требуется.</p>
                    <p>В&nbsp;состав дизайн проекта входят все документы, позволяющие построить новый интерьер в&nbsp;вашем доме.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Сколько времени вы&nbsp;делаете дизайн-проект дома?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Около 90&nbsp;дней занимает разработка дизайн-проекта дома. На&nbsp;сроки проектирования может влиять размер дома и&nbsp;его состояние.</p>
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
                    <p>Работаем во&nbsp;всех стилистических направлениях, ориентируемся на&nbsp;пожелания наших клиентов.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Занимаетесь&nbsp;ли вы&nbsp;дизайном фасадов и&nbsp;ландшафтным дизайном?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Да, занимаемся. Мы&nbsp;делаем проекты модернизации и&nbsp;реконструкции фасадов, занимаемся ландшафтным дизайном совместно с&nbsp;подрядчиками и&nbsp;делаем индивидуальные архитектурные проекты домов с&nbsp;чистого листа.</p>
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
                    <h4>Сколько времени занимает строительство дома?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>В&nbsp;среднем, строительство дома занимает около года. Еще около года потребуется на&nbsp;обустройство интерьера дома и&nbsp;прилегающей территории.</p>
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

export default designInterieraDomov

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};