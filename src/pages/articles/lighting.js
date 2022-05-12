import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";

const lighting = () => {
  return (
    <Layout>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg10">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Освещение в&nbsp;интерьере: рекомендации по&nbsp;подбору</h1>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/lighting/#lighting_1" title="Какие бывают источники света" /></li>
                <li><AnchorLink to="/articles/lighting/#lighting_2" title="Световые сценарии" /></li>
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
                        href="https://www.i-project.by/portfolio_newsite/storojevskaya/27_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/27_storojevskaya.jpg" alt="" />
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
                        href="https://www.i-project.by/portfolio_newsite/korolya/01_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/01_korolya.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/sunny/34_sunny.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sunny/34_sunny.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Так, гостиной, совмещенной с&nbsp;кухней и&nbsp;столовой, лучше комбинировать крупные центральные светильники (над столом и&nbsp;диванной группой), и&nbsp;небольшие периферийные источники света (встроенные светильники, ленточные подсветки, бра, торшер). Над рабочей поверхностью на&nbsp;кухне важно иметь достаточно яркий свет.</p>
                    <p class="content_p">В&nbsp;спальне при желании можно отказаться от&nbsp;центральных источников света и&nbsp;ограничиться торшерами, бра и&nbsp;подсветкой в&nbsp;нишах или вдоль определенных стен. Любителям почитать перед сном стоит обратить внимание на&nbsp;функциональные поворотные бра.</p>
                    <p class="content_p">Также светильники делятся на&nbsp;технические и&nbsp;дизайнерские или атмосферные. Главная функция технического света&nbsp;&mdash; это освещение помещения или его части. Осветительные приборы из&nbsp;этой категории не&nbsp;привлекают к&nbsp;себе внимание, их&nbsp;встраивают в&nbsp;потолочные ниши, прячут за&nbsp;карнизы и&nbsp;т.д. Они могут быть направленными или поворотными.</p>
                    <p class="content_p">Один из&nbsp;примеров&nbsp;&mdash; навигационные светильники, которые помогают ориентироваться в&nbsp;квартире в&nbsp;темное время суток, передвигаться по&nbsp;комнатам, лестницам и&nbsp;коридорам. Удобно для их&nbsp;включения использовать объемные датчики присутствия (не&nbsp;путать с&nbsp;датчиками на&nbsp;движение, которые работают не&nbsp;очень корректно).</p>
                    <p class="content_p">Дизайнерский свет&nbsp;&mdash; это своеобразный арт-объект, который может стать отличным дополнением любой комнаты. Главное правило при использовании дизайнерских светильников в&nbsp;интерьере&nbsp;&mdash; не&nbsp;переборщить. Их&nbsp;должно быть не&nbsp;много и&nbsp;только в&nbsp;самых ответственных местах (визуальных доминантах).</p>
                  </div>
                  <h2 class="content_h2" id="lighting_2">Световые сценарии</h2>
                  <div class="content_text">
                    <p class="content_p">Для создания световых сценариев отлично подойдет система &laquo;умный дом&raquo;, с&nbsp;помощью которой пользователь может менять пользовательские настройки и&nbsp;создавать разные сцены, например, дневные и&nbsp;вечерние. Благодаря этой функции один и&nbsp;тот&nbsp;же интерьер выглядит по-разному. Есть возможность создавать определенную атмосферу, например, для вечеринки или расслабленного отдыха с&nbsp;семьей. Лучше всего запланировать несколько сценариев с&nbsp;учетом пожеланий всех жильцов дома или квартиры.</p>
                    <p class="content_p">Каждый источник света имеет свой цвет. Именно поэтому важно подобрать лампочки и&nbsp;светодиодные кластеры для светильников с&nbsp;такими показателями в&nbsp;Кельвинах, чтобы свет не&nbsp;был слишком теплым или слишком холодным, без перепадов. Существуют также светильники, в&nbsp;которых выбрать определенную температуру можно с&nbsp;помощью программы автоматизации в&nbsp;системе &laquo;умный дом&raquo; и&nbsp;сохранить самый комфортный вариант.</p>
                    <p class="content_p">Каждый источник света, интегрированный в&nbsp;систему &laquo;умный дом&raquo;, можно диммировать или регулировать по&nbsp;яркости.</p>
                    <p class="content_p">Зачастую в&nbsp;подсветках кроме теплого или нейтрального света доступны разноцветные вариации&nbsp;&mdash; красный, зеленый, розовый и&nbsp;другие. Этот свет является специфическим, и&nbsp;его рекомендуется использовать только для особых зон, например, домашнего кинотеатра или лаунж-зоны.</p>
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
            </Link>
            <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h4>
            </Link>
            <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h4>
            </Link>
            <Link to="/articles/krovlya" className="articles_page_item articles_page_item2">
              <h4 className="articles_page_item_title_medium articles_page_item_title_white">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h4>
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