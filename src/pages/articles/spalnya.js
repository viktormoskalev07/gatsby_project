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

const spalnya = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Секреты идеального дизайна спальни | I-PROJECT"} description={"Попробуем разобрать в основных аспектах дизайна спальни. Практические рекомендации как сделать спальню мечты."}
            location={"https://i-project.by/articles/spalnya"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-5.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg5">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Спальня мечты: секреты идеального дизайна</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/spalnya/#spalnya_1" title="Грамотное зонирование" /></li>
                <li><AnchorLink to="/articles/spalnya/#spalnya_2" title="Правильное наполнение" /></li>
                <li><AnchorLink to="/articles/spalnya/#spalnya_3" title="Уместное освещение" /></li>
                <li><AnchorLink to="/articles/spalnya/#spalnya_4" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/articles/spalnya/#spalnya_5" title="Подходящая цветовая гамма" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Человек проводит во&nbsp;сне треть своей жизни, именно поэтому спальня претендует на&nbsp;одно из&nbsp;первых мест в&nbsp;общей иерархии комнат квартиры и&nbsp;дома. Дизайн в&nbsp;спальне имеет важное значение не&nbsp;только для эстетического удовольствия её&nbsp;пользователей, но&nbsp;и&nbsp;для качественного отдыха. Остановимся на&nbsp;важных аспектах, которые будут влиять ваш комфорт.</p>
                  </div>
                  <h2 class="content_h2" id="spalnya_1">Грамотное зонирование</h2>
                  <div class="content_text">
                    <p class="content_p">По&nbsp;эргономике пространство в&nbsp;спальне нужно разделить таким образом, чтобы скрыть кровать от&nbsp;посторонних взглядов, она не&nbsp;должна стоять прямо напротив входа.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_three">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/10_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/10_korolya.jpg" alt="Кресло со столиком в спальне" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/11_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/11_korolya.jpg" alt="Выход из спальни в ванную комнату" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/14_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/14_korolya.jpg" alt="Кровать и кресло в спальне" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Для комфортного передвижения по&nbsp;комнате также важно учесть размер проходов&nbsp;&mdash; не&nbsp;менее 70&nbsp;см до&nbsp;стены или шкафа&nbsp;&mdash; так вы&nbsp;сможете свободно раздеться и&nbsp;лечь.</p>
                    <p class="content_p">Если кровать двуспальная, то&nbsp;проходы необходимо оставлять с&nbsp;обеих сторон&nbsp;&mdash; чтобы было удобно застилать кровать, вставать и&nbsp;ложиться, при этом не&nbsp;мешая сну другого человека.</p>
                    <p class="content_p">Если позволяет площадь дома или квартиры, из&nbsp;спальни желательно иметь прямой доступ в&nbsp;отдельный санузел и&nbsp;гардеробную.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/18_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/18_d3.jpg" alt="Гардеробная в мастер-спальне" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/storojevskaya/25_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/25_storojevskaya.jpg" alt="Ванная комната в мастер-спальне" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="spalnya_2">Правильное наполнение</h2>
                  <div class="content_text">
                    <p class="content_p">Мебель для спальни должны быть экологичной, качественной, эргономичной и&nbsp;комфортной.</p>
                    <p class="content_p">Кровать&nbsp;&mdash; центр композиции, который определяет расстановку остальной мебели и&nbsp;задаёт настроение всему интерьеру. Каркас должен быть выполнен из&nbsp;качественных материалов, большое внимание необходимо уделить матрасу. Правильный матрас с&nbsp;ортопедическим эффектом способствует хорошему кровообращению&nbsp;и, как результат, полноценному отдыху.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/14_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/14_korolya.jpg" alt="Проработанный интерьер в мастер-спальне" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/15_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/15_d3.jpg" alt="Дорогой интерьер в мастер-спальне" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Рядом с&nbsp;кроватью обязательно должны располагаться прикроватные тумбочки или столики. Это эстетично и&nbsp;функционально. Если площадь комнаты позволяет, то&nbsp;в&nbsp;спальне желательно разместить небольшой столик и&nbsp;кресло. За таким столиком можно делать макияж, читать или работать.</p>
                    <p class="content_p">Уделите особое внимание освещению в&nbsp;этой зоне, оно играет важную роль. Можно использовать светильник, бра или точечную подсветку. Свет должен быть достаточно ярким, но&nbsp;не&nbsp;слепить.</p>
                    <p class="content_p">Наличие телевизора в&nbsp;спальне&nbsp;&mdash; индивидуальный момент. Последний тренд в&nbsp;дизайне&nbsp;&mdash; минимизировать использование этого предмета в&nbsp;интерьере, особенно в&nbsp;комнатах, предназначенных для расслабления.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_three_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/14_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/14_d3.jpg" alt="Прикроватная тумба с цветком" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/prestizhino/14_prestizhino.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/prestizhino/14_prestizhino.jpg" alt="Минималистичный интерьер спальни" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/color/11_color.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/color/11_color.jpg" alt="Кровать и шкаф в интерьере спальни" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="spalnya_3">Уместное освещение</h2>
                  <div class="content_text">
                    <p class="content_p">В&nbsp;спальне не&nbsp;рекомендуется использовать слишком яркое освещение, свет должен быть мягким.</p>
                    <p class="content_p">Чтобы расслабиться, достаточно рассеянного света с&nbsp;умеренной яркостью тёплого тона или цветовой температурой 3000&nbsp;К. Яркие источники света с&nbsp;цветовой температурой 4000&nbsp;К или выше не&nbsp;подходят для спальни, так как они активизируют мозговую деятельность и&nbsp;могут стать причиной бессонницы и&nbsp;прочих нарушений сна.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/sochi/10_sochi.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sochi/10_sochi.jpg" alt="Кровать в классическом стиле" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Что касается источников света, зачастую для спальни достаточно торшера, пары прикроватных бра и&nbsp;небольшой подсветки по&nbsp;периметру. Если кажется, что иногда света не&nbsp;хватает, на&nbsp;потолке можно разместить локальные точечные светильники, которые пригодятся, например, во&nbsp;время уборки.</p>
                    <p class="content_p">Если в&nbsp;комнате находится макияжный столик или шкаф, их&nbsp;тоже желательно подсветить. Возле зеркала также желательно предусмотреть источник света, для шкафа лучше использовать встроенную подсветку, включающуюся от&nbsp;датчика.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/prestizhino/11_prestizhino.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/prestizhino/11_prestizhino.jpg" alt="Кровать в минималистичном интерьере" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/panfilova/08_panfilova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/panfilova/08_panfilova.jpg" alt="Кровать в современном интерьере" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="spalnya_4">Мастер-спальня</h2>
                  <div class="content_text">
                    <p class="content_p">Мастер-спальня&nbsp;&mdash; актуальный тренд в&nbsp;создании интерьеров. Это часть жилой зоны, в&nbsp;которой есть все необходимое для полного комфорта: непосредственно спальня, личный санузел, гардеробная, а&nbsp;иногда выход на&nbsp;балкон или небольшой кабинет.</p>
                    <p class="content_p">Как правило, мастер-спальню организуют в&nbsp;больших квартирах, где живут семьи с&nbsp;детьми или старшими родственниками. Это грамотное и&nbsp;логичное решение, благодаря которому у&nbsp;хозяев квартиры появляется личное пространство. Они могут побыть наедине, отдохнуть в&nbsp;тишине или собраться на&nbsp;работу, не&nbsp;беспокоя при этом остальных членов семьи.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_right_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/15_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/15_d3.jpg" alt="Мастер-спальня в интерьере в жилом комплексе D3 в Минске" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/18_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/18_d3.jpg" alt="Гардеробная в мастер-спальне в жилом комплексе D3 в Минске" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="spalnya_5">Подходящая цветовая гамма</h2>
                  <div class="content_text">
                    <p class="content_p">Цвет стен в&nbsp;спальне зависит исключительно от&nbsp;предпочтений пользователя. Главная задача&nbsp;&mdash; создавать ощущение комфорта. Бытует мнение, что такую комнату стоит оформлять исключительно в&nbsp;спокойных тонах, но&nbsp;профессиональный дизайнер учтет все нюансы и&nbsp;сможет обыграть в&nbsp;интерьере любой цвет, поэтому не&nbsp;стоит бояться ярких элементов или темных цветов в&nbsp;оформлении.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/baltic_house/interior/29_baltic_home_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/interior/29_baltic_home_interior.jpg" alt="Кровать в современном интерьере" />
                      </a>
                    </div>
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/color/14_color.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/color/14_color.jpg" alt="Кровать и шкаф в интерьере спальни" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/prestizhino/13_prestizhino.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/prestizhino/13_prestizhino.jpg" alt="Кровать в минималистичном интерьере" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Обратите внимание, что с&nbsp;помощью цвета, как и&nbsp;света, можно немного корректировать пространство: сделать комнату визуально выше или шире, сместить акцент на&nbsp;некоторые элементы декора.</p>
                    <p class="content_p">Важный момент для дизайна спальни&nbsp;&mdash; текстиль. Шторы, покрывала и&nbsp;прочие мягкие элементы создают уютную атмосферу для отдыха и&nbsp;расслабления. Рекомендуется выбирать натуральные материалы. Они отвечают за&nbsp;приятные визуальные и&nbsp;тактильные ощущения и&nbsp;создают особое настроение.</p>
                    <p class="content_p"><b>Внимание!</b> Если речь идёт о&nbsp;гостевой спальне, её&nbsp;можно совместить с&nbsp;рабочим кабинетом. В&nbsp;этом случае меблировка и&nbsp;зонирование будут другими.</p>
                    <p class="content_p">В&nbsp;качестве спального места в&nbsp;такой спальне рекомендуется использовать раскладной диван с&nbsp;ортопедическим матрасом. Подобное решение будет более функциональным и&nbsp;позволит быстро трансформировать комнату из&nbsp;кабинета в&nbsp;спальню и&nbsp;наоборот.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/storojevskaya/30_storojevskaya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/storojevskaya/30_storojevskaya.jpg" alt="Вид из ванной в мастер-спальне" />
                      </a>
                    </div>
                    <div class="content_images_three">
                      <a
                        href="https://i-project.by/portfolio_newsite/fine/11_fine.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/fine/11_fine.jpg" alt="Балкон в спальне" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/panfilova/07_panfilova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/panfilova/07_panfilova.jpg" alt="Кровать в современном интерьере" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/apart_for_life/11_apart_for_life.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/apart_for_life/11_apart_for_life.jpg" alt="Балкон в спальне со шторами" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Стоит учитывать, что кабинеты в&nbsp;офисе и&nbsp;в&nbsp;жилом помещении значительно отличаются. Домашний кабинет представляет собой уютную комнату с&nbsp;удобным рабочим местом, где можно уединиться и&nbsp;отдохнуть. Варианты оформления и&nbsp;меблировки зависят от&nbsp;профессии хозяина кабинета.</p>
                    <p class="content_p">По&nbsp;возможности домашний кабинет должен быть максимально удален от&nbsp;шумных зон в&nbsp;квартире. В&nbsp;частном доме для кабинета можно организовать отдельный вход, тогда у&nbsp;домовладельцев появится возможность не&nbsp;только поработать с&nbsp;документами или за&nbsp;компьютером, но&nbsp;и&nbsp;провести локальную встречу с&nbsp;постоянным клиентом или партнером, не&nbsp;мешая остальным членам семьи.</p>
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

export default spalnya
const breakpointColumnsObj = {
  default: 4,
  768: 1
};
