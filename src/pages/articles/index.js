import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { GetPageView } from "../../subitems/pageViewsCounter/getPageView"
import Seo from "../../components/seo"

const Articles = () => {
  return (
    <Layout>
      <Seo  title={"Полезные статьи по дизайну интерьера | I-PROJECT"} description={"Мы собрали советы и рекомендации по дизайну интерьера и архитектуре от студии дизайна I-PROJECT"}
            location={"https://i-project.by/articles"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-3.jpg"}/>
      <div className="wrapper">
        <h1 className="articles_page_title">Статьи и&nbsp;новости</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="articles_page"
          columnClassName="my-masonry-grid_column">
          <Link to="/articles/plan-apart" className="articles_page_item articles_page_item12">
            <h2 className="articles_page_item_title_medium articles_page_item_title_black">Планировка квартиры. Основные правила</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hblack"> <GetPageView slug={'/articles/plan-apart'}/> </p>
          </Link>
          <Link to="/articles/obschaya-zona" className="articles_page_item articles_page_item11">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Дизайн интерьера гостиной, кухни, столовой</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/obschaya-zona'}/> </p>
          </Link>
          <Link to="/articles/lighting" className="articles_page_item articles_page_item10">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Освещение в&nbsp;интерьере: рекомендации по&nbsp;подбору</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/lighting'}/> </p>
          </Link>
          <Link to="/articles/plan-house" className="articles_page_item articles_page_item8">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Планировка дома: основные правила</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/plan-house'}/> </p>
          </Link>
          <Link to="/articles/beliy-interier" className="articles_page_item articles_page_item7">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Белый цвет в&nbsp;интерьере</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/beliy-interier'}/> </p>
          </Link>
          <Link to="/articles/reconstruction" className="articles_page_item articles_page_item9">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Современная реконструкция зданий. Основные моменты</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/reconstruction'}/> </p>
          </Link>
          <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/architectura'}/> </p>
          </Link>
          <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/spalnya'}/> </p>
          </Link>
          <Link to="/articles/dveri" className="articles_page_item articles_page_item3">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_white"> <GetPageView slug={'/articles/dveri'}/> </p>
          </Link>
          
          <Link to="/articles/krovlya" className="articles_page_item articles_page_item2">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/krovlya'}/> </p>
          </Link>
          <Link to="/process" className="articles_page_item articles_page_item1">
            <h2 className="articles_page_item_title_medium articles_page_item_title_white">Как строится работа в&nbsp;i‑project</h2>
          </Link>
          <Link to="/articles/hranenie" className="articles_page_item articles_page_item6">
            <h2 className="articles_page_item_title_medium articles_page_item_title_black">Как организовать хранение вещей в&nbsp;доме и&nbsp;квартире</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hblack"> <GetPageView slug={'/articles/hranenie'}/> </p>
          </Link>
          <></>
          <Link to="/articles/trends" className="articles_page_item articles_page_item13">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">В&nbsp;погоне за&nbsp;трендом: как следовать за&nbsp;модой и&nbsp;при этом не&nbsp;навредить себе</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/trends'}/> </p>
          </Link>
          <></>
          <Link to="/articles/clients" className="articles_page_item articles_page_item14">
            <h2 className="articles_page_item_title_small articles_page_item_title_white">Как понять, что клиент и&nbsp;дизайнер интерьера подходят друг другу?</h2>
            <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/clients'}/> </p>
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
