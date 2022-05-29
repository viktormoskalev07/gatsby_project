import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";
import { PageViewCounter } from "../../subitems/pageViewsCounter/pageViewCounter"
import Seo from "../../components/seo"

const planApart = ({location }) => {

  return (
    <Layout>
      <Seo  title={"Планировка квартиры. Основные правила | I-PROJECT"} description={"Выделим 6 рекомендаций для планировки квартиры от 90 м2. Сравним планировки реализованных квартир."}
            location={"https://www.i-project.by/articles/plan-apart"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg12">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Планировка квартиры. Основные правила</h1>
              {/* <p class="article_view_number article_view_number_white"> <PageViewCounter defaultNumber={44}  /></p> */}
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/plan-apart/#plan-apart_1" title="Определите конструктивные особенности каждого помещения" /></li>
                <li><AnchorLink to="/articles/plan-apart/#plan-apart_2" title="Изучите стены и&nbsp;определите несущие" /></li>
                <li><AnchorLink to="/articles/plan-apart/#plan-apart_3" title="Уделите внимание инженерным системам" /></li>
                <li><AnchorLink to="/articles/plan-apart/#plan-apart_4" title="Планируйте на&nbsp;перспективу" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Планировка квартиры&nbsp;&mdash; это организация ее&nbsp;внутреннего пространства, на&nbsp;которую влияет множество факторов: габариты помещений, их&nbsp;расположение по&nbsp;отношению друг к&nbsp;другу, высота потолков, форма и&nbsp;материал стен, инженерные коммуникации, размер и&nbsp;направление окон и&nbsp;дверных проемов и&nbsp;т.п.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/01_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/01_baltic_home_interior.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/apart_for_life/01_apart_for_life.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/apart_for_life/01_apart_for_life.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Правильная планировка квартиры, расположенной в&nbsp;комфортном районе с&nbsp;хорошей инфраструктурой&nbsp;&mdash; поможет сохранить время, здоровье и&nbsp;нервы.</p>
                    <p class="content_p">Собрали основные правила, которым необходимо следовать при разработке планировки квартиры.</p>
                  </div>
                  <h2 class="content_h2" id="plan-apart_1">Определите конструктивные особенности каждого помещения</h2>
                  <div class="content_text">
                    <p class="content_p">Прежде чем разрабатывать планировку, нужно оценить условия, в&nbsp;которых предстоит работать, определить преимущества и&nbsp;недостатки. Таким образом, у&nbsp;вас будет полная картина ограничений, которые необходимо учитывать. Причем имеют значение не&nbsp;только конструктивные особенности изолированной квартиры, но&nbsp;и&nbsp;помещения, которые находятся этажом ниже.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/akvamarin/04_akvamarin.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/akvamarin/04_akvamarin.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/design_interier_2/06_design_interier_2.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/design_interier_2/06_design_interier_2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Проект планировки должен создаваться таким образом, чтобы сохранить и&nbsp;усилить преимущества, и&nbsp;по&nbsp;возможности избавиться от&nbsp;недостатков. Например, колоны или технические выступы можно обыграть в&nbsp;дизайне интерьера: интегрировать их&nbsp;в&nbsp;стеллажи или мебельные группы.</p>
                    <p class="content_p">Грамотная планировка позволит сделать интерьер комфортным, красивым и&nbsp;без излишеств. Обратите внимание, что все изменения должны осуществляться в&nbsp;соответствии со&nbsp;строительными и&nbsp;противопожарными нормами.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/sunny/09_sunny.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sunny/09_sunny.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="plan-apart_2">Изучите стены и&nbsp;определите несущие</h2>
                  <div class="content_text">
                    <p class="content_p">Первый шаг&nbsp;&mdash; определение несущих стен и&nbsp;материала, из&nbsp;которого они выполнены. Чаще всего это кирпич или железобетонные панели.</p>
                    <p class="content_p">Если стена несущая, это не&nbsp;значит, что её&nbsp;категорически запрещено штробить. Этот запрет распространяется на&nbsp;железобетонные ребра жесткости. В&nbsp;случае с&nbsp;кирпичными стенами можно рассмотреть некоторые варианты реализации пожеланий заказчика.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/filimonova/08_filimonova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/filimonova/08_filimonova.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Существуют планировки, в&nbsp;которых нет необходимости сносить или достраивать стены. В&nbsp;таком случае дизайнер занимается исключительно наполнением жилого пространства.</p>
                  </div>
                  <h2 class="content_h2" id="plan-apart_3">Уделите внимание инженерным системам</h2>
                  <div class="content_text">
                    <p class="content_p">Расположение стояков и&nbsp;организация системы вентиляции также влияет на&nbsp;планировку квартиры. Приточно-вытяжная система дает гораздо больше возможностей, однако, при ее&nbsp;использовании существуют определенные нюансы. Так, классические системы вентиляции, которые применяются во&nbsp;многих белорусских квартирах, отличаются большими размерами, а&nbsp;значит забирают около 20&nbsp;сантиметров высоты потолка.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/color/07_color.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/color/07_color.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Именно поэтому для квартир рекомендуется применять альтернативные вентиляционные системы, например, Zehnder. Они отличаются небольшими воздуховодами и&nbsp;эффективным распределением воздухообмена.</p>
                  </div>
                  <h2 class="content_h2" id="plan-apart_4">Планируйте на&nbsp;перспективу</h2>
                  <div class="content_text">
                    <p class="content_p">Разрабатывая планировку квартиры учитывайте не&nbsp;только нынешнее положение вещей, но&nbsp;и&nbsp;будущее. Например, идеальный вариант для холостяка&nbsp;&mdash; квартира с&nbsp;двумя комнатами. Однако, статус может измениться и&nbsp;тогда понадобятся дополнительные помещения и&nbsp;другие варианты зонирования.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/moskvina/01_moskvina.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/moskvina/01_moskvina.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/kaskad/09_kaskad.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/kaskad/09_kaskad.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Существуют рекомендации, касающиеся непосредственно планировки:</p>
                  </div>
                  <ul class="content_list">
                    <li>1. Зону кухни, как правило, совмещают со&nbsp;столовой или гостиной. В&nbsp;зависимости от&nbsp;пожеланий заказчика совмещение может быть полным или частичным.</li>
                    <li>2. Если площадь квартиры позволяет, спланируйте гостевой санузел и&nbsp;санузлы при спальнях. Дополнительный санузел&nbsp;&mdash; комфортное решение для всех квартир, в&nbsp;которых живет больше одного человека.</li>
                  </ul>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/korolya/11_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/11_korolya.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <ul class="content_list">
                    <li>3. Предыдущая рекомендация касается и&nbsp;гардеробной. Отлично, если общая гардеробная будет при входе в&nbsp;квартиру и&nbsp;отдельная&nbsp;&mdash; при каждой спальне. Выберите шкаф вместо гардеробной, если нужно сэкономить полезное пространство комнаты.</li>
                  </ul>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/storojevskaya/30_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/30_storojevskaya.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <ul class="content_list">
                    <li>4. По&nbsp;возможности организуйте хозяйственное помещение, где будет храниться инвентарь и&nbsp;бытовая техника для уборки.Часто хоз помещение совмещают с&nbsp;постирочной, в&nbsp;которой необходимо предусмотреть размещение стиральной и&nbsp;сушильной машины, в&nbsp;идеале&nbsp;&mdash; сушильного шкафа.</li>
                    <li>5. Если места на&nbsp;хоз помещение нет, то&nbsp;постирочную организовывают в&nbsp;одном из&nbsp;санузлов.</li>
                    <li>6. Продумайте наполнение балкона, чтобы он&nbsp;не&nbsp;превратился в&nbsp;помещение для хранения хозяйственного хлама. Глубокий и&nbsp;широкий балкон может стать самостоятельной зоной, даже если он&nbsp;не&nbsp;застеклен. Летом и&nbsp;весной это отличное место отдыха, особенно если открывается красивый вид. Маленький балкон чаще всего присоединяют к&nbsp;основной комнате, чтобы использовать имеющееся пространство по&nbsp;максимуму.</li>
                  </ul>
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
              {/* <p className="articles_page_item_view_number articles_page_item_view_number_grey1">3536</p> */}
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

export default planApart
const breakpointColumnsObj = {
  default: 4,
  768: 1
};