import React from 'react'
import Layout from "../../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { Faq } from "../../subitems/faq/stroyka"
import { CalculatorLink } from "../../components/calculator/calculatorLink"

import { Video } from "../../subitems/hompage/video"
import mainVideo from "../../video/reconstruction.mp4"
import mainVideoMobile from "../../video/reconstruction_mob.mp4"
import secondVideo from "../../video/preview_build.mp4"
import { Presentation } from "../../subitems/posts/presentation"
import Seo from "../../components/seo"

const stroitelstvo = () => {
  return (
    <Layout>
      <Seo  title={"Строительство и реконструкция в Минске | I-PROJECT"} description={"Наша студия оказывает услуги комплексного ремонта и строительства ✦ Опыт более 15 лет ✦ Индивидуальный подход к каждому."}
            location={"https://i-project.by/uslugi/dizajn-interera"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div class="services_video">
        <Video  mobileSrc={mainVideoMobile} desktopSrc={mainVideo} />
        <div class="wrapper">
          <div class="services_video_text">
            <h1 class="services_video_title services_video_title_sm">Строительство и&nbsp;реконструкция</h1>
            <p class="services_video_p">Организуем весь комплекс ремонтно-строительных работ, от&nbsp;закладывания фундамента до&nbsp;чистовой отделки, который выполнит команда высококлассных специалистов.</p>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_1" title="Строительство и&nbsp;реконструкция" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_2" title="Проектная смета" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_3" title="Качество строительных работ" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_4" title="Контроль качества" /></li>
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_5" title="Портфолио" /></li>
              {/* <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_7" title="Комплектация объекта" /></li> */}
              <li><AnchorLink to="/uslugi/stroitelstvo-i-rekonstrukciya/#anchor_6" title="Вопрос / ответ" /></li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="right_content">
            <div className="content_images">
              <div class="wrapper_article">
                <div class="content_text" id="anchor_1">
                  <p class="content_p">Мы&nbsp;не&nbsp;просто проектируем, мы&nbsp;превращаем свои проекты в&nbsp;реальные объекты. За&nbsp;15&nbsp;лет работы в&nbsp;сфере архитектурного проектирования и&nbsp;дизайна интерьеров нам довелось поработать с&nbsp;большим количеством строителей разного уровня, среди которых было немало сильных профессионалов. Но&nbsp;только с&nbsp;лучшими, прошедшими вместе с&nbsp;нами огонь, воду и&nbsp;медные трубы (причем зачастую в&nbsp;самом прямом смысле этих слов), мы&nbsp;продолжаем сотрудничество по&nbsp;сей день.</p>
                  <h2 class="content_h2" id="anchor_2">Проектная смета</h2>
                  <p class="content_p">После разработки всех документов для строительства и&nbsp;ремонта, прораб составляет смету, где просчитывается стоимость работ и&nbsp;черновых материалов. Это финальная стоимость работ, которая не&nbsp;будет изменяться в&nbsp;процессе реализации строительных работ.</p>
                  <h2 class="content_h2" id="anchor_3">Качество строительных работ</h2>
                  <p class="content_p">Cтроители, с&nbsp;которыми мы&nbsp;работаем, имеют обширный опыт в&nbsp;своей сфере. Результат их&nbsp;работ можно посмотреть в&nbsp;разделе &laquo;Реализованные&raquo;. В&nbsp;нашем портфолио более 100&nbsp;проектов, многие из&nbsp;которых являются результатом кропотливой совместной работы со&nbsp;строителями и&nbsp;подрядчиками. Авторское сопровождение позволяет контролировать реализацию строительных работ в&nbsp;соответствии с&nbsp;дизайн проектом.</p>
                </div>
                <section id="anchor_4">
                  <div className="services_add_price">
                    <p className="services_add_price_text">Мы&nbsp;выработали систему контроля качества, которая позволяет нам во&nbsp;время проектирования проработать практически все моменты, связанные с&nbsp;дальнейшей реализацией.</p>
                  </div>
                </section>
              </div>
            </div>
            
          </div>
        </div>
        <Presentation shortVideo={secondVideo} stopImg={'../../images/services/preview_build_end.jpg'} youTubeSrc={'https://www.youtube.com/embed/KRf8WVs99-o?start=15&rel=0&autoplay=1'}/>
        <div class="wrapper">
          <div class="right_content">
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
                <Link to="/portfolio/architecture/luban" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/luban/00_luban.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/interier-protos" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/protos_interior/00_protos_interior.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/rekonstrukciya-protos" className="portfolio_grid_link">
                  <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/exterier-baltic-house" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/interier-baltic-house" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h3>
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
                <Link to="/portfolio/interier/d3" className="portfolio_grid_link portfolio_grid_link_hide">
                  <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h3>
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
            <CalculatorLink />
            <section>
              <div className="faq" id="anchor_6">
                <h3 className="faq_title">Вопрос / ответ</h3>
                <Faq/>
              </div>
            </section>
          </div>     
        </div>
      </div>
    </Layout>
  )
}

export default stroitelstvo

const breakpointColumnsPortfolio = {
  default: 3,
  1800: 2,
  768: 1,
  
};
