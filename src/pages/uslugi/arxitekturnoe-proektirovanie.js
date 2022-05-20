import React, { useState } from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import mainVideo from "../../video/architect.mp4"
import mainVideoMobile from "../../video/architect_mob.mp4"

const Arxitekturnoe = () => {
  const [openTop , setOpenTop] = useState(false);
  const [openBottom , setOpenBottom] = useState(false);
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleTop =()=>{
    setOpenTop(!openTop)
  }
  const toggleBottom =()=>{
    setOpenBottom(!openBottom)
  }
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList)
  }
  return (
    <Layout>
      <div class="services_video">
        <div class="services_video_here"></div>
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title services_video_title_sm">Архитектурное проектирование</h1>
            <p class="services_video_p">Разработаем индивидуальный, традиционный или нестандартный проект дома, в&nbsp;соответствии с&nbsp;вашими пожеланиями и&nbsp;персональным техническим заданием.</p>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_1" title="Что входит в&nbsp;проект" /></li>
              {/* <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_7" title="Авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_8" title="Комплектация объекта" /></li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="right_content">
            <div class="services_include" id="anchor_2">
              <h2 class="services_include_title">Что входит в&nbsp;проект:</h2>
              <div class="services_include_item">
                <h3 class="services_include_item_smtitle">Эскизный проект</h3>
                <div class="services_include_text">
                  <ul class={"services_include_item_list " + (openBottom ? " open": "")}>
                    <li>1. Ведомость чертежей</li>
                    <li>2. Архитектурно планировочная концепция: Планы этажей с&nbsp;расстановкой мебели и&nbsp;оборудования. 3D-визуализация фасада здания</li>
                    <li>3. Чертежи фасадов здания в массах с нанесением основных размеров</li>
                    <li>4. Цветовое решение фасада здания</li>
                    <li>5. Планировочная схема участка</li>
                    <p class="services_include_item_list_p">Общий объем: 15&ndash;20 листов&nbsp;А3</p>
                  </ul>
                  <button onClick={toggleBottom} class={"services_include_mob_button" + ( openBottom?" open" : "")}>
                    <p>Список документов</p>
                  </button>
                  <div class="services_include_img_mob_block">
                    <h3 class="services_include_item_smtitle_mob">Эскизный проект</h3>
                    <StaticImage class="services_include_img_mob" src="../../images/services/services_include_ap_1.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="services_include_item services_include_item_control">
                <h3 class="services_include_item_smtitle">Смежные разделы</h3>
                <ul class="services_include_item_list">
                  <li>1. Конструктивные решения (КР)</li>
                  <p class="services_include_item_list_p">Общий объем: 50-100 листов формата А2, А3, А4</p>
                  <li>2. Отопление и&nbsp;вентиляция (ОВ)</li>
                  <li>3. Водопровод и&nbsp;канализация (ВК)</li>
                  <li>4. Электричество и&nbsp;автоматизация (ЭО + &laquo;Умный Дом&raquo;)</li>
                  <li>5. Инженерная геодезия (топосъемка)</li>
                  <li>6. Инженерная геология (бурение скважин, анализ грунта)</li>
                  <p class="services_include_item_list_p">Общий объем: 50-100 листов формата А2, А3, А4</p>
                </ul>
              </div>
              <div class="services_include_item">
                <h3 class="services_include_item_smtitle">Архитектурные решения</h3>
                <div class="services_include_text">
                  <ul class={"services_include_item_list" + ( openTop?" open" : "")}>
                    <li>1. Общие данные</li>
                    <li>2. Ситуационный план</li>
                    <li>3. План здания</li>
                    <li>4. Укрупненные фрагменты необходимых участков плана здания</li>
                    <li>5. План кровли</li>
                    <div class={"services_include_list_hidden" + ( openTop?" open" : "")}>
                      <li>6. Схема водосточной системы</li>
                      <li>7. Необходимые укрупненные фрагменты и&nbsp;узлы кровли</li>
                      <li>8. Чертежи фасада здания подробные</li>
                      <li>9. Укрупненные фрагменты и&nbsp;узлы необходимых участков фасада здания</li>
                      <li>10. Схема облицовки фасада</li>
                      <li>11. Спецификация заполнения оконных проемов, схемы окон</li>
                      <li>12. Спецификация заполнения дверных проемов, схемы дверей</li>
                      <li>13. Паспорт цветового решения фасада здания</li>
                      <li>14. Ведомость наружной отделки</li>
                      <li>15. Фотореалистичная 3D-визуализации с&nbsp;детализацией материалов, цветов и&nbsp;фактур.</li>
                      <p class="services_include_item_list_p">Общий объем: 50&ndash;100 листов А3, А2</p>
                    </div>
                    <button onClick={toggleTop}  class="services_include_button">{openTop? 'Свернуть все' : 'Показать все'}</button>
                  </ul>
                  <button onClick={toggleTop} class={"services_include_mob_button" + ( openTop?" open" : "")}>
                    <p>Список документов</p>
                  </button>
                  <div class="services_include_img_mob_block services_include_img_ap_mob_block">
                    <h3 class="services_include_item_smtitle_mob">Архитектурные решения</h3>
                    <StaticImage class="services_include_img_mob services_include_img_ap_mob" src="../../images/services/services_include_ap_2.png" alt="" />
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
                <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/luban/00_luban.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/rekonstrukciya-protos/" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/dom-u-more" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/dom_u_more/00_dom_u_more.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/shale" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/shale/00_shale.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Современное шале. Архитектура дома, 300м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/sosni" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/sosni/00_sosni.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом в&nbsp;сосновом бору. Архитектура, 750м<sup>2</sup></h3>
                  </div>
                </Link>
              </Masonry>
            </section>
            <section class="services_process" id="anchor_6">
              <div class="services_process_block">
                <h2 class="services_process_title">Как строится работа</h2>
                <div class="services_process_text">
                  <div class="services_process_left">
                    <p class="services_process_left_1">Мы&nbsp;работаем полным циклом от&nbsp;проектирования до&nbsp;реализации проекта с&nbsp;его комплектацией и&nbsp;авторским надзором. В&nbsp;зависимости от&nbsp;типа объекта или пожелания клиента мы&nbsp;можем корректировать наш комплекс услуг.</p>
                    <p class="services_process_left_2">Если мы&nbsp;нашли общий язык и&nbsp;вам подошли наши условия&nbsp;&mdash; заключаем договор и&nbsp;приступаем к&nbsp;работе:</p>
                  </div>
                  <div class={"services_process_text_right" + ( openProcessList?" open" : "")}>
                    <div class="services_process_grid">
                      <p class="services_process_num">1</p>
                      <p class="services_process_text_right_p">Изучаем исходные данные, работаем с&nbsp;пожеланиями, подбираем аналоги.</p>
                      <p class="services_process_num">2</p>
                      <p class="services_process_text_right_p">При необходимости, производим замеры и&nbsp;фото-фиксацию.</p>
                      <p class="services_process_num">3</p>
                      <p class="services_process_text_right_p">Придумываем архитектурно-планировочную концепцию.</p>
                    </div>
                    <button onClick={toggleProcessList} class="services_process_button">
                      <p>Все шаги</p>
                    </button>
                    <div class="services_process_grid services_process_grid_hidden">
                      <p class="services_process_num">4</p>
                      <p class="services_process_text_right_p">Получаем разрешение на&nbsp;проектно-изыскательные работы и&nbsp;строительство.</p>
                      <p class="services_process_num">5</p>
                      <p class="services_process_text_right_p">Запускаем геодезистов и&nbsp;геологов, которые осуществляют топографическую съемку, бурят скважины, анализируют грунты.</p>
                      <p class="services_process_num">6</p>
                      <p class="services_process_text_right_p">При необходимости, если объект строится не&nbsp;с&nbsp;чистого листа, заказываем техническое обследование существующих конструкций.</p>
                      <p class="services_process_num">7</p>
                      <p class="services_process_text_right_p">Разрабатываем проект.</p>
                      <p class="services_process_num">8</p>
                      <p class="services_process_text_right_p">Согласовываем и&nbsp;приступаем к&nbsp;реализации.</p>
                      <p class="services_process_num">9</p>
                      <p class="services_process_text_right_p">Сопровождаем строительство и&nbsp;комплектуем объект всеми необходимыми материалами и&nbsp;оборудованием.</p>
                      <p class="services_process_num">X</p>
                      <p class="services_process_text_right_p">Одновременно с&nbsp;архитектурой, занимаемся разработкой и&nbsp;реализацией дизайн-проекта, с&nbsp;учетом всех конструктивных и&nbsp;инженерных особенностей здания.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services_process_link_block">
                <p class="services_process_link_block_p">Как мы работаем</p>
                <Link to="/process/" className="services_process_link">Подробнее о процессе</Link>
              </div>
            </section>
            <section class="services_term">
              <div class="services_term_left">
                <p class="services_term_left_text">Сроки проектирования дизайна интерьера квартиры:</p>
                <p class="services_term_left_block">от&nbsp;30&nbsp;рабочих дней</p>
              </div>
              <div class="services_term_right">
                <ul>
                  <li class="services_term_right_li">Изучение вашего проекта до&nbsp;15&nbsp;рабочих дней</li>
                  <li class="services_term_right_li">Планировочная концепция до&nbsp;15&nbsp;рабочих дней</li>
                  <li class="services_term_right_li">Проектная документация от&nbsp;30&nbsp;до&nbsp;60&nbsp;рабочих дней</li>
                  <li class="services_term_right_li">Визуализация от&nbsp;30&nbsp;до&nbsp;60&nbsp;рабочих дней</li>
                </ul>
              </div>
            </section>
            <section class="services__add">
              <div class="services__add_item services__add_support" id="anchor_7">
                <div class="services__add_item_block">
                  <h2 class="services__add_item_title">Авторское сопровождение</h2>
                  <div class="services__add_item_text">
                    <p>Выстраиваем схему выполнения проектных предложений и&nbsp;контролируем выполнение работ подрядчиков. Таким образом исключаем возможность возникновения ошибок или недочетов на&nbsp;смежных участках работ.</p>
                    <p class="services__add_item_text_hidden">Мы&nbsp;не&nbsp;бросаем свою работу на&nbsp;половине пути и&nbsp;сопровождаем проекты до&nbsp;их&nbsp;полной реализации.</p>
                  </div>
                  <Link to="/uslugi/avtorskoe-soprovozhdenie/" className="services__add_item_link">Подробнее</Link>
                </div>
                <div class="services__add_support_block_img">
                  <StaticImage className="services__add_support_img" src="../../images/services/services_add_support.jpg" alt="" />
                </div>
                <Link to="/uslugi/avtorskoe-soprovozhdenie/" className="services__add_item_link_mob">Подробнее</Link>
              </div>
              <div class="services__add_item services__add_complete" id="anchor_8">
                <div class="services__add_item_block">
                  <h2 class="services__add_item_title">Комплектация объекта</h2>
                  <div class="services__add_item_text">
                    <p>Мы&nbsp;берем на&nbsp;себя организацию всех мероприятий, связанных с&nbsp;закупкой и&nbsp;доставкой всех необходимых материалов, образцов, мебели, оборудования.</p>
                    <p>Согласование поставок материалов с&nbsp;графиком строительных работ.</p>
                  </div>
                  <Link to="/uslugi/komplektaciya-obekta/" className="services__add_item_link">Подробнее</Link>
                </div>
                <div class="services__add_complete_block_img">
                  <StaticImage className="services__add_complete_img" src="../../images/services/services_add_complete.png" alt="" />
                </div>
                <Link to="/uslugi/komplektaciya-obekta/" className="services__add_item_link_mob">Подробнее</Link>
              </div>
            </section>
          </div>     
        </div>
      </div>
    </Layout>
  )
}

export default Arxitekturnoe

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};