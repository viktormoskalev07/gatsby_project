import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'

const portfolioHouse = () => {
  return (
    <Layout>
      <div class="wrapper">
        <h1 class="portfolio_title">Портфолио</h1>
        <div class="portfolio_title_line"></div>
        <ul class="portfolio_category">
          <li class="portfolio_category_li">
            <Link to="/portfolio/" className="portfolio_category_link">Все проекты</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/interier" className="portfolio_category_link">Интерьеры</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/architecture" className="portfolio_category_link">Архитектура</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/realize" className="portfolio_category_link">Реализованные</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/apartment" className="portfolio_category_link">Квартиры</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/house" className="portfolio_category_link portfolio_category_link_active">Дома</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/office" className="portfolio_category_link">Офисы</Link>
          </li>
        </ul>
        <ul class="portfolio_category_mob">
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/house" className="portfolio_category_mob_link portfolio_category_mob_link_active">Дома</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/" className="portfolio_category_mob_link">Все проекты</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/interier" className="portfolio_category_mob_link">Интерьеры</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/architecture" className="portfolio_category_mob_link">Архитектура</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/realize" className="portfolio_category_mob_link">Реализованные</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/apartment" className="portfolio_category_mob_link">Квартиры</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/office" className="portfolio_category_mob_link">Офисы</Link>
          </li>
        </ul>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="portfolio_grid"
          columnClassName="my-masonry-grid_column">
          <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/luban/00_luban.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/architecture/dom-u-more" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/dom_u_more/00_dom_u_more.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h2>
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
          <Link to="/portfolio/interier/simple-house/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/simple_house/00_simple_house.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера обычного дома, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/sosni" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/sosni/00_sosni.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;сосновом бору. Архитектура, 750м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/zelenyi" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/zelenyi/00_zelenyi.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/sunny" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/sunny/00_sunny.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Таунхаус в&nbsp;Солнечном. Дизайн интерьера, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/luxury" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/luxury/00_luxury.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Luxury house. Интерьер дома под Минском, 400м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/shale" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/shale/00_shale.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Современное шале. Архитектура дома, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/house-minsk" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/house_minsk/00_house_minsk.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома под Минском, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/design-interier-1" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/design_interier_1/00_design_interier_1.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 1000м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/podmoskovye-interier" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/podmoskovye_interier/00_podmoskovye_interier.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;Подмосковье. Интерьер, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/podmoskovye-architecture" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/podmoskovye_architecture/00_podmoskovye_architecture.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;Подмосковье. Архитектура, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/rekonstrukciya-dom" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/rekonstrukciya_dom/00_rekonstrukciya_dom.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Реконструкция жилого дома в&nbsp;Минске, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/design-interier-2" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/design_interier_2/00_design_interier_2.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/dom-sovremeniy" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/dom_sovremeniy/00_dom_sovremeniy.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн дома под Минском. Современный, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/zhodino" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/zhodino/00_zhodino.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн дома в&nbsp;Жодино, 250м<sup>2</sup></h2>
            </div>
          </Link>
        </Masonry>
      </div>
      
    </Layout>
  )
}

export default portfolioHouse



const breakpointColumnsObj = {
  default: 4,
  2100: 3,
  768: 1,
  
};