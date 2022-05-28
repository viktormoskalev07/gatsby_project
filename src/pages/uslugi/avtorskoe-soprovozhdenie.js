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

const avtorskoeSoprovozhdenie = () => {
  return (
    <Layout>
      <Seo  title={"Авторский надзор и сопровождение в Минске | I-PROJECT"} description={"Консультируем наших клиентов, регулярно выезжаем на объект, исключаем возможность возникновения ошибок или недочетов на смежных участках работ"}
            location={"https://www.i-project.by/uslugi/dizajn-interera"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <div class="services_video">
        <Video  mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <div className="wrapper">
          <div className="services_video_text">
            <h1 className="services_video_title services_video_title_sm">Авторское сопровождение</h1>
            <p className="services_video_p">Осуществим контроль за&nbsp;качеством ремонтных работ, предотвратив любые недостатки в&nbsp;процессе. Завершим работу в&nbsp;срок и&nbsp;реализуем все самые сложные детали вашего проекта.</p>
          </div>
        </div>
      </div>
      <div className="content_body">
        <div className="content_body_absolute">
          <div className="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/avtorskoe-soprovozhdenie/#anchor_1" title="Что такое авторское сопровождение" /></li>
              <li><AnchorLink to="/uslugi/avtorskoe-soprovozhdenie/#anchor_2" title="Что входит в&nbsp;услугу" /></li>
              <li><AnchorLink to="/uslugi/avtorskoe-soprovozhdenie/#anchor_3" title="Cтоимость" /></li>
              <li><AnchorLink to="/uslugi/avtorskoe-soprovozhdenie/#anchor_4" title="Портфолио" /></li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="right_content">
            <div className="content_images">
              <section id="anchor_1">
                <div className="services_add_support services_add_support_sp">
                  <div className="services_add_support_desc"> 
                    <p className="services_add_support_text">Под авторским сопровождением понимается контроль всех процессов, связанных со&nbsp;строительством и(или) реконструкцией; увязка проектных решений, разрабатываемых подрядчиками с&nbsp;архитектурным проектом или дизайн проектом.</p>
                    <p className="services_add_support_text services_add_text_last">В&nbsp;процессе авторского сопровождения мы&nbsp;осуществляем комплектацию объекта всеми необходимыми материалами, мебелью, оборудованием. Исключаем возможность возникновения ошибок или недочетов на&nbsp;смежных участках работ. Авторское сопровождение оканчивается вместе с&nbsp;завершением реализации проекта.</p>
                  </div>
                  <div className="services_add_support_block">
                    <StaticImage src="../../images/services/services_support.jpg" className="services_add_support_image" alt="услуга авторское сопровождение от дизайн-студии i-project в Минске" />
                    <StaticImage src="../../images/services/services_support_big.jpg" className="services_add_support_image_big" alt="услуга авторское сопровождение от дизайн-студии i-project в Минске" />
                  </div>
                </div>
              </section>
              {/* <section>
                <div className="services_add_include">
                  <div className="services_add_include_block">
                    <h2 className="services_add_include_title">Что входит в&nbsp;услугу</h2>
                  </div>
                  <ol className="services_add_include_list">
                    <li className="services_add_include_li"></li>
                    <li className="services_add_include_li"></li>
                    <li className="services_add_include_li"></li>
                    <li className="services_add_include_li"></li>
                    <li className="services_add_include_li"></li>
                    <li className="services_add_include_li"></li>
                  </ol>
                </div>
              </section> */}
              <div className="services_include_item services_include_item_control" id="anchor_2">
                <h3 className="services_include_item_smtitle">Что входит в&nbsp;услугу</h3>
                <ul className="services_include_item_list">
                  <li>1. Регулярные выезды автора проекта на&nbsp;объект.</li>
                  <li>2. Консультация исполнителей и&nbsp;подготовка коммерческих предложений.</li>
                  <li>3. Разработка дополнительных проектных решений.</li>
                  <li>4. Контроль за&nbsp;подрядчиками на&nbsp;смежных участках работы.</li>
                  <li>5. Представление интересов клиента на&nbsp;всех этапах работ.</li>
                  <li>6. Комплектация объекта материалами, мебелью, оборудованием.</li>
                </ul>
              </div>
              <section id="anchor_3">
                <div className="services_add_price">
                  <p className="services_add_price_text">Стоимость оказания услуг авторского сопровождения обычно составляет&nbsp;50% от&nbsp;стоимости проектных работ.</p>
                </div>
              </section>
              <section>
                <h2 className="main_portfolio_title" id="anchor_4">Наши работы</h2>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="portfolio_grid"
                  columnClassName="my-masonry-grid_column">
                  <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/d3/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/architecture/exterier-baltic-house/" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
                    <StaticImage src="../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link portfolio_grid_link_hide">
                    <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h3>
                      <p className="portfolio_grid_block_realize">Реализовано</p>
                    </div>
                  </Link>
                  <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link portfolio_grid_link_hide">
                    <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
                    <div className="portfolio_grid_block">
                      <h3 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h3>
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

export default avtorskoeSoprovozhdenie

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};