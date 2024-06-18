import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { PageViewCounter } from "../../subitems/pageViewsCounter/pageViewCounter"
import { GetPageView } from "../../subitems/pageViewsCounter/getPageView"
import Seo from "../../components/seo"

const hranenie = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Как организовать хранение вещей в квартире | I-PROJECT"} description={"Разбираемся как хранить вещи в доме. Практические советы по размещению мест для хранения в квартире"}
            location={"https://i-project.by/articles/hranenie"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-6.jpg"}/>
      <section class="article">
        <div class="breadcrumbs">
          <ul class="breadcrumbs_list">
            <li class="breadcrumbs_li dark"><Link to="/">Главная</Link></li>
            <li class="breadcrumbs_li dark"><Link to="/articles">Статьи и&nbsp;новости</Link></li>
          </ul>
        </div>
        <div class="article_bcg article_bcg6">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Как организовать хранение вещей в&nbsp;доме и&nbsp;квартире</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/hranenie/#hranenie_1" title="Гардеробная" /></li>
                <li><AnchorLink to="/articles/hranenie/#hranenie_2" title="Шкаф" /></li>
                <li><AnchorLink to="/articles/hranenie/#hranenie_3" title="Гардеробная или шкаф?" /></li>
                <li><AnchorLink to="/articles/hranenie/#hranenie_4" title="Комоды и&nbsp;стеллажи" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Ежедневный комфорт в&nbsp;доме или квартире во&nbsp;многом зависит от&nbsp;того, как организовано хранение вещей. Грамотный подход к&nbsp;этому вопросу позволит сделать любое помещение стильным и&nbsp;функциональным. Попробуем разобраться в&nbsp;системах хранения и&nbsp;особенностях их&nbsp;использования.</p>
                  </div>
                  <h2 class="content_h2" id="hranenie_1">Гардеробная</h2>
                  <div class="content_text">
                    <p class="content_p">Существует два принципа организации гардеробных. Первый&nbsp;&mdash; хозяйственный или утилитарный. В&nbsp;таком варианте гардеробная выглядит как удобный и&nbsp;эргономичный набор систем для хранения, который никак не&nbsp;выделяется в&nbsp;интерьере. Этот вариант можно применять для хранения одежды, но, если площадь позволяет, в&nbsp;таком помещении лучше разместить бытовые приборы, хозяйственный и&nbsp;спортивный инвентарь.</p>
                    <p class="content_p">Второй подход к&nbsp;организации гардеробной сочетает в&nbsp;себе не&nbsp;только эффективность, но&nbsp;и&nbsp;эффектность. В&nbsp;таком случае данная комната становится полноценной частью интерьера: в&nbsp;её&nbsp;создании используются прозрачные перегородки, парящие системы хранения, полки с&nbsp;подсветкой, светильники, люстры и&nbsp;лампы на&nbsp;нескольких уровнях. Этот подход лучше использовать для организации хранения вещей и&nbsp;одежды рядом со&nbsp;спальней. Такая гардеробная будет визуально увеличивать пространство основной комнаты.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/19_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/19_d3.jpg" alt="Стильный черный гардероб в мастер-спальне" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/18_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/18_d3.jpg" alt="Гардероб в мастер-спальне" />
                      </a>
                    </div>
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/luxury/40_luxury.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luxury/40_luxury.jpg" alt="Гардероб с вещами и столиком для переодевания" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Если площадь жилого пространства позволяет, можно сделать общую гардеробную для хранения верхней одежды и&nbsp;по&nbsp;одной при каждой спальне. Там, где не&nbsp;хватает свободной площади, гардеробную рекомендуется заменить на&nbsp;шкаф.</p>
                  </div>
                  <h2 class="content_h2" id="hranenie_2">Шкаф</h2>
                  <div class="content_text">
                    <p class="content_p">Шкаф может быть как отдельно стоящим предметом мебели, так и&nbsp;модульной системой, которая состоит из&nbsp;нескольких элементов. На&nbsp;размер влияет не&nbsp;только дизайн, но&nbsp;и&nbsp;материал, из&nbsp;которого он&nbsp;изготовлен. Корпус шкафа должен учитывать нагрузку содержимого&nbsp;&mdash; вешалки, уголки для крепления полок, выдвижные механизмы ящиков и&nbsp;их&nbsp;наполнение. Также в&nbsp;шкафах желательно организовать дополнительную подсветку: это поможет легко находить необходимые вещи и&nbsp;при этом поддерживать порядок.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/dzerzhinskogo/15_dzerzhinskogo.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dzerzhinskogo/15_dzerzhinskogo.jpg" alt="Шкаф с подсветкой в гардеробной" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/garmony_dom_interier/27_garmony_dom.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/garmony_dom_interier/27_garmony_dom.jpg" alt="Шкаф с подсветкой в мастер-спальне" />
                      </a>
                    </div>
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/simple_house/13_simple_house.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/simple_house/13_simple_house.jpg" alt="Прозрачный стеклянный шкаф с подсветкой вещей" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/simple_house/17_simple_house.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/simple_house/17_simple_house.jpg" alt="Прозрачный стеклянный шкаф с подсветкой вещей" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Качество и&nbsp;эксплуатационные характеристики шкафов во&nbsp;многом зависят от&nbsp;материалов, которые применялись для их&nbsp;производства. Каркас модуля чаще всего выполняют из&nbsp;массива дерева, МДФ либо ДСП плит.</p>
                    <p class="content_p">Для небольших помещений подойдут шкафы с&nbsp;одной или двумя дверьми. В&nbsp;более габаритные шкафы кроме стандартных элементов наполнения предлагается добавить секции для хранения постельного белья, дорожных сумок, домашней техники.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/zelenyi/11_zelenyi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/zelenyi/11_zelenyi.jpg" alt="Спальня с прозрачным стеклянным шкафом" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/panfilova/09_panfilova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/panfilova/09_panfilova.jpg" alt="Спальня с кроватью и прозрачным шкафом" />
                      </a>
                    </div>
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/15_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/15_korolya.jpg" alt="Двухстворчатый шкаф в спальне с подсветкой" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/10_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/10_d3.jpg" alt="Гардеробная в мастер-спальне с видом на коридор" />
                      </a>
                    </div>
                    {/* <div class="main_services_outside main_services_outside1">
                      <div class="main_services_block1"></div>
                      <div class="main_services_block main_services_item1">
                        <h1 class="main_services_item1_title">Дизайн интерьера</h1>
                        <p class="main_services_item1_desc">Придумаем, разработаем и&nbsp;воплотим в&nbsp;жизнь интерьеры любой сложности для всех типов жилых и&nbsp;общественных помещений. Большое портфолио реализованных проектов.</p>
                        <div class="main_services_links">
                          <a href="/uslugi/dizajn-interera" class="main_services_link">Квартиры</a>
                          <a href="/uslugi/dizajn-interera-domov" class="main_services_link">Дома</a>
                          <a href="/uslugi/dizajn-interera-ofisov" class="main_services_link">Офиса</a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <h2 class="content_h2" id="hranenie_3">Что выбрать: гардеробную или шкаф?</h2>
                  <div class="content_text">
                    <p class="content_p">Делать выбор в&nbsp;пользу гардеробной или шкафа необходимо, учитывая не&nbsp;только личные потребности владельца дома или квартиры, но&nbsp;и&nbsp;габариты помещения.</p>
                    <p class="content_p">Если речь идёт о&nbsp;небольшой квартире, то&nbsp;гардеробная может уменьшить полезное пространство, поэтому есть смысл организовать несколько просторных и&nbsp;функциональных шкафов. Для организации хранения вещей и&nbsp;одежды в&nbsp;большой квартире или частном доме, стоит присмотреться к&nbsp;гардеробным. Наш совет&nbsp;&mdash; организовывать гардеробную, если вы&nbsp;имеете хотя 5&nbsp;м<sup>2</sup>&nbsp;свободной полезной площади.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/luxury/19_luxury.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luxury/19_luxury.jpg" alt="Гардеробная в спальне за стеклом" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/apart_for_life/09_apart_for_life.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/apart_for_life/09_apart_for_life.jpg" alt="Спальня с кроватью, шкафом и балконом" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Желательно организовывать зоны для хранения одежды в&nbsp;каждой комнате кроме кабинета: шкаф или гардеробную&nbsp;&mdash; при каждой спальне и&nbsp;детской, в&nbsp;гостиной можно ограничиться комодами и&nbsp;стеллажами.</p>
                  </div>
                  <h2 class="content_h2" id="hranenie_4">Комоды и&nbsp;стеллажи</h2>
                  <div class="content_text">
                    <p class="content_p">Стеллажи применяются не&nbsp;только для хранения, но&nbsp;и&nbsp;для зонирования пространства. Они занимают небольшую площадь, не&nbsp;загромождают собой пространство и&nbsp;могут стать настоящей изюминкой интерьера.</p>
                    <p class="content_p">Стеллаж будет уместным в&nbsp;любой комнате не&nbsp;только в&nbsp;качестве системы хранения, но&nbsp;и&nbsp;в&nbsp;качестве функционального элемента, разграничивающего пространство. С&nbsp;его помощью можно разделить гостиную и&nbsp;столовую, столовую и&nbsp;кухню, прихожую и&nbsp;гостиную, отделить холл или лаунж-зону. В&nbsp;детской комнате он&nbsp;может зонировать комнату на&nbsp;спальное и&nbsp;рабочее место.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/04_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/04_korolya.jpg" alt="Стеллаж с книгами в коридоре" />
                      </a>
                    </div>
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/zelenyi/01_zelenyi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/zelenyi/01_zelenyi.jpg" alt="Стеллаж и диван в коридоре" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/sunny/38_sunny.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sunny/38_sunny.jpg" alt="Стеллаж в спальне с книгами" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Самые популярные материалы для изготовления стеллажей&nbsp;&mdash; дерево, МДФ и&nbsp;ДСП, но&nbsp;могут встречаться и&nbsp;оригинальные дизайнерские варианты из&nbsp;металла, керамики и&nbsp;стекла. Выбор материала зависит от&nbsp;оформления всего помещения. Также важно обратить внимание на&nbsp;содержимое стеллажа. Чтобы он&nbsp;не&nbsp;превратился в&nbsp;захламлённую полку, расположение книг и&nbsp;предметов декора стоит обсудить с&nbsp;дизайнером. Он&nbsp;поможет сделать так, чтобы наполнение стеллажа сочеталось с&nbsp;остальным интерьером.</p>
                    <p class="content_p">Интересная локальная система хранения&nbsp;&mdash; комод. Его можно разместить в&nbsp;любой части интерьера: вещи, которые должны быть спрятаны от&nbsp;чужих глаз, могут лежать внутри, а&nbsp;элементы декора&nbsp;&mdash; на&nbsp;столешнице.</p>
                    <p class="content_p">В&nbsp;прихожей обязательно должен быть комод и&nbsp;место для сидения. Выбор размера и&nbsp;глубины полок зависит от&nbsp;площади помещения и&nbsp;его назначения. Для большой семьи или любителей шопинга лучше выбрать просторный комод, куда поместятся все вещи. Если в&nbsp;квартире немного жильцов или они придерживаются минималистичного образа жизни, достаточно узкого комода с&nbsp;неглубокими полками.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/19_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/19_korolya.jpg" alt="Черный комод и картина в коридоре" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/17_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/17_d3.jpg" alt="Подвесной комод с подсветкой белого и черного цвета" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p"><b>Важно!</b> Размер любой системы хранения, будь&nbsp;то гардеробная, шкаф или стеллаж, определяет его наполнение: количество одежды, обуви, книг и&nbsp;элементов декора, их&nbsp;размера и&nbsp;частоты использования. Например, длинное пальто, шуба или куртка в&nbsp;невысоком шкафу или гардеробной могут деформироваться и&nbsp;потерять красивый внешний вид.</p>
                    <p class="content_p">Продумать все эти и&nbsp;многие другие нюансы поможет профессиональный дизайнер. Он&nbsp;ещё на&nbsp;этапе проектирования уточнит детали и&nbsp;сделает систему хранения предельно удобной и&nbsp;красивой.</p>
                  </div>
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <h3 class="content_h2">Похожие статьи</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="articles_page"
            columnClassName="my-masonry-grid_column">
            <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/spalnya'}/> </p>
            </Link>
            <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/architectura'}/> </p>
            </Link>
            <Link to="/articles/dveri" className="articles_page_item articles_page_item3">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_white"> <GetPageView slug={'/articles/dveri'}/> </p>
            </Link>
            <Link to="/articles/krovlya" className="articles_page_item articles_page_item2">
              <h4 className="articles_page_item_title_medium articles_page_item_title_white">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/krovlya'}/> </p>
            </Link>
          </Masonry>
        </div>
      </section>
    </Layout>
  )
}

export default hranenie
const breakpointColumnsObj = {
  default: 4,
  768: 1
};