import React, { useState } from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { Faq } from "../../subitems/faq/house"

import { Video } from "../../subitems/hompage/video"
import mainVideo from "../../video/design_interiera_house.mp4"
import mainVideoMobile from "../../video/design_interiera_house_mob.mp4"
import Seo from "../../components/seo"

const DesignInterieraDomov = () => {
  const [openTop , setOpenTop] = useState(false);
  const [openBottom , setOpenBottom] = useState(false);
  const [openDiffList , setopenDiffList] = useState(false);
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleTop =()=>{
    setOpenTop(!openTop)
  }
  const toggleBottom =()=>{
    setOpenBottom(!openBottom)
  }
  const toggleDiffList =()=>{
    setopenDiffList(!openDiffList)
  }
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList)
  }
  return (
    <Layout>
      <Seo  title={"Дизайн проект частного дома в Минске | I-PROJECT"} description={"Проектируем и реконструируем частные дома, загородные дома и коттеджи любой сложности. Реализованные объекты ✦ Реконструкция фасада ✦ Опыт более 15 лет."}
            location={"https://www.i-project.by/uslugi/dizajn-interera-domov"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <div class="services_video">
        <Video  mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Дизайн проект частного дома</h1>
            <p class="services_video_p">Воплотим ваши мечты и&nbsp;идеи в&nbsp;жизнь благодаря слаженной работе грамотных специалистов&nbsp;&mdash; архитекторов, дизайнеров и&nbsp;строителей.</p>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_1" title="Что входит в&nbsp;проект" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-domov/#anchor_2" title="Автоматизация дома, &laquo;умный дом&raquo;" /></li>
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
        <div class="wrapper">
          <div class="right_content">
            <div class="services_include" id="anchor_1">
              <h2 class="services_include_title">Что входит в&nbsp;проект:</h2>
              <div class="services_include_item">
                <h3 class="services_include_item_smtitle">Документация</h3>
                <div class="services_include_text">
                  <ul class={"services_include_item_list  " + ( openTop?" open" : "")}>
                    <li>1. Планировочная концепция (несколько вариантов)</li>
                    <li>2. Обмерочные чертежи (планы)</li>
                    <li>3. Планы с&nbsp;обозначением демонтируемых элементов стен, перегородок</li>
                    <li>4. Планы с&nbsp;обозначением возводимых элементов стен, перегородок</li>
                    <li>5. Планы с&nbsp;расстановкой мебели и&nbsp;привязками сантехнического оборудования</li>
                    <div class={"services_include_list_hidden" + ( openTop?" open" : "")}>
                      <li>6. Планы с&nbsp;обозначением напольных покрытий</li>
                      <li>7. Схема подогрева полов</li>
                      <li>8. Планы подвесных потолков</li>
                      <li>9. Схема установки кондиционеров</li>
                      <li>10. Сечения подвесных потолков</li>
                      <li>11. Планы установки светильников и&nbsp;выключателей</li>
                      <li>12. Спецификация светильников и&nbsp;выключателей</li>
                      <li>13. Планы установки розеток</li>
                      <li>14. Спецификация розеток</li>
                      <li>15. Ведомость внутренней отделки помещений</li>
                      <li>16. Разрезы и(или) развертки по&nbsp;всем стенам с&nbsp;нанесением основных размеров</li>
                      <li>17. Разрезы и(или) развертки по&nbsp;всем стенам в&nbsp;цвете</li>
                      <li>18. Узлы, фрагменты (укрупненные с&nbsp;размерами)</li>
                      <p class="services_include_item_list_p">Общий объем: 30–50 листов А3, А4</p>
                    </div>
                    <button onClick={toggleTop}  class="services_include_button">{openTop? 'Свернуть все' : 'Показать все'}</button>
                  </ul>
                  <button onClick={toggleTop} class={"services_include_mob_button" + ( openTop?" open" : "")}>
                    <p>Список документов</p>
                  </button>
                  <div class="services_include_img_mob_block">
                    <h3 class="services_include_item_smtitle_mob">Документация</h3>
                    <StaticImage class="services_include_img_mob" src="../../images/services/services_include_house_1.png" alt="" />
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
                  <ul class={"services_include_item_list " + (openBottom ? " open": "")}>
                    <p class="services_include_item_list_sp">Прежде, чем приступить к&nbsp;этому этапу, просматриваем вместе примеры удачных интерьеров и(или) архитектурных объектов, разработанных как внутри нашей студии, так и&nbsp;в&nbsp;мире в&nbsp;целом. Собираем кейс понравившихся работ&nbsp;&mdash; отмечаем, что именно в&nbsp;них Вас привлекает или отталкивает. Определяемся со&nbsp;стилистическими и&nbsp;цветовыми предпочтениями.</p>
                    <li>&mdash;&nbsp;Обычно 3-5 ракурсов на&nbsp;одно помещение</li>
                    <li>&mdash;&nbsp;Совмещенная зона кухни-столовой-гостиной: 7-10 ракурсов</li>
                    <li>&mdash;&nbsp;Количество помещений, для которых требуется визуализация, уточняется индивидуально для каждого проекта, но, как минимум, необходимо визуализировать основные помещения: прихожая, гостиная, кухня, столовая, жилые комнаты (спальни хозяйские и&nbsp;детские).</li>
                  </ul>
                  <button onClick={toggleBottom} class={"services_include_mob_button" + ( openBottom?" open" : "")}>
                    <p>Список документов</p>
                  </button>
                  <div class="services_include_img_mob_block">
                    <h3 class="services_include_item_smtitle_mob">Фотореалистичная<br />3D-визуализация</h3>
                    <StaticImage class="services_include_img_mob" src="../../images/services/services_include_house_2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="services_diff services_diff_house">
          <StaticImage class="services_diff_house_img" src="../../images/services/services_house.jpg" alt="" />
          <div class="wrapper">
            <div class="right_content">
              <div class={"services_diff_house_block" + ( openDiffList?" open" : "")}>
                <h2 class="services_diff_title" id="anchor_2">Автоматизация дома, &laquo;умный дом&raquo;</h2>
                <div class="services_diff_text">
                  <p class="services_diff_p">Понятие современный дом тесно связано с&nbsp;автоматизацией систем контроля климата, освещения и&nbsp;безопасности. Все управление дублируется на&nbsp;смартфон/планшет/компьютер, что очень удобно и&nbsp;позволяет сэкономить время.</p>
                </div>
                <div class="services_diff_text_hidden">
                  <StaticImage class="services_diff_house_img_mob" src="../../images/services/services_house.jpg" alt="" />
                  <div class="services_diff_text">
                    <h3 class="services_diff_smalltitle">Основные составляющие умного дома:</h3>
                    <p class="services_diff_p">Система управления климатом, которая регулирует отопление (включая радиаторы, внутрипольные конвекторы и&nbsp;подогрев пола), кондиционирование, вентиляцию. Все функционирует на&nbsp;основании показаний климатических датчиков, а&nbsp;также настроенных пользовательских режимов, с&nbsp;учетом поры года, времени суток, распорядка дня.</p>
                    <p class="services_diff_p">Система управления освещением регулируют работу светильников внутри и&nbsp;снаружи дома. Программируются определенные сценарии, зависящие от&nbsp;времени суток, или атмосферы, которую необходимо создать. Датчики присутствия в&nbsp;определенных местах позволяют рационально тратить электроэнергию, не&nbsp;задумываясь при этом&nbsp;&mdash; какую клавишу на&nbsp;выключателе нужно нажимать.</p>
                    <p class="services_diff_p">Системы безопасности и&nbsp;охранные сигнализации. Понятие безопасности в&nbsp;&laquo;умном доме&raquo; имеет более широкий смысл и&nbsp;помогает защитить здание не&nbsp;только от&nbsp;нежелательного проникновения, но&nbsp;и&nbsp;от&nbsp;утечек газа, пожаров и&nbsp;протечек воды. Обилие датчиков позволяет не&nbsp;только контролировать, но&nbsp;и&nbsp;предотвращать аварийные ситуации.</p>
                  </div>
                </div>
                <button onClick={toggleDiffList}  class="services_diff_button">{openDiffList? 'Свернуть все' : 'Показать все'}</button>
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
            <section>
              <h2 class="main_portfolio_title" id="anchor_5">Наши работы</h2>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="portfolio_grid"
                columnClassName="my-masonry-grid_column">
                <Link to="/portfolio/architecture/dom-u-more" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/dom_u_more/00_dom_u_more.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/luxury" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/luxury/00_luxury.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Luxury house. Интерьер дома под Минском, 400м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/house-minsk" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/house_minsk/00_house_minsk.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн интерьера дома под Минском, 250м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/design-interier-1" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/design_interier_1/00_design_interier_1.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 1000м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/zelenyi" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/zelenyi/00_zelenyi.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h3>
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
                      <p class="services_process_text_right_p">Выезжаем на&nbsp;объект&nbsp;&mdash; анализируем, осуществляем замер, производим фотофиксацию.</p>
                      <p class="services_process_num">2</p>
                      <p class="services_process_text_right_p">Делаем обмерочные чертежи (планы, разрезы, сечения).</p>
                      <p class="services_process_num">3</p>
                      <p class="services_process_text_right_p">Создаем несколько вариантов планировочной концепции (до&nbsp;тех пор, пока не&nbsp;получим нужное нам решение).</p>
                    </div>
                    <button onClick={toggleProcessList} class="services_process_button">
                      <p>Все шаги</p>
                    </button>
                    <div class="services_process_grid services_process_grid_hidden">
                      <p class="services_process_num">4</p>
                      <p class="services_process_text_right_p">Создаем образ интерьера в&nbsp;виде фотореалистичной 3D-визуализации.</p>
                      <p class="services_process_num">5</p>
                      <p class="services_process_text_right_p">Разрабатываем проектную документацию.</p>
                      <p class="services_process_num">6</p>
                      <p class="services_process_text_right_p">Получаем разрешение на&nbsp;строительство и&nbsp;приступаем к&nbsp;реализации.</p>
                      <p class="services_process_num">7</p>
                      <p class="services_process_text_right_p">Сопровождаем строительство и&nbsp;комплектуем объект всеми необходимыми материалами, мебелью, оборудованием.</p>
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
                <p class="services_term_left_text">Сроки проектирования дизайна интерьера дома:</p>
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
            <div class="faq" id="anchor_9">
              <h3 class="faq_title">Вопрос / ответ</h3>
              <Faq/>
            </div>
          </div>     
        </div>
      </div>
    </Layout>
  )
}

export default DesignInterieraDomov

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};