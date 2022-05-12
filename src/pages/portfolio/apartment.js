import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'

const portfolioApartment = () => {
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
            <Link to="/portfolio/apartment" className="portfolio_category_link portfolio_category_link_active">Квартиры</Link>
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
            <Link to="/portfolio/apartment" className="portfolio_category_mob_link portfolio_category_mob_link_active">Квартиры</Link>
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
          <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/color/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/color/00_color.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Энергия цвета. Интерьер квартиры в&nbsp;Минске, 120м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/panfilova/00_panfilova.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/sochi/" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/sochi/00_sochi.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера в&nbsp;апарт-комплексе &laquo;Матисс&raquo; в&nbsp;г.Сочи, 45м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/griboedova" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/griboedova/00_griboedova.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул. Грибоедова, 160м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/level2-nezavisimosti" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/level2_nezavisimosti/00_level2_nezavisimosti.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера двухуровневой квартиры на&nbsp;пр. Независимости, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/mogilev-apart" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/mogilev_apart/00_mogilev_apart.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;Могилеве, 150м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/kaskad" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/kaskad/00_kaskad.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;миниполисе Каскад, 130м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/storojevskaya-2" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/storojevskaya_2/00_storojevskaya_2.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Интерьер квартиры в&nbsp;Доме у&nbsp;Троицкого, 130м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/filimonova" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/filimonova/00_filimonova.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Филимонова, 140м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/prestizhino" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/prestizhino/00_prestizhino.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;ЖК&nbsp;&laquo;Престижино&raquo;, 160м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/fine" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/fine/00_fine.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Хорошее настроение. Дизайн квартиры в&nbsp;Минске, 140м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/kuzmy-chernogo" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/kuzmy_chernogo/00_kuzmy_chernogo.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера на&nbsp;ул. Кузьмы Черного , 125м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/mirrors" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/mirrors/00_mirrors.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске, 100м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/vostochnaya" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/vostochnaya/00_vostochnaya.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Восточная, 80м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/moskvina" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/moskvina/00_moskvina.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дама с&nbsp;собачкой. Дизайн квартиры на&nbsp;ул.Москвина, 180м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/akvamarin" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/akvamarin/00_akvamarin.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;ЖК&nbsp;&laquo;Аквамарин&raquo;, 140м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/nezavisimosti" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/nezavisimosti/00_nezavisimosti.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера на&nbsp;пр. Независимости, 150м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/bedy" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/bedy/00_bedy.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул. Леонида Беды в&nbsp;Минске, 120м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/gedrojca" className="portfolio_grid_link">
            <StaticImage src="../../images/portfolio/gedrojca/00_gedrojca.jpg" alt="" />
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Ежи Гедройца, 120м<sup>2</sup></h2>
            </div>
          </Link>
        </Masonry>
      </div>
      
    </Layout>
  )
}

export default portfolioApartment



const breakpointColumnsObj = {
  default: 4,
  2100: 3,
  768: 1,
  
};