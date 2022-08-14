import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";
import { PageViewCounter } from "../../subitems/pageViewsCounter/pageViewCounter"
import { GetPageView } from "../../subitems/pageViewsCounter/getPageView"
import Seo from "../../components/seo"

const dveri = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Как выбрать межкомнатные двери | I-PROJECT"} description={"Выбираем межкомнатные двери для интерьера. Преимущества скрытых дверей."}
            location={"https://i-project.by/articles/dveri"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-3.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg3">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/dveri/#dveri_1" title="Скрытая дверь&nbsp;&mdash; изящное решение для квартиры и&nbsp;дома" /></li>
                <li><AnchorLink to="/articles/dveri/#dveri_2" title="Виды кромок" /></li>
                <li><AnchorLink to="/articles/dveri/#dveri_3" title="Другие варианты межкомнатных дверей" /></li>
                <li><AnchorLink to="/articles/dveri/#dveri_4" title="Что можно использовать вместо дверей?" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Межкомнатные двери в&nbsp;современном интерьере&nbsp;&mdash; это не&nbsp;просто функциональный элемент, который обеспечивает звукоизоляцию помещений. Сегодня они являются частью единой композиции, в&nbsp;рамках определенного интерьерного стиля. Именно поэтому выбору межкомнатных дверей стоит уделить особое внимание.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_three_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/baltic_house/interior/14_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/14_baltic_home_interior.jpg" alt="Лестница на второй этаж и белые двери" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/zelenyi/13_zelenyi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/zelenyi/13_zelenyi.jpg" alt="Интерьер светлой спальни, с картинами и растениями" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/zelenyi/03_zelenyi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/zelenyi/03_zelenyi.jpg" alt="Зеленый коридор дома со стеллажом и диваном" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Главный тренд последних лет&nbsp;&mdash; отделка и/или окрашивание полотна двери в&nbsp;цвет стен. Это позволяет не&nbsp;перегружать помещение деталями и&nbsp;делает акцент на&nbsp;других, более выразительных элементах. Дверь должна гармонично дополнять интерьер, а&nbsp;не&nbsp;становится его отправной точкой.</p>
                  </div>
                  <h2 class="content_h2" id="dveri_1">Скрытая дверь&nbsp;&mdash; изящное решение для квартиры и&nbsp;дома</h2>
                  <div class="content_text">
                    <p class="content_p">Отличный вариант для создания современного и&nbsp;стильного интерьера&nbsp;&mdash; скрытая дверь или &laquo;дверь-невидимка&raquo;. Она позволяет визуально увеличить пространство любых жилых помещений.</p>
                    <p class="content_p">Монтаж скрытых дверей осуществляется в&nbsp;два этапа: на&nbsp;этапе строительных работ монтируется скрытый короб, а&nbsp;после отделки стен устанавливается полотно. Высота дверного проёма зависит от&nbsp;общей высоты помещения и&nbsp;ширины двери: она может быть и&nbsp;стандартной, такое решение дешевле, но&nbsp;эффектнее выглядят дверные полотна с&nbsp;увеличенной высотой, иногда высота проема может занимать и&nbsp;всю стену от&nbsp;пола до&nbsp;потолка.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_withtext">
                      <div class="content_images_one">
                        <a
                          href="https://i-project.by/portfolio_newsite/sunny/20_sunny.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/sunny/20_sunny.jpg" alt="Спальня с черной стенок и скрытой дверью" />
                        </a>
                      </div>
                      <p class="content_images_p_left">Появление скрытых дверей&nbsp;&mdash; это логическое развитие дизайна, их&nbsp;незаметность позволяет им&nbsp;вписаться практически в&nbsp;любой интерьер.</p>
                    </div>
                  </div>
                  <div class="content_images">
                    <div class="content_images_withtext">
                      <div class="content_images_three_left_narrow">
                        <a
                          href="https://i-project.by/portfolio_newsite/d3/19_d3.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/d3/19_d3.jpg" alt="Гардеробная со скрытой дверью" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/color/06_color.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/color/06_color.jpg" alt="Гостиная с желтой стеной и скрытой дверью" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/sunny/36_sunny.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/sunny/36_sunny.jpg" alt="Детская комната с синей стеной и скрытой дверью" />
                        </a>
                      </div>
                      <p class="content_images_p_left">Скрытые двери, которые повторяют фактуру и&nbsp;тон стены, делают интерьер стильным, гармоничным и&nbsp;не&nbsp;нарушают его целостности.</p>
                    </div>
                    
                    
                  </div>
                  <div class="content_text">
                    <p class="content_p">При выборе любой двери важно обращать внимание на&nbsp;материал, из&nbsp;которого она выполнена. Желательно, чтобы у&nbsp;скрытой двери был прочный металлический каркас.</p>
                    <p class="content_p">Не&nbsp;рекомендуется выбирать варианты &laquo;под покраску&raquo;, то&nbsp;есть двери, которые строители смогут покрасить в&nbsp;цвет стен после установки. Это недорогой, но&nbsp;недолговечный вариант. Скрытые двери на&nbsp;производстве покрывают специальной эмалью, которая обеспечивает их&nbsp;износостойкость, поэтому лучше определиться с&nbsp;цветом стен заранее и&nbsp;отправить образцы краски производителю дверей.</p>
                  </div>
                  <h2 class="content_h2" id="dveri_2">Виды кромок</h2>
                  <div class="content_text">
                    <p class="content_p">Скрытые межкомнатные двери имеют специальную кромку. Она крепится по&nbsp;периметру полотна и&nbsp;выполняет защитные функции.</p>
                    <p class="content_p">Кромки бывают следующих видов:</p>
                    <ul class="content_list">
                      <li>1. Меламиновая или бумажная кромка имеет бумажную основу, из-за чего обладает слабыми защитными характеристиками. Она, как правило, применяется для самых бюджетных вариантов межкомнатных дверей. Такой тип кромки часто отслаивается после завершения гарантийного срока эксплуатации.</li>
                      <li>2. Кромка ПВХ чаще всего изготавливается в&nbsp;цвет полотна двери. Используется для бюджетных моделей межкомнатных дверей, однако, по&nbsp;эксплуатационным характеристикам опережает меламиновую.</li>
                      <li>3. ABS-кромка производится из&nbsp;термопластичного полимера, она обладает высокими эксплуатационными характеристиками, устойчива к&nbsp;механическим повреждениям и&nbsp;влажности. Один из&nbsp;самых прочных вариантов.</li>
                      <li>4. Кромка из&nbsp;шпона применяется только для дверей из&nbsp;аналогичного материала. Ее&nbsp;долговечность зависит от&nbsp;качества применяемого шпона.</li>
                      <li>5. Алюминиевая кромка также относится к&nbsp;числу долговечных кромок. Может быть матовой, цветной и&nbsp;хромированной. Она не&nbsp;поддается коррозии, сочетается практически с&nbsp;любыми материалами и&nbsp;защищает дверное полотно от&nbsp;деформации.</li>
                    </ul>
                  </div>
                  <h2 class="content_h2" id="dveri_3">Другие варианты межкомнатных дверей</h2>
                  <div class="content_text">
                    <p class="content_p">Классические интерьеры стоит дополнять классическими межкомнатными дверями, но&nbsp;и&nbsp;для них лучше выбирать полотно в&nbsp;цвет стен.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_withtext">
                      <div class="content_images_two">
                        <a
                          href="https://i-project.by/portfolio_newsite/sochi/03_sochi.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/sochi/03_sochi.jpg" alt="Кухня с обеденной зоной и белой дверью" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/korolya/3d/1.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/korolya/3d/1.jpg" alt="Вход на кухню со стеклянными дверями и картиной" />
                        </a>
                      </div>
                      <p class="content_images_p_right">Стеклянная дверь позволяет незаметно разделить комнаты, но&nbsp;при этом наполняет интерьер воздухом, делает его легким и&nbsp;стильным.</p>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">По&nbsp;механизму открывания межкомнатные двери делят&nbsp;на:</p>
                    <ul class="content_list">
                      <li>1. Раздвижные (открываются параллельно стене и&nbsp;задвигаются в&nbsp;специальную нишу в&nbsp;ней).</li>
                      <li>2. Распашные (открываются в&nbsp;одну сторону).</li>
                      <li>3. Маятниковые (открываются в&nbsp;обе стороны).</li>
                      <li>4. Карусельные (открываются посредством вращения по&nbsp;оси, которая находится в&nbsp;центре двери).</li>
                    </ul>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Главный тренд последних лет&nbsp;&mdash; отделка и/или окрашивание полотна двери в&nbsp;цвет стен. Это позволяет не&nbsp;перегружать помещение деталями и&nbsp;делает акцент на&nbsp;других, более выразительных элементах. Дверь должна гармонично дополнять интерьер, а&nbsp;не&nbsp;становится его отправной точкой.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/storojevskaya/02_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/02_storojevskaya.jpg" alt="Кухня гостиная и столовая, серый диван" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/26_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/26_d3.jpg" alt="Коридор с картинами и зеркалом" />
                      </a>
                    </div>
                    <div class="content_images_withtext">
                      <div class="content_images_two">
                        <a
                          href="https://i-project.by/portfolio_newsite/baltic_house/interior/11_baltic_home_interior.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/baltic_house/interior/11_baltic_home_interior.jpg" alt="Лестница на второй этаж и коридор с картинами" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/mogilev_apart/15_mogilev_apart.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/mogilev_apart/15_mogilev_apart.jpg" alt="Спальня с раздвижными прозрачными створками в санузел" />
                        </a>
                      </div>
                      <p class="content_images_p_right">Использовать стеклянные двери и&nbsp;перегородки можно в&nbsp;любой комнате. Один из&nbsp;вариантов&nbsp;&mdash; выделить гардеробную при спальне. Чтобы скрыть эту зону от&nbsp;посторонних глаз, можно подобрать стекло в&nbsp;цвет стен.</p>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Также важно обращать внимание на&nbsp;материал, из&nbsp;которого изготовлены двери. Современные производители предлагают массив, ламинированные ДВП, экошпон, МДФ, полимеры, композиты, стекло и&nbsp;другие.</p>
                    <p class="content_p">Делая выбор в&nbsp;пользу массива, нужно учитывать климатические характеристики помещения. Дверь из&nbsp;массива может меняться в&nbsp;размере из-за перепада температур и&nbsp;изменения влажности. Если в&nbsp;помещении установлена система &laquo;умный дом&raquo;, которая отвечает за&nbsp;работу приточно-вытяжной системы и&nbsp;контролирует микроклимат, за&nbsp;сохранность двери из&nbsp;массива можно не&nbsp;волноваться. В&nbsp;противном случае лучше выбрать шпонированные двери из&nbsp;МДФ или других материалов. В&nbsp;идеале, в&nbsp;основании дверной конструкции должен использоваться алюминиевый металлокаркас.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/09_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/09_korolya.jpg" alt="Коридор коричневого цвета с пуфом и зеркалом" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/11_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/11_korolya.jpg" alt="Вход в санузел в мастер-спальне" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Иногда бывает так, что для интерьера дверь нужно лицевать по&nbsp;одной стороне, а&nbsp;открывать в&nbsp;другую. Для таких случаев существуют модели дверей с&nbsp;обратным открыванием (&laquo;компланарностью&raquo;), но&nbsp;такие модели предлагаются далеко не&nbsp;всеми производителями&nbsp;&mdash; эти моменты важно учесть на&nbsp;стадии создания дизайн-проекта.</p>
                    <p class="content_p">Важный момент, о&nbsp;котором многие забывают, имея дело с&nbsp;дверями-невидимками, подбор правильного плинтуса. Так как, если у&nbsp;нас нет выступающего наличника, то&nbsp;и&nbsp;выступающему плинтусу не&nbsp;во&nbsp;что будет упереться, а&nbsp;неожиданно оборвавшаяся перед дверью линия плинтуса выглядит по&nbsp;меньшей мере странно... Идеальным решением, если вы&nbsp;сделали выбор в&nbsp;пользу дверей-невидимок, будет использование встраиваемого плинтуса. Для этого, на&nbsp;стадии строительства, в&nbsp;стены устанавливаются закладные направляющие, в&nbsp;которые на&nbsp;этапе чистовой отделки защелкивается вкладыш плинтуса.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/mogilev_apart/05_mogilev_apart.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/mogilev_apart/05_mogilev_apart.jpg" alt="Коридор в квартире со скрытыми дверями" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/mogilev_apart/17_mogilev_apart.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/mogilev_apart/17_mogilev_apart.jpg" alt="Спальня с раздвижными створками в санузел" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Чтобы быть на&nbsp;100% уверенным в&nbsp;качестве и&nbsp;долговечности дверей, не&nbsp;рекомендуется выбирать фирму-изготовителя исключительно по&nbsp;цене продукции. Выбрать добросовестного подрядчика поможет дизайнер, у&nbsp;которого, как правило, всегда есть список проверенных производителей.</p>
                    </div>
                  <h2 class="content_h2" id="dveri_4">Что можно использовать вместо дверей?</h2>
                  <div class="content_text">
                    <p class="content_p">Вместо межкомнатных дверей можно использовать раздвижные перегородки. Это универсальный инструмент разделения пространства, который не&nbsp;влияет на&nbsp;полезную площадь помещения и&nbsp;варианты расстановки мебели. Главное&nbsp;&mdash; определиться со&nbsp;степенью прозрачности и&nbsp;звукоизоляции, а&nbsp;также понять, какое оформление перегородки соответствует интерьеру вашей квартиры.</p>
                    <p class="content_p">Конструктивно раздвижная перегородка представляет собой несколько полотен, которые устанавливаются на&nbsp;направляющие и&nbsp;профили. Современные технологии позволяют монтировать перегородки без порога, чтобы это было удобно и&nbsp;безопасно для передвижения всех жильцов квартиры. В&nbsp;таком случае для монтажа применяется верхний подвес, по&nbsp;которому движутся полотна.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/01_korolya.jpg" alt="Гостиная с видом на кухню и комод" />
                      </a>
                    </div>
                    <div class="content_images_withtext">
                      <div class="content_images_two">
                        <a
                          href="https://i-project.by/portfolio_newsite/sochi/05_sochi.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/sochi/05_sochi.jpg" alt="Гостиная с синим диваном и стеклянными дверями" />
                        </a>
                        <a
                          href="https://i-project.by/portfolio_newsite/simple_house/09_simple_house.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/simple_house/09_simple_house.jpg" alt="Коридор с лестницей и скрытыми дверями" />
                        </a>
                      </div>
                      <p class="content_images_p_left">Выполняя функцию физического разделения помещений, стеклянная дверь визуально объединяет пространство, оптически увеличивая его. Она может быть как полностью прозрачной, так и&nbsp;слегка затемненной или выполненной из&nbsp;рельефного стекла.</p>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Специальная система раздвижных перегородок монтируется на&nbsp;стадии строительства до&nbsp;установки подвесного потолка. Полотна навешиваются после завершения отделки, чтобы избежать их&nbsp;загрязнения.</p>
                    <p class="content_p">По&nbsp;материалу изготовления раздвижные перегородки делятся на&nbsp;глухие и&nbsp;прозрачные. Глухие перегородки, помимо функции разделения пространства, при необходимости, обеспечивают звуко- и&nbsp;светоизоляцию. Прозрачные перегородки чаще всего выполняются из&nbsp;стекла, оно может быть чистым, слегка матированным, с&nbsp;легким зеркальным эффектом, с&nbsp;эффектом затемнения или имеющим особые виды фактуры и&nbsp;рельефа стекла. По&nbsp;этой причине они применяются чаще для зонирования пространства. Чтобы создать эффект уединения в&nbsp;таких случаях, к&nbsp;перегородкам из&nbsp;стекла можно добавить портьеры, с&nbsp;эффектом шумоизоляции (например, бархат) и/или светоизоляции (blackout).</p>
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

export default dveri
const breakpointColumnsObj = {
  default: 4,
  768: 1
};