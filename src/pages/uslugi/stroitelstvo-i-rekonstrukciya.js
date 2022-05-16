import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { Faq } from "../../subitems/faq/stroyka"

import mainVideo from "../../video/reconstruction.mp4"
import mainVideoMobile from "../../video/reconstruction_mob.mp4"

const stroitelstvo = () => {
  return (
    <Layout>
      <div class="services_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" class="video" width="100%" height="100%" className="services_video_desktop">
          <source src={mainVideo} type="video/mp4" />
        </video>
        <video src={mainVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="services_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title services_video_title_sm">Строительство и&nbsp;реконструкция</h1>
            <p class="services_video_p">Организуем весь комплекс ремонтно-строительных работ, от&nbsp;закладывания фундамента до&nbsp;чистовой отделки, который выполнит команда высококлассных специалистов.</p>
          </div>
        </div>
      </div>
      <div class="content_body services_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              {/* <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_1" title="Что входит в&nbsp;проект" /></li> */}
              {/* <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_3" title="Cтоимость" /></li> */}
              {/* <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_4" title="Проектирование и&nbsp;строительство" /></li> */}
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_5" title="Портфолио" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_6" title="Как строится работа" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_7" title="Комплектация объекта" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_8" title="Вопрос / ответ" /></li>
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
                  <Link to="/portfolio/interier/korolya/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/korolya/00_korolya.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/luban/00_luban.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h3>
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
                  <Link to="/portfolio/architecture/rekonstrukciya-protos/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/architecture/exterier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h3>
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
                  <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/d3/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
                    <div class="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                </Masonry>
              </section>
              <div class="faq" id="anchor_8">
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

export default stroitelstvo

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};
