import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'
import { AnimatedLine } from '../../../subitems/portfolio/animatedLine'
import Seo from "../../../components/seo"

const portfolioInterier = () => {
  return (
    <Layout>
      <Seo  title={"Портфолио интерьеров, реальные фото проектов | I-PROJECT"} description={"Интерьеры квартир, домов и коммерческой недвижимости, реальные фотографии ✦ Более 50 проектов"}
            location={"https://www.i-project.by/portfolio/interier/"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <div class="wrapper">
        <h1 class="portfolio_title">Портфолио</h1>
        <AnimatedLine />
        <ul class="portfolio_category">
          <li class="portfolio_category_li">
            <Link to="/portfolio/" className="portfolio_category_link">Все проекты</Link>
          </li>
          <li class="portfolio_category_li">
            <Link to="/portfolio/interier" className="portfolio_category_link portfolio_category_link_active">Интерьеры</Link>
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
        </ul>
        <ul class="portfolio_category_mob">
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/interier" className="portfolio_category_mob_link portfolio_category_mob_link_active">Интерьеры</Link>
          </li>
          <li class="portfolio_category_mob_li">
            <Link to="/portfolio/" className="portfolio_category_mob_link">Все проекты</Link>
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
          <Link to="/portfolio/interier/korolya/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/korolya/00_korolya.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/d3/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/d3/00_d3.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;жилом комплексе &laquo;D3&raquo;, 120м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-protos/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/protos_interior/00_protos_interior.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера офисов &laquo;Протос&raquo;, 200м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/interier-baltic-house/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/baltic_house/interior/00_baltic_home_interior.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом с&nbsp;балтийским характером. Интерьер, 500м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/storojevskaya" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/storojevskaya/00_storojevskaya.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры на&nbsp;ул.Сторожовская, 130м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/simple-house/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/simple_house/00_simple_house.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера обычного дома, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/color/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/color/00_color.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Энергия цвета. Интерьер квартиры в&nbsp;Минске, 120м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/zelenyi" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/zelenyi/00_zelenyi.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/baikonur" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/baikonur/00_baikonur.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн офисов в&nbsp;составе ЖК&nbsp;Байконур в&nbsp;г.Москва, 120м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/sunny" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/sunny/00_sunny.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Таунхаус в&nbsp;Солнечном. Дизайн интерьера, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/panfilova" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/panfilova/00_panfilova.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске, 85м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/luxury" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/luxury/00_luxury.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Luxury house. Интерьер дома под Минском, 400м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/sochi/" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/sochi/00_sochi.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера в&nbsp;апарт-комплексе &laquo;Матисс&raquo; в&nbsp;г.Сочи, 45м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/house-minsk" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/house_minsk/00_house_minsk.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома под Минском, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/apart-for-life" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/apart_for_life/00_apart_for_life.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Квартира для жизни. Дизайн интерьера в&nbsp;Минске, 110м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/design-interier-1" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/design_interier_1/00_design_interier_1.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 1000м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/griboedova" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/griboedova/00_griboedova.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул. Грибоедова, 160м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/level2-nezavisimosti" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/level2_nezavisimosti/00_level2_nezavisimosti.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера двухуровневой квартиры на&nbsp;пр. Независимости, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/podmoskovye-interier" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/podmoskovye_interier/00_podmoskovye_interier.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дом в&nbsp;Подмосковье. Интерьер, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/mogilev-apart" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/mogilev_apart/00_mogilev_apart.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;Могилеве, 150м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/kaskad" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/kaskad/00_kaskad.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры в&nbsp;миниполисе Каскад, 130м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/storojevskaya-2" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/storojevskaya_2/00_storojevskaya_2.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Интерьер квартиры в&nbsp;Доме у&nbsp;Троицкого, 130м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/rekonstrukciya-dom" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/rekonstrukciya_dom/00_rekonstrukciya_dom.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Реконструкция жилого дома в&nbsp;Минске, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/filimonova" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/filimonova/00_filimonova.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Филимонова, 140м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/prestizhino" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/prestizhino/00_prestizhino.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;ЖК&nbsp;&laquo;Престижино&raquo;, 160м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/design-interier-2" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/design_interier_2/00_design_interier_2.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера дома в&nbsp;Минске, 200м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/fine" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/fine/00_fine.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Хорошее настроение. Дизайн квартиры в&nbsp;Минске, 140м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/kuzmy-chernogo" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/kuzmy_chernogo/00_kuzmy_chernogo.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера на&nbsp;ул. Кузьмы Черного , 125м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/mirrors" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/mirrors/00_mirrors.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске, 100м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/vostochnaya" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/vostochnaya/00_vostochnaya.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Восточная, 80м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/moskvina" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/moskvina/00_moskvina.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дама с&nbsp;собачкой. Дизайн квартиры на&nbsp;ул.Москвина, 180м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/akvamarin" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/akvamarin/00_akvamarin.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера квартиры в&nbsp;ЖК&nbsp;&laquo;Аквамарин&raquo;, 140м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/nezavisimosti" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/nezavisimosti/00_nezavisimosti.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн интерьера на&nbsp;пр. Независимости, 150м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/bedy" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/bedy/00_bedy.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул. Леонида Беды в&nbsp;Минске, 120м<sup>2</sup></h2>
              <p className="portfolio_grid_block_realize">Реализовано</p>
            </div>
          </Link>
          <Link to="/portfolio/interier/dom-sovremeniy" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/dom_sovremeniy/00_dom_sovremeniy.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн дома под Минском. Современный, 300м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/zhodino" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/zhodino/00_zhodino.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн дома в&nbsp;Жодино, 250м<sup>2</sup></h2>
            </div>
          </Link>
          <Link to="/portfolio/interier/gedrojca" className="portfolio_grid_link">
            <StaticImage src="../../../images/portfolio/gedrojca/00_gedrojca.jpg" alt=""></StaticImage>
            <div class="portfolio_grid_block">
              <h2 className="portfolio_grid_block_title">Дизайн квартиры на&nbsp;ул.Ежи Гедройца, 120м<sup>2</sup></h2>
            </div>
          </Link>
        </Masonry>
      </div>
      
    </Layout>
  )
}

export default portfolioInterier



const breakpointColumnsObj = {
  default: 4,
  2100: 3,
  768: 1,
  
};