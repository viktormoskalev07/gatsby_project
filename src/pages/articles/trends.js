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

const trends = ({location }) => {
  return (
    <Layout>
      <Seo  title={"В погоне за трендом: как следовать за модой и при этом не навредить себе | I-PROJECT"} description={"Рассказываем о том, как ориентироваться на тренды в дизайне интерерьера и создать индивидуальный интерьер для себя."}
            location={"https://i-project.by/articles/trends"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-13.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg13">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">В&nbsp;погоне за&nbsp;трендом: как следовать за&nbsp;модой и&nbsp;при этом не&nbsp;навредить себе</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/trends/#trends_1" title="Насмотренность" /></li>
                <li><AnchorLink to="/articles/trends/#trends_2" title="Уместность и сбалансированность" /></li>
                <li><AnchorLink to="/articles/trends/#trends_3" title="Вечные тренды" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Наверное, нет ни&nbsp;одного дизайнера интерьеров, которому не&nbsp;задавали вопросы в&nbsp;стиле &laquo;Какие тренды сейчас популярны?&raquo; или &laquo;Что из&nbsp;современных тенденций вы&nbsp;можете посоветовать?&raquo; При ответе надо быть очень аккуратным&nbsp;&mdash; на&nbsp;это есть ряд причин.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/d3/03_d3.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/d3/03_d3.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/dzerzhinskogo/01_dzerzhinskogo.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dzerzhinskogo/01_dzerzhinskogo.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Во-первых, тренд&nbsp;&mdash; понятие многогранное, и&nbsp;надо четко понимать, о&nbsp;чем вас спрашивают&nbsp;&mdash; о&nbsp;цветовых решениях, о&nbsp;материале изделий или, быть может, об&nbsp;организации пространства, где тоже есть свои тренды.</p>
                    <p class="content_p">Во-вторых, любой опытный архитектор или дизайнер интерьеров понимает, что работа над объектом обычно длится не&nbsp;меньше года, поэтому стоит отделять краткосрочные тренды, проживающие &laquo;жизнь мотылька&raquo; (в&nbsp;дизайне интерьеров это обычно два-три года), от&nbsp;среднесрочных (5-10&nbsp;лет) и&nbsp;долгосрочных (до&nbsp;15&nbsp;лет). Помните, что быстрее всего из&nbsp;моды выходит цвет, медленнее&nbsp;&mdash; стиль.</p>
                    <p class="content_p">В-третьих, надо держать в&nbsp;уме временные тренды, что в&nbsp;быстротечном современном мире достаточно актуально. Яркий пример&nbsp;&mdash; недавние карантинные ограничения, сделавшие мейнстримом дистанционную работу. В&nbsp;силу этого в&nbsp;дизайнерских запросах появился временный тренд на&nbsp;создание домашнего кабинета. И&nbsp;здесь надо договариваться с&nbsp;клиентом на&nbsp;берегу: иметь четкое понимание, хочет&nbsp;ли человек сделать удаленку образом жизни или мечтает поскорее вернуться в&nbsp;офис. В&nbsp;первой ситуации следует думать о&nbsp;каких-то стационарных решениях, во&nbsp;втором&nbsp;&mdash; о&nbsp;кратковременных, когда из&nbsp;&laquo;брюк&raquo; можно быстро сделать &laquo;шорты&raquo;, и&nbsp;наоборот.</p>
                    <p class="content_p">В&nbsp;любом случае дизайнеру интерьеров сложно избежать как вопросов о&nbsp;трендах, так и&nbsp;разной степени включения их&nbsp;в&nbsp;свою работу. Чтобы комфортно работать в&nbsp;таких условиях, необходимо владеть некоторыми навыками.</p>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="trends_1">Насмотренность</h2>
                    <p class="content_p">Это очень полезный и&nbsp;необходимый параметр не&nbsp;только для дизайнера, но&nbsp;и&nbsp;разработчика, маркетолога, да&nbsp;и&nbsp;в&nbsp;целом любого современного человека: визуальный опыт помогает понять, что есть хорошо, а&nbsp;что&nbsp;&mdash; плохо. Тренды обычно не&nbsp;возникают на&nbsp;ровном месте, и&nbsp;&laquo;насмотренный&raquo; дизайнер более чувствителен к&nbsp;их&nbsp;смене. Но&nbsp;этот скилл, как и&nbsp;все остальные, нужно постоянно прокачивать. Кстати, тренировать насмотренность можно не&nbsp;только профессионалам.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/dzerzhinskogo/03_dzerzhinskogo.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dzerzhinskogo/03_dzerzhinskogo.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/garmony_dom_interier/06_garmony_dom.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/garmony_dom_interier/06_garmony_dom.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Для этого нужно:</p>
                    <ul class="content_list">
                      <li>&mdash;&nbsp;быть в&nbsp;курсе событий (не&nbsp;пропускать специализированные выставки, посещать магазины, шоурумы, подписаться на&nbsp;соцсети популярных дизайнеров и&nbsp;студий);</li>
                      <li>&mdash;&nbsp;приходить в&nbsp;кафе и&nbsp;рестораны не&nbsp;только за&nbsp;приемом пищи (несмотря на&nbsp;то, что функциональность и&nbsp;многие другие характеристики дизайна интерьера для ресторанов заметно отличаются от&nbsp;частных объектов, в&nbsp;интерьерах модных общественных мест можно подсмотреть, какой стиль или материал сейчас популярны. Но&nbsp;это пища для размышлений, адаптировать &laquo;инстаграмную моду&raquo; к&nbsp;реальной жизни надо с&nbsp;головой);</li>
                      <li>&mdash;&nbsp;внимательно смотреть фильмы и&nbsp;сериалы (это в&nbsp;первую очередь касается ретро-кинолент, где режиссеры при помощи профессиональных консультантов воссоздают эпоху за&nbsp;счет популярных в&nbsp;то&nbsp;время трендов. Помните, что по&nbsp;спирали развивается не&nbsp;только история, в&nbsp;моде и&nbsp;дизайне некоторые приемы тоже могут быть актуальны через какое-то время);</li>
                      <li>&mdash;&nbsp;доверять собственной интуиции (это, правда, доступно профессионалам с&nbsp;большим стажем, которые могут во&nbsp;внутреннем запросе предугадать, что выстрелит, к&nbsp;примеру, через полгода).</li>
                    </ul>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_interior/31_protos_interior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_interior/31_protos_interior.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="trends_2">Уместность и&nbsp;сбалансированность</h2>
                    <p class="content_p">Если&nbsp;бы слово &laquo;тренд&raquo; было чем-то материальным и&nbsp;к&nbsp;нему можно было&nbsp;бы прикоснуться, в&nbsp;дизайне интерьеров это было&nbsp;бы что-то из&nbsp;разряда декоративных элементов. Тренд&nbsp;&mdash; это&nbsp;то, что может заставить обратить на&nbsp;себя внимание, но&nbsp;куда важнее уместность и&nbsp;понимание того, что ты&nbsp;делаешь, чем слепое копирование и&nbsp;подражание модным тенденциям.</p>
                    <p class="content_p">К&nbsp;тому&nbsp;же надо исходить из&nbsp;того, что у&nbsp;тебя есть: например, в&nbsp;доме &laquo;сталинской постройки&raquo; невозможно использовать ультрасовременный дизайн, не&nbsp;утратив при этом характер самого помещения. Поэтому желательно в&nbsp;первую очередь брать за&nbsp;основу универсальные приемы, обратить внимание на&nbsp;продуманную эргономику, а&nbsp;тренды лучше добавлять точечно. Это поможет избежать основную ошибку в&nbsp;работе с&nbsp;трендами при создании интерьера, когда дизайнерские решения подчиняются визуальному стилю, а&nbsp;не&nbsp;собственному удобству.</p>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="trends_3">Вечные тренды</h2>
                    <p class="content_p">Понятно, что вечные тренды&nbsp;&mdash; такая&nbsp;же иллюзия, как и&nbsp;вечный двигатель. Но&nbsp;у&nbsp;человека всегда были запросы на&nbsp;определенные вещи, а&nbsp;в&nbsp;эпоху прогресса таких запросов априори становится больше. Поэтому если на&nbsp;дизайн интерьеров посмотреть не&nbsp;как на&nbsp;эстетически приятное взаимодействие среды с&nbsp;людьми, а&nbsp;как, к&nbsp;примеру, на&nbsp;Пирамиду Маслоу&nbsp;&mdash; на&nbsp;модель, которая последовательно представляет человеческие потребности (от&nbsp;простых до&nbsp;возвышенных), можно усмотреть ряд почти вечных предпочтений.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/panfilova/03_panfilova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/panfilova/03_panfilova.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/panfilova/07_panfilova.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/panfilova/07_panfilova.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <ul class="content_list">
                      <li>&mdash;&nbsp;Тренд на&nbsp;безопасность. &laquo;Мой дом&nbsp;&mdash; моя крепость&raquo;&nbsp;&mdash; этот посыл во&nbsp;все времена будет актуальней, чем, скажем, выбор цвета обоев в&nbsp;спальной комнате или считываемая имитация в&nbsp;гостиной. Акцент на&nbsp;звукоизоляции дома, создание ощущения безопасности за&nbsp;счет материалов и&nbsp;цветов, обустройство мест отдыха&nbsp;&mdash; на&nbsp;это всегда будет запрос, и&nbsp;об&nbsp;этом стоит подумать в&nbsp;первую очередь.</li>
                      <li>&mdash;&nbsp;Тренд на&nbsp;функциональность. &laquo;Вкалывают роботы, а&nbsp;не&nbsp;человек&raquo;. Мечту из&nbsp;детской песни в&nbsp;реальность воплотила система &laquo;Умный дом&raquo;: датчики, выключатели с&nbsp;дистанционным управлением, голосовые ассистенты, таймеры&nbsp;&mdash; каждый хозяин квартиры или частного дома мечтает пользоваться такими устройствами. Тренд на&nbsp;функциональность прослеживается не&nbsp;только в&nbsp;любви к&nbsp;современным гаджетам, но&nbsp;и&nbsp;на&nbsp;уровне архитектуры и&nbsp;планировки. Даже в&nbsp;&laquo;малогабаритках&raquo; люди пытаются выделить место на&nbsp;технические зоны&nbsp;&mdash; кладовые, постирочные, гардеробные. Упрощение быта и&nbsp;логистике в&nbsp;квартире&nbsp;&mdash; на&nbsp;это запрос будет куда чаще, чем на&nbsp;&laquo;золотые люстры&raquo; или другие предметы роскоши.</li>
                      <li>&mdash;&nbsp;Тренд на&nbsp;экологичность. Экологичный дизайн&nbsp;&mdash; казалось&nbsp;бы это современная эстетика жилого пространства, модный тренд XXI&nbsp;века. На&nbsp;самом деле это жизненная философия, забота о&nbsp;здоровье. К&nbsp;тому&nbsp;же использование подлежащих переработке и&nbsp;вторичному применению экоматериалов поможет сохранить не&nbsp;только здоровье, но&nbsp;и, как&nbsp;бы это пафосно ни&nbsp;звучало, планету.</li>
                    </ul>
                  </div>
                  <div class="content_text">
                    <p class="content_p">А&nbsp;вообще знайте, что лучший тренд во&nbsp;все времена&nbsp;&mdash; тренд на&nbsp;индивидуальность. Делайте так, как считаете нужным (естественно, руководствуясь здравым смыслом), и, возможно именно вы&nbsp;станете зачинателем нового тренда.</p>
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
            <Link to="/articles/clients" className="articles_page_item articles_page_item14">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Как понять, что клиент и&nbsp;дизайнер интерьера подходят друг другу?</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/clients'}/> </p>
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

export default trends
const breakpointColumnsObj = {
  default: 4,
  768: 1
};
