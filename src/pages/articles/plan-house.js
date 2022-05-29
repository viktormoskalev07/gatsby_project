import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";
import Seo from "../../components/seo"

const planHouse = () => {
  return (
    <Layout>
      <Seo  title={"Планировка дома: основные правила | I-PROJECT"} description={"Разбираем 4 основные фактора которые влияют на планировку дома. Делаем суммарный вывод."}
            location={"https://www.i-project.by/articles/plan-house"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg8">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Планировка дома: основные правила</h1>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/plan-house/#plan-house_1" title="Геология и&nbsp;геодезия участка" /></li>
                <li><AnchorLink to="/articles/plan-house/#plan-house_2" title="Расположение дома по&nbsp;сторонам света" /></li>
                <li><AnchorLink to="/articles/plan-house/#plan-house_3" title="Выбор этажности" /></li>
                <li><AnchorLink to="/articles/plan-house/#plan-house_4" title="Функциональное зонирование пространства" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Планировка&nbsp;&mdash; важнейший этап проектирования дома, в&nbsp;процессе которого в&nbsp;проект закладываются функциональные возможности здания. Именно рациональная и&nbsp;правильная планировка позволяет сделать дом не&nbsp;только красивым, но&nbsp;и&nbsp;надежным, долговечным и&nbsp;комфортным для всех жильцов.</p>
                    <p class="content_p">Чтобы результат оправдал ваши ожидания, при проектировании дома нужно придерживаться следующих рекомендаций.</p>
                  </div>
                  <h2 class="content_h2" id="plan-house_1">Геология и&nbsp;геодезия участка</h2>
                  <div class="content_text">
                    <p class="content_p">Геодезические и&nbsp;геологические исследования участка, отведенного под строительство, должны предшествовать проектированию.</p>
                    <p class="content_p">Геодезические работы связаны с&nbsp;изучением рельефа местности, перепадов, зеленых насаждений, других строений. От&nbsp;этих данных зависит положение дома на&nbsp;участке, виды из&nbsp;окон и&nbsp;визуальное восприятие самого строения.</p>
                    <p class="content_p">Геологические работы предполагают исследование почвы, пород, которые входят в&nbsp;ее&nbsp;состав. Эти данные влияют на&nbsp;выбор оптимального фундамента, который нужно дополнительно укреплять, если на&nbsp;участке есть нестабильные грунты. Также геологи определяют грунтовые воды, глубину их&nbsp;залегания и&nbsp;делают прогнозы о&nbsp;возможном подтоплении.</p>
                    <p class="content_p">На&nbsp;основе этой информации составляется проект, выбирается тип фундамента и&nbsp;материалы строительства.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/dom_u_more/02_dom_u_more.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dom_u_more/02_dom_u_more.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="plan-house_2">Расположение дома по&nbsp;сторонам света</h2>
                  <div class="content_text">
                    <p class="content_p">Грамотное расположение поможет сэкономить на&nbsp;отоплении, снизить теплопотери и&nbsp;обеспечить комнаты естественным светом. В&nbsp;связи с&nbsp;этим существует стереотип, что большинство окон частного дома должны выходить на&nbsp;юго-восток. Однако, при проектировании важно учитывать не&nbsp;только стороны света, а&nbsp;совокупность всех факторов.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/dom_sovremeniy/10_dom_sovremeniy.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dom_sovremeniy/10_dom_sovremeniy.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Так, если на&nbsp;северо-западе открывается красивый пейзаж, возможно, стоит рассмотреть этот вариант для размещения жилых комнат или гостиной, даже если в&nbsp;них будет попадать меньше по&nbsp;общепринятым нормам солнечного света. В&nbsp;таком случае стоит расставить приоритеты и&nbsp;определиться, что важнее: максимальное количество солнечного света в&nbsp;помещении или приятный вид из&nbsp;окна.</p>
                    </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/podmoskovye_interier/02_podmoskovye_interier.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/podmoskovye_interier/02_podmoskovye_interier.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/simple_house/05_simple_house.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/simple_house/05_simple_house.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Обратите внимание, что часть дома, обращенная на&nbsp;улицу должна быть более закрытой чем&nbsp;та, которая выходит во&nbsp;двор.</p>
                  </div>
                  <h2 class="content_h2" id="plan-house_3">Выбор этажности</h2>
                  <div class="content_text">
                    <p class="content_p">Этажность частного дома зависит не&nbsp;только от&nbsp;предпочтений хозяев, но&nbsp;и&nbsp;от&nbsp;размера участка, ландшафта. Двух- и&nbsp;более этажные дома рекомендуется возводить небольших по&nbsp;площади участках, чтобы сэкономить свободное место. Часто со&nbsp;второго этажа открывается хороший вид, чего практически невозможно достичь в&nbsp;случае с&nbsp;одноэтажной постройкой.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/simple_house/10_simple_house.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/simple_house/10_simple_house.jpg" alt="" />
                      </a>
                    </div>
                    <div class="content_images_two_left_narrow">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/14_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/14_baltic_home_interior.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/21_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/21_baltic_home_interior.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Важно понимать, что строительство дома высотой в&nbsp;несколько этажей обойдется дороже из-за закладывания более прочного фундамента и&nbsp;возведения стен.</p>
                    <p class="content_p">Также в&nbsp;малоэтажном частном доме нужно тщательно продумать вопрос возведения цокольного этажа. В&nbsp;некоторых случаях это помещение будет удобным, например, если в&nbsp;доме есть бассейн. Однако, строительство цокольного этажа в&nbsp;соответствии со&nbsp;всем правилами и&nbsp;нормами потребует от&nbsp;хозяев больших финансовых затрат.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/baltic_house/interior/37_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/37_baltic_home_interior.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="plan-house_4">Функциональное зонирование пространства</h2>
                  <div class="content_text">
                    <p class="content_p">Частный дом предполагает больше вариантов для зонирования, чем квартира, однако, есть и&nbsp;общепринятые правила.</p>
                    <p class="content_p">Так, вход в&nbsp;основные помещения рекомендуется организовать через тамбур, который станет своеобразным буфером и&nbsp;поможет уменьшить поток холодного воздуха, который попадает в&nbsp;дом с&nbsp;улицы. Если есть возможность, вход из&nbsp;гаража также нужно вывести в&nbsp;общий тамбур для удобства автовладельцев.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/house_minsk/11_house_minsk.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/house_minsk/11_house_minsk.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Кроме главного входа с&nbsp;улицы частный дом предполагает наличие входа со&nbsp;двора. Это может быть не&nbsp;просто дверь, а&nbsp;раздвижная стеклянная система, которую, при желании, в&nbsp;хорошую погоду можно оставлять открытой хоть на&nbsp;весь день. Необходимо продумать благоустройство участка, чтобы на&nbsp;него открывался красивый вид.</p>
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
                        href="https://www.i-project.by/portfolio_newsite/zelenyi/06_zelenyi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/zelenyi/06_zelenyi.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Некоторые зоны в&nbsp;частном доме могут быть совмещенными, как гостиная и&nbsp;кухня. Однако и&nbsp;в&nbsp;таком случае рекомендуется разделить зоны приготовления и&nbsp;организовать так называемую &laquo;грязную&raquo; кухню, которую еще называют &laquo;черной&raquo;, где происходит основной процесс приготовления и&nbsp;подготовки продуктов, а&nbsp;также мытья посуды. На&nbsp;&laquo;чистой&raquo; (&laquo;белой&raquo;) кухне можно дублировать варочные поверхности и&nbsp;мойку, но&nbsp;порядка там будет уже значительно больше, и&nbsp;вы&nbsp;сможете красиво и&nbsp;эффектно подать блюда гостям.</p>
                    <p class="content_p">В&nbsp;современном частном доме обязательно нужно спроектировать топочную и&nbsp;серверную, а&nbsp;также продумать размещение вентиляционного оборудования.</p>
                    <p class="content_p">Если дом многоэтажный, то&nbsp;на&nbsp;первом этаже чаще всего размещают совмещенные кухню и&nbsp;гостиную, а&nbsp;также минимум один общий санузел. На&nbsp;втором этаже в&nbsp;таком случае проектируются кабинеты, спальни, санузлы при них или рядом и&nbsp;гардеробные комнаты.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/dom_sovremeniy/09_dom_sovremeniy.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dom_sovremeniy/09_dom_sovremeniy.jpg" alt="" />
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

export default planHouse
const breakpointColumnsObj = {
  default: 4,
  768: 1
};