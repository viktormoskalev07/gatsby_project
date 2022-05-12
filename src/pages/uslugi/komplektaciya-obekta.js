import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

import mainVideo from "../../video/complectation.mp4"
import mainVideoMobile from "../../video/complectation_mob.mp4"

const komplektaciyaObekta = () => {
  return (
    <Layout>
      <div class="services_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title">Комплектация объекта</h1>
            <p class="services_video_p">Организуем процесс по&nbsp;поиску и&nbsp;закупке необходимых материалов и&nbsp;мебели. Работаем только с&nbsp;надежными поставщиками, которые отвечают за&nbsp;качество приобретаемой продукции и&nbsp;соблюдение сроков.</p>
          </div>
        </div>
      </div>
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_1" title="Что входит в&nbsp;проект" /></li>
              {/* <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_7" title="Авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/komplektaciya-obekta/#anchor_8" title="Комплектация объекта" /></li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="right_content">
            <div class="content_images">
              <section>
                <h2 class="main_portfolio_title" id="anchor_5">Наши работы</h2>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="portfolio_grid"
                  columnClassName="my-masonry-grid_column">
                  <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h2>
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
                  <Link to="/portfolio/architecture/exterier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h2>
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
                  <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h2>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
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

export default komplektaciyaObekta

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};