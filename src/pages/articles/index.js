import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'

const Articles = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h1 className="articles_page_title">Статьи и&nbsp;новости</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="articles_page"
          columnClassName="my-masonry-grid_column">
          <Link to="/articles/plan-apart" className="articles_page_item articles_page_item12">
            <h2 className="articles_page_item_title_medium articles_page_item_title_black">Планировка квартиры. Основные правила</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_grey1">3536</p>
          </Link>
          <Link to="/articles/obschaya-zona" className="articles_page_item articles_page_item11">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Дизайн интерьера гостиной, кухни, столовой</h2>
          </Link>
          <Link to="/articles/lighting" className="articles_page_item articles_page_item10">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Освещение в&nbsp;интерьере: рекомендации по&nbsp;подбору</h2>
          </Link>
          <Link to="/articles/plan-house" className="articles_page_item articles_page_item8">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Планировка дома: основные правила</h2>
          </Link>
          <Link to="/articles/beliy-interier" className="articles_page_item articles_page_item7">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Белый цвет в&nbsp;интерьере</h2>
          </Link>
          <Link to="/articles/reconstruction" className="articles_page_item articles_page_item9">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Современная реконструкция зданий. Основные моменты</h2>
          </Link>
          <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h2>
          </Link>
          <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h2>
          </Link>
          <Link to="/articles/dveri" className="articles_page_item articles_page_item3">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h2>
          </Link>
          <Link to="/articles/hranenie" className="articles_page_item articles_page_item6">
            <h2 className="articles_page_item_title_medium articles_page_item_title_black">Как организовать хранение вещей в&nbsp;доме и&nbsp;квартире</h2>
          </Link>
          <Link to="/process" className="articles_page_item articles_page_item1">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Как строится работа в&nbsp;i‑project</h2>
          </Link>
          <Link to="/articles/krovlya" className="articles_page_item articles_page_item2">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h2>
          </Link>
          
        </Masonry>
      </div>
    </Layout>
  )
}

export default Articles

const breakpointColumnsObj = {
  default: 4,
  768: 1
};
