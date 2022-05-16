import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import mainVideo from "../../video/architect.mp4"
import mainVideoMobile from "../../video/architect_mob.mp4"

const arxitekturnoe = () => {
  return (
    <Layout>
      <div class="services_video">
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
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              {/* <li><AnchorLink to="/uslugi/arxitekturnoe-proektirovanie/#anchor_1" title="Что входит в&nbsp;проект" /></li> */}
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
            <div class="content_images">
              {/* <div class="services_include" id="anchor_2">
                <h2 class="services_include_title">Что входит в&nbsp;проект:</h2>
                <div class="services_include_item">
                  <h3 class="services_include_item_smtitle">Эскизный проект</h3>
                  <div class="services_include_text">
                    <ul class="services_include_item_list">
                      <li>1. Ведомость чертежей</li>
                      <li>2. Архитектурно планировочная концепция: Планы этажей с&nbsp;расстановкой мебели и&nbsp;оборудования. 3D-визуализация фасада здания</li>
                      <li>3. Чертежи фасадов здания в&nbsp;массах с&nbsp;нанесением основных размеров</li>
                      <li>4. Цветовое решение фасада здания</li>
                      <li>5. Планировочная схема участка</li>
                      <p>Общий объем: 15&ndash;20 листов&nbsp;А3</p>
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_ap_1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="services_include_item">
                  <h3 class="services_include_item_smtitle">Архитектурные решения</h3>
                  <div class="services_include_text">
                    <ul class="services_include_item_list">
                      <li>1. Общие данные</li>
                      <li>2. Ситуационный план</li>
                      <li>3. План здания</li>
                      <li>4. Укрупненные фрагменты необходимых участков плана здания</li>
                      <li>5. План кровли</li>
                      <li>6. Схема водосточной системы</li>
                      <li>7. Необходимые укрупненные фрагменты и&nbsp;узлы кровли</li>
                    </ul>
                    <div class="services_diff_img_mob_block">
                      <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_ap_2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="services_include_item">
                  <h3 class="services_include_item_smtitle">Смежные разделы</h3>
                  <div class="services_include_text">
                    <ul class="services_include_item_list">
                      <li>1. Конструктивные решения (КР)</li>
                      <p>Общий объем: 50-100 листов формата А2, А3, А4</p>
                      <li>2. Отопление и&nbsp;вентиляция (ОВ)</li>
                      <li>3. Водопровод и&nbsp;канализация (ВК)</li>
                      <li>4. Электричество и&nbsp;автоматизация (ЭО + &laquo;Умный Дом&raquo;)</li>
                      <li>5. Инженерная геодезия (топосъемка)</li>
                      <li>6. Инженерная геология (бурение скважин, анализ грунта)</li>
                      <p>Общий объем: 50-100 листов формата А2, А3, А4</p>
                    </ul>
                    <StaticImage class="services_diff_flat_img_mob" src="../../images/services/services_include_2.png" alt="" />
                  </div>
                </div>
              </div> */}
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
                  <Link to="/portfolio/architecture/shale" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/shale/00_shale.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Современное шале. Архитектура дома, 300м<sup>2</sup></h3>
                    </div>
                  </Link>
                  <Link to="/portfolio/architecture/sosni" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/sosni/00_sosni.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом в&nbsp;сосновом бору. Архитектура, 750м<sup>2</sup></h3>
                    </div>
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

export default arxitekturnoe

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};