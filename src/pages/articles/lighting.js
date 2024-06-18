import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";
import { PageViewCounter } from "../../subitems/pageViewsCounter/pageViewCounter"
import { GetPageView } from "../../subitems/pageViewsCounter/getPageView"
import Seo from "../../components/seo"

const lighting = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Освещение в интерьере: рекомендации по подбору | I-PROJECT"} description={"Разделяем 3 вида источника света по назначению: дизайнерский, навигационный и рассеянный свет. Разбираемся где их использовать."}
            location={"https://i-project.by/articles/lighting"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-10.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg10">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Освещение в&nbsp;интерьере: рекомендации по&nbsp;подбору</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/lighting/#lighting_1" title="Какие бывают источники света" /></li>
                <li><AnchorLink to="/articles/lighting/#lighting_2" title="Световые сценарии" /></li>
                <li><AnchorLink to="/articles/lighting/#lighting_3" title="Подсветка для мебели" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Освещение в&nbsp;интерьере играет важную роль&nbsp;&mdash; оно не&nbsp;только создает комфортную для жизни атмосферу, но&nbsp;и&nbsp;подчеркивает дизайн, расставляет акценты. Именно поэтому при выборе источников должны выполняться два условия:</p>
                  </div>
                  <ul class="content_list">
                    <li>— Свет должен быть комфортным для человека, без пересветов и&nbsp;ослепляющих эффектов.</li>
                    <li>— Освещение должно подчеркивать достоинства и&nbsp;скрывать недостатки интерьера.</li>
                  </ul>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/storojevskaya/27_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/27_storojevskaya.jpg" alt="Освещение в мастер спальне" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="lighting_1">Какие бывают источники света</h2>
                  <div class="content_text">
                    <p class="content_p">В&nbsp;одном пространстве можно реализовать один или несколько световых сценариев за&nbsp;счет использования центральных и&nbsp;периферийных источников света, основного и&nbsp;дополнительного освещения. Использование конкретного типа зависит от&nbsp;конкретной комнаты и&nbsp;задачи. Существуют места, где нужен хороший общий рассеянный свет, а&nbsp;есть зоны, следует использовать мягкий фоновый или акцентированный точечный свет, чтобы выявить геометрию пространства или создать ритм.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/01_korolya.jpg" alt="Светильники в интерьере кухни и столовой" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/sunny/34_sunny.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sunny/34_sunny.jpg" alt="Гирлянда светильников в детской комнате" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Так, гостиной, совмещенной с&nbsp;кухней и&nbsp;столовой, лучше комбинировать крупные центральные светильники (над столом и&nbsp;диванной группой), и&nbsp;небольшие периферийные источники света (встроенные светильники, ленточные подсветки, бра, торшер). Над рабочей поверхностью на&nbsp;кухне важно иметь достаточно яркий свет.</p>
                    <p class="content_p">В&nbsp;спальне при желании можно отказаться от&nbsp;центральных источников света и&nbsp;ограничиться торшерами, бра и&nbsp;подсветкой в&nbsp;нишах или вдоль определенных стен. Любителям почитать перед сном стоит обратить внимание на&nbsp;функциональные поворотные бра.</p>
                    <p class="content_p">Также светильники делятся на&nbsp;технические и&nbsp;дизайнерские или атмосферные. Главная функция технического света&nbsp;&mdash; это освещение помещения или его части. Осветительные приборы из&nbsp;этой категории не&nbsp;привлекают к&nbsp;себе внимание, их&nbsp;встраивают в&nbsp;потолочные ниши, прячут за&nbsp;карнизы и&nbsp;т.д. Они могут быть направленными или поворотными.</p>
                    </div>
                    <div class="content_images">
                      <div class="content_images_two">
                        <a
                          href="https://i-project.by/portfolio_newsite/garmony_dom_interier/13_garmony_dom.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/garmony_dom_interier/13_garmony_dom.jpg" alt="Шкаф с подсветкой в мастер-спальне" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/garmony_dom_interier/20_garmony_dom.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/garmony_dom_interier/20_garmony_dom.jpg" alt="Шкаф с подсветкой в мастер-спальне" />
                        </a>
                      </div>
                    </div>
                  <div class="content_text">
                    <p class="content_p">Один из&nbsp;примеров&nbsp;&mdash; навигационные светильники, которые помогают ориентироваться в&nbsp;квартире в&nbsp;темное время суток, передвигаться по&nbsp;комнатам, лестницам и&nbsp;коридорам. Удобно для их&nbsp;включения использовать объемные датчики присутствия (не&nbsp;путать с&nbsp;датчиками на&nbsp;движение, которые работают не&nbsp;очень корректно).</p>
                    <p class="content_p">Дизайнерский свет&nbsp;&mdash; это своеобразный арт-объект, который может стать отличным дополнением любой комнаты. Главное правило при использовании дизайнерских светильников в&nbsp;интерьере&nbsp;&mdash; не&nbsp;переборщить. Их&nbsp;должно быть не&nbsp;много и&nbsp;только в&nbsp;самых ответственных местах (визуальных доминантах).</p>
                  </div>
                  <div class="content_images">
                    <div class="before_after">
                      <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                        <div slot="first" width="100%">
                          <StaticImage src="../../images/portfolio/protos_interior/31_protos_interior.jpg" alt="" />
                        </div>
                        <div slot="second" width="100%">
                          <StaticImage src="../../images/portfolio/protos_interior/04_protos_interior.jpg" alt="" />
                        </div>
                      </ImgComparisonSlider>
                    </div>
                  </div>
                  <h2 class="content_h2" id="lighting_2">Световые сценарии</h2>
                  <div class="content_text">
                    <p class="content_p">Для создания световых сценариев отлично подойдет система &laquo;умный дом&raquo;, с&nbsp;помощью которой пользователь может менять пользовательские настройки и&nbsp;создавать разные сцены, например, дневные и&nbsp;вечерние. Благодаря этой функции один и&nbsp;тот&nbsp;же интерьер выглядит по-разному. Есть возможность создавать определенную атмосферу, например, для вечеринки или расслабленного отдыха с&nbsp;семьей. Лучше всего запланировать несколько сценариев с&nbsp;учетом пожеланий всех жильцов дома или квартиры.</p>
                    <p class="content_p">Каждый источник света имеет свой цвет. Именно поэтому важно подобрать лампочки и&nbsp;светодиодные кластеры для светильников с&nbsp;такими показателями в&nbsp;Кельвинах, чтобы свет не&nbsp;был слишком теплым или слишком холодным, без перепадов. Существуют также светильники, в&nbsp;которых выбрать определенную температуру можно с&nbsp;помощью программы автоматизации в&nbsp;системе &laquo;умный дом&raquo; и&nbsp;сохранить самый комфортный вариант.</p>
                    <p class="content_p">Каждый источник света, интегрированный в&nbsp;систему &laquo;умный дом&raquo;, можно диммировать или регулировать по&nbsp;яркости.</p>
                    <p class="content_p">Зачастую в&nbsp;подсветках кроме теплого или нейтрального света доступны разноцветные вариации&nbsp;&mdash; красный, зеленый, розовый и&nbsp;другие. Этот свет является специфическим, и&nbsp;его рекомендуется использовать только для особых зон, например, домашнего кинотеатра или лаунж-зоны.</p>
                  </div>
                  <div class="content_images">
                    <h2 class="content_h2">Освещение</h2>
                    <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                      <div slot="first" width="100%">
                        <StaticImage src="../../images/portfolio/storojevskaya/24_storojevskaya.jpg" alt="" />
                      </div>
                      <div slot="second" width="100%">
                        <StaticImage src="../../images/portfolio/storojevskaya/22_storojevskaya.jpg" alt="" />
                      </div>
                    </ImgComparisonSlider>
                  </div>
                  <h2 class="content_h2" id="lighting_3">Подсветка для мебели</h2>
                  <div class="content_text">
                    <p class="content_p">Подсветка во&nbsp;внутренних секциях мебели имеет не&nbsp;только практическое, но&nbsp;и&nbsp;эстетическое предназначение. Она облегчает поиск нужных вещей даже при выключенном основном освещении, а&nbsp;также добавляет в&nbsp;интерьер эффект новизны и&nbsp;современности.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_right_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/10_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/10_d3.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/19_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/19_d3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Подсвечивать можно любые элементы мебели, в&nbsp;том числе, ящики, полки, дверцы.</p>
                    <p class="content_p">Для внутренней подсветки шкафов и&nbsp;ящиков могут применяться светодиодные или люминесцентные светильники в&nbsp;виде лент, фонарей или миниатюрных спотов. С&nbsp;помощью светодиодных лент можно подсветить ниши в&nbsp;шкафах и&nbsp;стенах, нижнюю часть кровати или дивана.</p>
                    <p class="content_p">Встраиваемые светильники используют, чтобы подсветить полки в&nbsp;шкафах со&nbsp;стеклянными дверцами или без них. В&nbsp;закрытые ящики можно встроить сенсорную подсветку, вибродатчик или ИК-сенсор&nbsp;&mdash; свет будет автоматически включаться при открывании дверцы.</p>
                    <p class="content_p">В&nbsp;случае с&nbsp;подсветкой мебели главное соблюдать правило умеренности. При грамотном подходе такой свет гармонично дополнит интерьер и&nbsp;упростит жизнь хозяевам.</p>
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
            <Link to="/articles/hranenie" className="articles_page_item articles_page_item6">
              <h4 className="articles_page_item_title_medium articles_page_item_title_black">Как организовать хранение вещей в&nbsp;доме и&nbsp;квартире</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hblack"> <GetPageView slug={'/articles/hranenie'}/> </p>
            </Link>
            <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/spalnya'}/> </p>
            </Link>
            <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/architectura'}/> </p>
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

export default lighting
const breakpointColumnsObj = {
  default: 4,
  768: 1
};