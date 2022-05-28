import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'
import { AnimatedLine } from './animatedLine'

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
            <Link to="/portfolio/architecture" className="portfolio_category_link">Архитектура</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/realize" className="portfolio_category_link portfolio_category_link_active">Реализованные</Link>
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
            <Link to="/portfolio/realize" className="portfolio_category_mob_link portfolio_category_mob_link_active">Реализованные</Link>
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
          <Link to="/portfolio/interier/korolya/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/korolya/00_korolya.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/d3/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/d3/00_d3.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/luban/00_luban.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/rekonstrukciya-protos/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-protos/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/protos_interior/00_protos_interior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/exterier-baltic-house/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/baltic_house/exterior/00_baltic_home_exterior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Экстерьер, 500&nbsp;м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/fine" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/fine/00_fine.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Хорошее настроение. Дизайн квартиры в&nbsp;Минске, 140м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/mirrors" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/mirrors/00_mirrors.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске, 100м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/moskvina" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/moskvina/00_moskvina.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дама с&nbsp;собачкой. Дизайн квартиры на&nbsp;ул.Москвина, 180м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/bedy" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/bedy/00_bedy.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул. Леонида Беды в&nbsp;Минске, 120м<sup>2</sup></h2>
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