import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import { Video } from "../../subitems/hompage/video"
import mainVideo from "../../video/complectation.mp4"
import mainVideoMobile from "../../video/complectation_mob.mp4"
import Seo from "../../components/seo"

const komplektaciyaObekta = () => {
  return (
    <Layout>
      <Seo  title={"Комплектация проекта материалами | I-PROJECT"} description={"Мы берем на себя организацию всех мероприятий, связанных с закупкой и доставкой всех необходимых материалов ✦ Закупка материалов ✦ Согласование поставок."}
            location={"https://i-project.by/uslugi/dizajn-interera"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div class="services_video">
        <Video  mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Комплектация объекта</h1>
            <p class="services_video_p">Организуем процесс по&nbsp;поиску и&nbsp;закупке необходимых материалов и&nbsp;мебели. Работаем только с&nbsp;надежными поставщиками, которые отвечают за&nbsp;качество приобретаемой продукции и&nbsp;соблюдение сроков.</p>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_1" title="Что такое комплектация" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_2" title="Этап проектирования" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_3" title="Этап строительства" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_4" title="Что входит в&nbsp;услугу" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_5" title="Стоимость" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_6" title="Портфолио" /></li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="right_content">
            <div class="content_images">
              <div class="wrapper_article">
                <div class="content_text" id="anchor_1">
                  <p class="content_p">Под авторским сопровождением понимается контроль всех процессов, связанных со&nbsp;строительством и(или) реконструкцией; увязка проектных решений, разрабатываемых подрядчиками с&nbsp;архитектурным проектом или дизайн проектом.</p>
                  <h2 class="content_h2" id="anchor_2">Этап проектирования</h2>
                  <p class="content_p">Услуга помогает максимально близко познакомиться с&nbsp;наполнением будущего интерьера, оценить качество мебели и&nbsp;элементов отделки. Совместные поездки по&nbsp;салонам позволят увидеть многие из&nbsp;элементов интерьера или архитектуры в&nbsp;живую, ощутить тактильное восприятие, ознакомиться с&nbsp;новыми технологиями. Так нашему клиенту будет проще сделать правильный выбор и&nbsp;сэкономить время.</p>
                  <h2 class="content_h2" id="anchor_3">Этап строительства</h2>
                  <p class="content_p">На&nbsp;этапе строительных работ комплектация позволяет снять с&nbsp;клиента большое количество вопросов, связанных с&nbsp;закупкой материалов и&nbsp;согласованием их&nbsp;поставок. Мы&nbsp;представляем интересы клиента на&nbsp;всех этапах. Комплектация тесно связана с&nbsp;авторским сопровождением и&nbsp;органично дополняет его.</p>
                </div>
                <div class="services_include_item services_include_item_control" id="anchor_4">
                  <h3 class="services_include_item_smtitle">Что входит в&nbsp;услугу</h3>
                  <ul class="services_include_item_list">
                    <li>1. Запланированные посещения салонов с&nbsp;презентациями.</li>
                    <li>2. Консультация по&nbsp;материалам отделки, предметам мебели и&nbsp;устройствам. Подготовка коммерческих предложений.</li>
                    <li>3. Согласование сроков поставки материалов со&nbsp;строителями.</li>
                    <li>4. Контроль за&nbsp;подрядчиками на&nbsp;смежных участках работы.</li>
                    <li>5. Представление интересов клиента на&nbsp;всех этапах работ.</li>
                    <li>Комплектация объекта материалами, мебелью, оборудованием.</li>
                  </ul>
                </div>
                <section id="anchor_5">
                  <div className="services_add_price">
                    <p className="services_add_price_text">Стоимость оказания услуг авторского сопровождения обычно составляет&nbsp;50% от&nbsp;стоимости проектных работ.</p>
                  </div>
                </section>
              </div>

              <section>
                <h2 class="main_portfolio_title" id="anchor_6">Наши работы</h2>
                <Masonry
                  breakpointCols={breakpointColumnsPortfolio}
                  className="portfolio_grid"
                  columnClassName="my-masonry-grid_column">
                  <Link to="/portfolio/interier/interier-baltic-house" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h3>
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
                  <Link to="/portfolio/architecture/exterier-baltic-house" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
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
                  <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link portfolio_grid_link_hide">
                    <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio" className="portfolio_grid_link_all">
                        <p className="portfolio_grid_link_all_p">Все проекты</p>
                      </Link>
                </Masonry>
              </section>
            </div>
          </div>     
        </div>
      </div>
    </Layout>
  )
}

export default komplektaciyaObekta

const breakpointColumnsPortfolio = {
  default: 3,
  1800: 2,
  768: 1,
  
};