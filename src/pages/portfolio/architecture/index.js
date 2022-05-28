import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'
import { AnimatedLine } from '../../../subitems/portfolio/animatedLine'
 

const portfolioArchitecture = () => {
  return (
    <Layout>
      <div class="wrapper"> 
        <h1 class="portfolio_title">Портфолио</h1>
        <AnimatedLine/>
        <ul class="portfolio_category">
          <li class="portfolio_category_li">
            <Link to="/portfolio/" className="portfolio_category_link">Все проекты</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/interier" className="portfolio_category_link">Интерьеры</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/architecture" className="portfolio_category_link portfolio_category_link_active">Архитектура</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/realize" className="portfolio_category_link">Реализованные</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/apartment" className="portfolio_category_link">Квартиры</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/house" className="portfolio_category_link">Дома</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/office" className="portfolio_category_link">Офисы</Link>
          </li>
        </ul>
        <ul class="portfolio_category_mob">
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/architecture" className="portfolio_category_mob_link portfolio_category_mob_link_active">Архитектура</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/" className="portfolio_category_mob_link">Все проекты</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/interier" className="portfolio_category_mob_link">Интерьеры</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/realize" className="portfolio_category_mob_link">Реализованные</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/apartment" className="portfolio_category_mob_link">Квартиры</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/house" className="portfolio_category_mob_link">Дома</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/office" className="portfolio_category_mob_link">Офисы</Link>
          </li>
        </ul>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="portfolio_grid"
          columnClassName="my-masonry-grid_column">
          <Link to="/portfolio/architecture/dom-na-holme/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/dom_na_holme/01_dom_na_holme.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом на&nbsp;холме, 450м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/luban/00_luban.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/architecture/rekonstrukciya-protos/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/architecture/dom-u-more" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/dom_u_more/00_dom_u_more.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/exterier-baltic-house/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/architecture/sosni" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/sosni/00_sosni.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;сосновом бору. Архитектура, 750м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/shale" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/shale/00_shale.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Современное шале. Архитектура дома, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <div></div>
          <div></div>
          <Link to="/portfolio/architecture/podmoskovye-architecture" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/podmoskovye_architecture/00_podmoskovye_architecture.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;Подмосковье. Архитектура, 300м<sup>2</sup></h2>
            </div>
          </Link>
        </Masonry>
      </div>
      
    </Layout>
  )
}

export default portfolioArchitecture



const breakpointColumnsObj = {
  default: 4,
  2100: 3,
  768: 1,
  
};