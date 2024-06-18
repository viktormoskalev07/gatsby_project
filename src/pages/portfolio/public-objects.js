import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'
import { AnimatedLine } from '../../subitems/portfolio/animatedLine'
import Seo from "../../components/seo"

const PortfolioPublic = () => {
  return (
    <Layout>
      <Seo  title={"Портфолио интерьеров общественных объекты | I-PROJECT"} description={"Реализованные интерьеры и 3D визуализации общественных объектов ✦ Опыт более 15 лет"}
            location={"https://i-project.by/portfolio/public-objects"}
            image={"https://i-project.by/portfolio_newsite/compact/01_compact.webp"}/>
      <div class="wrapper">
        <h2 class="portfolio_title">Портфолио</h2>
        <AnimatedLine />
        <ul class="portfolio_category">
          <li class="portfolio_category_li">
            <Link to="/portfolio" className="portfolio_category_link">Все проекты</Link>
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
            <Link to="/portfolio/house" className="portfolio_category_link">Дома</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/office" className="portfolio_category_link">Офисы</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/public-objects" className="portfolio_category_link portfolio_category_link_active"><h1>Общественные</h1></Link>
          </li>
        </ul>
        <ul class="portfolio_category_mob">
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/public-objects" className="portfolio_category_mob_link portfolio_category_mob_link_active"><h1>Общественные</h1></Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio" className="portfolio_category_mob_link">Все проекты</Link>
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
          <Link to="/portfolio/architecture/libknehta" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/libknehta/00_libknehta.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Либкнехта 68А. Реконструкция. 3000м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/compact" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/compact/00_compact.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера офиса Compact, 50м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-protos" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/protos_interior/00_protos_interior.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/billard-bowling" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/billard/00_billard.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн игровой зоны (боулинг, бильярд), 100м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/architecture/rekonstrukciya-protos" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/protos_reconstraction/00_protos_reconstraction.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Реконструкция офисов группы компаний &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/cafe" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/cafe/00_cafe.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Гэтсби. Дизайн пространства кафе, бара, ресторана, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/baikonur" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/baikonur/00_baikonur.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн офисов в&nbsp;составе ЖК&nbsp;Байконур в&nbsp;г.Москва, 120м<sup>2</sup></h2>
            </div>
          </Link>
        </Masonry>
      </div>
    </Layout>
  )
}

export default PortfolioPublic

const breakpointColumnsObj = {
  default: 4,
  2100: 3,
  768: 1,
  
};
