import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import { Video } from "../../subitems/hompage/video"
import mainVideo from "../../video/support.mp4"
import mainVideoMobile from "../../video/support_mob.mp4"
import Seo from "../../components/seo"

const soglasovanie = () => {
  return (
    <Layout>
      <Seo  title={"Согласование проекта дома и квартиры в Минске | I-PROJECT"} description={"Согласуем все необходимые документы для строительства или ремонта ✦ Работаем со всеми объектами ✦ Экономим ваше время ✦ Опыт более 15 лет."}
            location={"https://i-project.by/uslugi/dizajn-interera"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div class="services_video">
        <Video  mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Согласование проекта</h1>
            <p class="services_video_p">Подготовим полный пакет документов и&nbsp;согласуем проект со&nbsp;всеми государственными органами, избавив вас от&nbsp;хлопот и&nbsp;стрессов.</p>
          </div>
        </div>
      </div>
      <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/uslugi/soglasovanie/#link_1" title="Что такое согласование?" /></li>
                <li><AnchorLink to="/uslugi/soglasovanie/#link_2" title="Условия для согласования проекта" /></li>
                <li><AnchorLink to="/uslugi/soglasovanie/#link_3" title="Процесс согласования проекта" /></li>
                <li><AnchorLink to="/uslugi/soglasovanie/#link_4" title="Зачем нужна помощь специалистов?" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Прежде чем начать строительство дома или ремонт квартиры и&nbsp;реализовать все задуманное, есть один этап, опустить который никак нельзя. Речь идет о&nbsp;согласовании проекта.</p>
                    <h2 class="content_h2" id="link_1">Что такое согласование?</h2>
                    <p class="content_p">Процедура согласования&nbsp;&mdash; это проверка и&nbsp;одобрение государственными надзорными органами всех проектных решений, используемых в&nbsp;будущем строительстве, в&nbsp;соответствии с&nbsp;обязательными требованиями со&nbsp;стороны законодательства. Другими словами, согласование&nbsp;&mdash; это подтверждение того, что объект, который вы&nbsp;собираетесь строить, будет безопасным, устойчивым и&nbsp;подходить для жизни, работы или другой выбранной для осуществления в&nbsp;нем деятельности.</p>
                    <h2 class="content_h2" id="link_2">Условия для согласования проекта: где искать</h2>
                    <p class="content_p">Проект, который вы&nbsp;собираетесь реализовать, должен соответствовать строительным нормам и&nbsp;правилам (СНБ), техническому кодексу установившейся практики (ТКП), и&nbsp;всем требованиям, обозначенным в&nbsp;исходно-разрешительной документации.</p>
                  </div>
                  <div class="services_include_item services_include_item_control">
                    <h3 class="services_include_item_smtitle">Условия и&nbsp;требования, которые должны быть соблюдены, излагаются также в&nbsp;ряде документов:</h3>
                    <ul class="services_include_item_list">
                      <li>&mdash;&nbsp;архитектурно-планировочное задание (АПЗ), которое выдается территориальным органом архитектуры и&nbsp;градостроительства;</li>
                      <li>&mdash;&nbsp;специальные технические условия (СТУ) и&nbsp;требования;</li>
                      <li>&mdash;&nbsp;в&nbsp;ряде разрешений, заключений и&nbsp;др.</li>
                    </ul>
                    <p class="content_p">В&nbsp;случае, если какие-то из&nbsp;требований не&nbsp;соблюдаются, проектная документация не&nbsp;будет согласована&nbsp;и, как следствие, строительство по&nbsp;проекту будет невозможно.</p>
                  </div>
                  <section>
                    <h2 class="main_portfolio_title" id="anchor_5">Наши работы</h2>
                    <Masonry
                      breakpointCols={breakpointColumnsPortfolio}
                      className="portfolio_grid"
                      columnClassName="my-masonry-grid_column">
                      <Link to="/portfolio/interier/korolya" className="portfolio_grid_link">
                        <StaticImage src="../../images/portfolio/korolya/00_korolya.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h3>
                          <p className="portfolio_grid_block_realize">Реализовано</p>
                        </div>
                      </Link>
                      <Link to="/portfolio/interier/d3" className="portfolio_grid_link">
                        <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h3>
                          <p className="portfolio_grid_block_realize">Реализовано</p>
                        </div>
                      </Link>
                      <Link to="/portfolio/interier/sochi" className="portfolio_grid_link portfolio_grid_link_hide">
                        <StaticImage src="../../images/portfolio/sochi/00_sochi.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Дизайн интерьера в&nbsp;апарт-комплексе &laquo;Матисс&raquo; в&nbsp;г.Сочи, 45м<sup>2</sup></h3>
                        </div>
                      </Link>
                      <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
                        <StaticImage src="../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h3>
                          <p className="portfolio_grid_block_realize">Реализовано</p>
                        </div>
                      </Link>
                      <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link portfolio_grid_link_hide">
                        <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h3>
                          <p className="portfolio_grid_block_realize">Реализовано</p>
                        </div>
                      </Link>
                      <Link to="/portfolio/interier/fine" className="portfolio_grid_link portfolio_grid_link_hide">
                        <StaticImage src="../../images/portfolio/fine/00_fine.jpg" alt="" />
                        <div class="portfolio_grid_block">
                          <h3 className="portfolio_grid_block_title">Хорошее настроение. Дизайн квартиры в&nbsp;Минске, 140м<sup>2</sup></h3>
                          <p className="portfolio_grid_block_realize">Реализовано</p>
                        </div>
                      </Link>
                      <></>
                      <Link to="/portfolio" className="portfolio_grid_link_all">
                        <p className="portfolio_grid_link_all_p">Все проекты</p>
                      </Link>
                    </Masonry>
                  </section>
                  <div class="content_text">
                    <h2 class="content_h2" id="link_3">Процесс согласования проекта</h2>
                    <p class="content_p">Согласование проекта&nbsp;&mdash; довольно трудоемкий процесс, требующий немало времени, в&nbsp;зависимости от&nbsp;особенностей объекта, вида и&nbsp;масштаба проектных решений. Так, только на&nbsp;первую часть процедуры согласования может потребоваться от&nbsp;нескольких недель до&nbsp;нескольких месяцев, далее сроки согласования будут зависеть от&nbsp;скорости ведения строительных работ, т.к. надзорным органам (технадзор) потребуется воочию убедиться в&nbsp;соответствии строительных решений проектным.</p>
                    <p class="content_p">Пакет документов, разрешающий строительство жилого дома, согласуется в&nbsp;местных органах архитектуры и&nbsp;градостроительства. При успешном результате этой процедуры исполкомом выдается паспорт застройщика, который разрешает начать стройку.</p>
                    <p class="content_p">Учитывая большое количество тонкостей, особых требований со&nbsp;стороны законодательства и&nbsp;государственных организаций, которые не&nbsp;всегда просты для понимания человеку, не&nbsp;обладающему квалификацией и&nbsp;опытом в&nbsp;этой сфере, может потребоваться много времени, сил и&nbsp;нервов, чтобы закрыть этот вопрос.</p>
                    <p class="content_p">Разрешение на&nbsp;строительство возможно получить сразу только в&nbsp;том случае, если проектная документация составлена и&nbsp;оформлена грамотно и&nbsp;в&nbsp;соответствии со&nbsp;всеми требованиями. Также необходимо знать, что процесс согласования происходит по-разному для проектов, располагающихся в&nbsp;областном и&nbsp;районном центрах.</p>
                    <h2 class="content_h2" id="link_4">Зачем нужна помощь специалистов?</h2>
                    <p class="content_p">Во-первых, вы&nbsp;минимизируете риск совершения ошибки, в&nbsp;случае если занимаетесь подготовкой пакета документов самостоятельно.</p>
                    <p class="content_p">Во-вторых, вы&nbsp;экономите свое время на&nbsp;посещении десятка кабинетов государственных организаций в&nbsp;попытке получить согласование.</p>
                    <p class="content_p">За&nbsp;время работы мы&nbsp;получили достаточный объем опыта в&nbsp;процедуре согласования всех видов проектов и&nbsp;гарантируем стопроцентный результат.</p>
                  </div>
                  <div class="services_include_item services_include_item_control">
                    <h3 class="services_include_item_smtitle">Мы согласовываем:</h3>
                    <ul class="services_include_item_list">
                      <li>&mdash;&nbsp;реконструкцию частного дома, коттеджа</li>
                      <li>&mdash;&nbsp;реконструкцию и&nbsp;модернизацию здания, части здания, входной группы</li>
                      <li>&mdash;&nbsp;перепланировку квартиры, нежилого помещения</li>
                    </ul>
                    <p class="content_p">Будем рады помочь и&nbsp;взять на&nbsp;себя решение этого вопроса.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default soglasovanie
const breakpointColumnsPortfolio = {
  default: 3,
  1800: 2,
  768: 1,
  
};