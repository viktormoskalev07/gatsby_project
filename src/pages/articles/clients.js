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

const clients = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Как понять, что клиент и дизайнер интерьера подходят друг другу? | I-PROJECT"} description={"Рассказываем о том, как найти общий язык клиенту и дизайнеру, и совместно создать дизайн интерьера, который подойдет клиенту."}
            location={"https://i-project.by/articles/trends"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-14.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg14">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Как понять, что клиент и&nbsp;дизайнер интерьера подходят друг другу?</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/clients/#clients_1" title="Локаторы на индивидуальность" /></li>
                <li><AnchorLink to="/articles/clients/#clients_2" title="Знайте, что покупаете" /></li>
                <li><AnchorLink to="/articles/clients/#clients_3" title="Взаимное уважение" /></li>
                <li><AnchorLink to="/articles/clients/#clients_4" title="«Контрольный выстрел»" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Выбрать своего дизайнера интерьера труднее, чем найти хорошего врача.</p>
                    <p class="content_p">Надо понимать, что, во-первых, вы&nbsp;будете общаться с&nbsp;дизайнером длительное время, соответственно, вам нужен не&nbsp;только профессионал, но&nbsp;и&nbsp;специалист, с&nbsp;которым вы&nbsp;будете понимать друг друга, а&nbsp;не&nbsp;искать компромиссы от&nbsp;безысходности. Во-вторых, вы&nbsp;должны помнить, что результат совместного труда останется с&nbsp;вами на&nbsp;долгое время. Ну, конечно, если только полностью менять обстановку в&nbsp;квартире или доме раз в&nbsp;несколько лет не&nbsp;является вашим хобби.</p>
                    <p class="content_p">&laquo;Совместный труд&raquo;&nbsp;&mdash; это словосочетание должно стать главным не&nbsp;только для предыдущего абзаца, но&nbsp;и&nbsp;лейтмотивом всей работы над проектом. Клиенту и&nbsp;дизайнеру не&nbsp;нужно доказывать что-то друг другу, важно одинаково видеть итоговый вариант, при этом понимая, что у&nbsp;каждого своя задача. Как показывает практика, делегирование функций профессионалам для решения важных вопросов&nbsp;&mdash; наиболее успешный вариант сотрудничества. Но&nbsp;это не&nbsp;означает, что у&nbsp;заказчика не&nbsp;должно быть своего мнения. Напротив, его видение очень ценно и&nbsp;зачастую ложится в&nbsp;основание будущего проекта, но&nbsp;важно с&nbsp;первой встречи настроиться на&nbsp;общую волну. Расскажем, как это сделать.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/dom_na_holme/08_dom_na_holme.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dom_na_holme/08_dom_na_holme.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="clients_1">Локаторы на&nbsp;индивидуальность</h2>
                    <p class="content_p">Если вы&nbsp;рассматриваете портфолио дизайнера, и, допустим, не&nbsp;понимаете, почему он&nbsp;в&nbsp;этом пространстве организовал именно такое решение, а&nbsp;не&nbsp;иное, выбрал яркий цвет вместо нейтрального, как это нравится вам, это еще не&nbsp;означает, что этот специалист вам не&nbsp;подойдет, поскольку этот интерьер создавался не&nbsp;для вас, а&nbsp;для другого человека.</p>
                    <p class="content_p">Одна из&nbsp;важных задач дизайнера&nbsp;&mdash; быть настроенным на&nbsp;индивидуальность клиента. Конечно, портфолио очень важный момент как для репутации дизайнера, так и&nbsp;для понимания со&nbsp;стороны потенциального клиента, с&nbsp;кем предстоит работать. Но&nbsp;основным показателем должно стать не&nbsp;то, что человек сделал для кого-то, а&nbsp;то, каким он&nbsp;видит ваш проект, как отвечает на&nbsp;ваши вопросы и&nbsp;что может предложить в&nbsp;том или ином случае.</p>
                    <p class="content_p">Поэтому на&nbsp;встрече с&nbsp;дизайнером задавайте как можно больше вопросов, касающихся не&nbsp;его рабочих подходов, а&nbsp;непосредственно вашего интерьера. Помните, что от&nbsp;дизайнера вам нужен опыт и&nbsp;профессионализм, а&nbsp;не&nbsp;&laquo;советы бывалого&raquo;.</p>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="clients_2">Знайте, что покупаете</h2>
                    <p class="content_p">До&nbsp;момента заключения договора очень важно проговорить финансовый вопрос. Речь идет не&nbsp;столько о&nbsp;стоимости дизайн проекта: здесь каждый вправе устанавливать цену на&nbsp;услуги, согласно своему опыту, репутации на&nbsp;рынке. Старайтесь узнать общую стоимость услуг дизайнера, и&nbsp;из&nbsp;чего она состоит. Это, кстати, тоже проверка возможного исполнителя на&nbsp;профпригодность. Если он&nbsp;не&nbsp;может четко расписать ценообразование, значит он&nbsp;либо не&nbsp;опытен в&nbsp;этом вопросе, либо хочет ввести в&nbsp;заблуждение.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/01_korolya.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Обычно сам проект, за&nbsp;который вы&nbsp;платите дизайнеру интерьера, включает в&nbsp;себя рабочие чертежи (строительную документацию) и&nbsp;3D-визуализацию, отдельно оплачиваются услуги авторского сопровождения и&nbsp;комплектации с&nbsp;подбором материалов и&nbsp;предметов мебели, сантехники, оборудования. Обязательно уточните следующие моменты:</p>
                    <ul class="content_list">
                      <li>&mdash;&nbsp;что входит в&nbsp;каждый из&nbsp;этапов работы;</li>
                      <li>&mdash;&nbsp;сколько вариантов планировок будет предоставлено;</li>
                      <li>&mdash;&nbsp;какое количество бесплатных правок можно внести;</li>
                      <li>&mdash;&nbsp;способен&nbsp;ли дизайнер организовать все процессы, позволяющие воплотить в&nbsp;жизнь проект &laquo;как на&nbsp;картинках&raquo;.</li>
                    </ul>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/dzerzhinskogo/05_dzerzhinskogo.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dzerzhinskogo/05_dzerzhinskogo.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/dzerzhinskogo/07_dzerzhinskogo.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/dzerzhinskogo/07_dzerzhinskogo.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="clients_3">Взаимное уважение</h2>
                    <p class="content_p">Не&nbsp;забывайте о&nbsp;том, что если речь идет о&nbsp;совместной работе, то&nbsp;не&nbsp;только вы&nbsp;выбираете дизайнера, но&nbsp;и&nbsp;дизайнер выбирает вас. И&nbsp;если он&nbsp;вдруг вам откажет, возможно, дело не&nbsp;в&nbsp;его невежестве. Например, если вы&nbsp;обратились к&nbsp;успешному и&nbsp;востребованному дизайнеру, который предпочитает самостоятельно вести объект, а&nbsp;не&nbsp;делегировать его людям с&nbsp;заведомо меньшими компетенциями, то&nbsp;наверняка количество проектов, которыми он&nbsp;может заниматься параллельно, будет ограничено.</p>
                    <p class="content_p">И&nbsp;выбор всегда будет сделан в&nbsp;пользу более перспективного объекта и/или в&nbsp;пользу более легкого и&nbsp;приятного в&nbsp;общении клиента. Творческому человеку жизненно необходимо получать от&nbsp;работы удовольствие. Время дизайнера&nbsp;&mdash; это самый ценный ресурс, который он&nbsp;хочет потратить на&nbsp;решение интересной, объемной и&nbsp;рентабельной задачи.</p>
                    <p class="content_p">Не&nbsp;спешите осуждать. Поставьте себя на&nbsp;его место: многим клиентам это сделать будет несложно, потому что большинство из&nbsp;них успешные люди, которые ценят свое время и&nbsp;труд.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_right_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/garmony_dom_interier/24_garmony_dom.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/garmony_dom_interier/24_garmony_dom.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/garmony_dom_interier/25_garmony_dom.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/garmony_dom_interier/25_garmony_dom.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <h2 class="content_h2" id="clients_4">&laquo;Контрольный выстрел&raquo;</h2>
                    <p class="content_p">Когда вы&nbsp;поговорили с&nbsp;рядом кандидатов, можете составить шорт-лист номинантов. Ничего удивительного, если вы&nbsp;в&nbsp;итоге будете выбирать из&nbsp;двух противоположных по&nbsp;подходу к&nbsp;работе претендентов. Например, один&nbsp;&mdash; молодой, амбициозный, с&nbsp;дерзким проектом, второй&nbsp;&mdash; спокойный, рассудительный, но&nbsp;тоже с&nbsp;очень интересным предложением.</p>
                    <p class="content_p">Наш совет&nbsp;&mdash; на&nbsp;время отключите эмоции, сделайте ряд рациональных действий:</p>
                    <ul class="content_list">
                      <li>1. Если проект дерзок&nbsp;и, как утверждает автор, соответствует его манере, ОБЯЗАТЕЛЬНО попросите фото уже реализованных проектов в&nbsp;похожем стиле. Если у&nbsp;специалиста нет опыта реального строительства, а&nbsp;только задумки, зачем проектировать&nbsp;то, что не&nbsp;можешь выполнить в&nbsp;действительности? Ваш объект&nbsp;&mdash; не&nbsp;полигон для испытаний.</li>
                      <li>2. Попросите показать состояние проекта на&nbsp;разных стадиях, вплоть до&nbsp;заселения. Опытный специалист может &laquo;заглянуть в&nbsp;будущее&raquo;, то&nbsp;есть предоставить своему заказчику существенно больше, чем набор чертежей и&nbsp;визуализаций.</li>
                      <li>3. Уточните у&nbsp;дизайнера о&nbsp;его связях с&nbsp;исполнителями работ и&nbsp;поставщиками в&nbsp;рамках выбора отделочных материалов, мебели и&nbsp;оборудования для вашего проекта. Если проектом, например, предусмотрены такие предметы интерьера, которые невозможно завезти из-за санкций или после растаможки они будут стоить, как крыло самолета, то&nbsp;стоит задуматься о&nbsp;целесообразности такого решения. Дизайнер обязан знать надежных исполнителей и&nbsp;поставщиков для воплощения всех своих проектных решений.</li>
                    </ul>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/16_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/16_korolya.jpg" alt="" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/korolya/11_korolya.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/korolya/11_korolya.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">А&nbsp;теперь давайте подытожим. Чтобы понять, подходят&nbsp;ли клиент и&nbsp;дизайнер друг другу, должно быть:</p>
                    <ul class="content_list">
                      <li>&mdash;&nbsp;не&nbsp;одинаковые вкусы, но&nbsp;похожие взгляды и&nbsp;подходы;</li>
                      <li>&mdash;&nbsp;необходимый и&nbsp;достаточный профессиональный опыт;</li>
                      <li>&mdash;&nbsp;наличие реализованных объектов в&nbsp;портфолио;</li>
                      <li>&mdash;&nbsp;понимание того, как и&nbsp;в&nbsp;какой последовательности будет проектироваться/строиться/финансироваться объект;</li>
                      <li>&mdash;&nbsp;взаимное доверие;</li>
                      <li>&mdash;&nbsp;комфортные коммуникации и&nbsp;общение;</li>
                      <li>&mdash;&nbsp;взаимное уважение.</li>
                    </ul>
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
            <Link to="/articles/trends" className="articles_page_item articles_page_item13">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">В&nbsp;погоне за&nbsp;трендом: как следовать за&nbsp;модой и&nbsp;при этом не&nbsp;навредить себе</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_hwhite"> <GetPageView slug={'/articles/trends'}/> </p>
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

export default clients
const breakpointColumnsObj = {
  default: 4,
  768: 1
};
