import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { Faq } from "../../subitems/faq/office"


import mainVideo from "../../video/design_interiera_office.mp4"
import mainVideoMobile from "../../video/design_interiera_office_mob.mp4"

const designInterieraOfisov = () => {
  return (
    <Layout>
      <div class="services_video">
        <div>
          <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
            <source src={mainVideo} type="video/mp4" />
          </video>
          <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        </div>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Дизайн проект офиса</h1>
            <p class="services_video_p">Оценим потенциал помещения и&nbsp;разработаем уникальный проект с&nbsp;учетом фирменного стиля бренда, который будет комфортным для сотрудников и&nbsp;привлекательным для ваших клиентов.</p>
          </div>
        </div>
      </div>
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_1" title="Современный офис" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_2" title="Что входит в&nbsp;проект" /></li>
              {/* <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_7" title="Авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_8" title="Комплектация объекта" /></li>
              <li><AnchorLink to="/uslugi/dizajn-interera-ofisov/#anchor_9" title="Вопрос / ответ" /></li>
            </ul>
          </div>
        </div>
        <section class="services_diff services_diff_office">
          <StaticImage class="services_diff_office_img" src="../../images/services/services_office.jpg" alt="" />
          <div class="wrapper">
            <div class="right_content">
              <div class="services_diff_office_block">
                <h2 class="services_diff_title" id="anchor_1">Современный офис</h2>
                <div class="services_diff_text">
                  <p class="services_diff_p">Первым этапом проектирования нового интерьера является создание планировочной концепции. Основная задача&nbsp;&mdash; проработать все возможные варианты планировок и&nbsp;выбрать из&nbsp;них наилучшее, учитывая пожелания клиента, конструктивные особенности и&nbsp;технические ограничения.</p>
                </div>
                <StaticImage class="services_diff_office_img_mob" src="../../images/services/services_office.jpg" alt="" />
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
                      <div class="services_include_button">Показать все</div>
                    </ul>
                    <div class="services_include_mob_button">Список документов</div>
                    <div class="services_include_img_mob_block">
                      <h3 class="services_include_item_smtitle_mob">Документация</h3>
                      <StaticImage class="services_include_img_mob" src="../../images/services/services_include_office_1.png" alt="" />
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
                      <p class="services_include_item_list_sp">Прежде, чем приступить к&nbsp;этому этапу, просматриваем вместе примеры удачных интерьеров и(или) архитектурных объектов, разработанных как внутри нашей студии, так и&nbsp;в&nbsp;мире в&nbsp;целом. Собираем кейс понравившихся работ&nbsp;&mdash; отмечаем, что именно в&nbsp;них Вас привлекает или отталкивает. Определяемся со&nbsp;стилистическими и&nbsp;цветовыми предпочтениями.</p>
                      <li>&mdash;&nbsp;Обычно 3-5 ракурсов на&nbsp;одно помещение</li>
                      <li>&mdash;&nbsp;Совмещенная зона кухни-столовой-гостиной: 7-10 ракурсов</li>
                      <li>&mdash;&nbsp;Количество помещений, для которых требуется визуализация, уточняется индивидуально для каждого проекта</li>
                    </ul>
                    <div class="services_include_mob_button">Список документов</div>
                    <div class="services_include_img_mob_block">
                      <h3 class="services_include_item_smtitle_mob">Фотореалистичная<br />3D-визуализация</h3>
                      <StaticImage class="services_include_img_mob" src="../../images/services/services_include_office_2.png" alt="" />
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
                  <Link to="/portfolio/architecture/rekonstrukciya-protos/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/interier-protos/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/protos_interior/00_protos_interior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/baikonur" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baikonur/00_baikonur.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн офисов в&nbsp;составе ЖК&nbsp;Байконур в&nbsp;г.Москва, 120м<sup>2</sup></h3>
                    </div>
                  </Link>
                </Masonry>
              </section>
              <div class="faq" id="anchor_9">
                <h3 class="faq_title">Вопрос / ответ</h3>
                <Faq/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default designInterieraOfisov

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};