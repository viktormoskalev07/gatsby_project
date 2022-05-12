import React from 'react'
import Layout from "../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BreadcrumbsArticles from "../../components/breadcrumbs-articles.js";
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const reconstruction = () => {
  return (
    <Layout>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg9">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Современная реконструкция зданий. Основные моменты</h1>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/reconstruction/#reconstruction_1" title="Определение реконструкции" /></li>
                <li><AnchorLink to="/articles/reconstruction/#reconstruction_2" title="Этап первый. Техобследование" /></li>
                <li><AnchorLink to="/articles/reconstruction/#reconstruction_3" title="Этап второй. Выбор вариантов реконструкции" /></li>
                <li><AnchorLink to="/articles/reconstruction/#reconstruction_4" title="Какие материалы применяются для обновления фасадов" /></li>
                <li><AnchorLink to="/articles/reconstruction/#reconstruction_5" title="Перепланировка при реконструкции" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Сносить или делать реконструкцию? Этим вопросом задаются владельцы многих сооружений, построенных более 20&nbsp;лет назад.</p>
                    <p class="content_p">В&nbsp;отличие от&nbsp;Европы, где многие жилые здания имеют архитектурную и&nbsp;историческую ценность, которую необходимо сохранить, в&nbsp;нашей стране практически полностью отсутствуют подобные строения. Дело в&nbsp;том, что в&nbsp;90-ые годы при возведении зачастую использовалась слабые строительные технологии, некачественные материалы с&nbsp;низкой энергоэффективностью и&nbsp;износостойкостью.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <StaticImage src="../../images//portfolio/baltic_house/exterior/before/1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="content_text" id="reconstruction_1">
                    <p class="content_p"><b>Реконструкция</b> дома — это полное изменение параметров и технических характеристик, включая надстройку этажей, возведение пристроек, обустройство цокольного этажа и строительство новых инженерных систем.</p>
                    <p class="content_p">Именно поэтому нынешние собственники вынуждены взвешивать, как поступить в&nbsp;каждом конкретном случае. Чтобы принять решение, необходимо четко представлять все этапы реконструкции и&nbsp;понимать, что это затратный процесс. Зачастую по&nbsp;цене он&nbsp;может сравниться со&nbsp;строительством нового дома. Только профессиональные специалисты могут снизить его стоимость.</p>
                  </div>
                  <div class="before_after">
                    <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                      <figure slot="first" width="100%" class="before">
                        <StaticImage src="../../images/portfolio/protos_reconstraction/11_1_protos_reconstraction.jpg" alt="" />
                        <figcaption>Стало</figcaption>
                      </figure>
                      <figure slot="second" width="100%" class="after">
                        <StaticImage src="../../images/portfolio/protos_reconstraction/before/01_protos_before.jpg" alt="" />
                        <figcaption>Было</figcaption>
                      </figure>
                    </ImgComparisonSlider>
                  </div>
                  <h2 class="content_h2" id="reconstruction_2">Этап первый. Техобследование</h2>
                  <div class="content_text">
                    <p class="content_p">Техническое обследование здания позволяет оценить его состояние, выявить имеющиеся дефекты и&nbsp;на&nbsp;основе заключения составить план и&nbsp;смету реконструкции. Детальную проверку проходят все части строения&nbsp;&mdash; пол, крыша, стены, фундамент, канализация, отопление, вентиляция. Также специалисты оценивают теплопотери.</p>
                    <p class="content_p">В&nbsp;некоторых случаях дополнительных мероприятий по&nbsp;укреплению требуют только стены или фундамент, бывает, что структурные части сооружения находятся в&nbsp;отличном состоянии и&nbsp;их&nbsp;можно не&nbsp;трогать. Обязательной замене в&nbsp;процессе реконструкции, как правило, подлежат инженерные коммуникации.</p>
                  </div>
                  <h2 class="content_h2" id="reconstruction_3">Этап второй. Выбор вариантов реконструкции</h2>
                  <ul class="content_list">
                    <div class="content_text">
                      <p class="content_p">Выделяют несколько вариантов реконструкции здания в&nbsp;зависимости от&nbsp;того, какие изменения оно претерпевает:</p>
                    </div>
                    <li>1. Обновление фасадов и&nbsp;перепланировка без изменения площади</li>
                    <div class="content_text">
                      <p class="content_p">Самый простой вариант реконструкции, в&nbsp;процессе которого можно улучшить внешний вид дома и&nbsp;его эксплуатационные характеристики. Укрепление стен и&nbsp;фундамента, замена окон и&nbsp;дверей, обновление потолка. Также осуществляется перепланировка, о&nbsp;которой подробнее расскажем дальше.</p>
                    </div>
                    <li>2. Обновление фасада с&nbsp;надстройкой второго или цокольного этажа</li>
                    <div class="content_text">
                      <p class="content_p">Чтобы сэкономить полезную площадь небольшого по&nbsp;размеру участка и&nbsp;увеличить площадь жилья, в&nbsp;процессе реконструкции над одноэтажным домом можно построить цокольный или второй этаж. Надстройка, в&nbsp;первую очередь, зависит от&nbsp;состояния фундамента и&nbsp;стен, материала из&nbsp;которого они выполнены. Может понадобится частичное или полное усиление несущих конструкций.</p>
                      <p class="content_p">Надстроить второй этаж можно с&nbsp;помощью каменной кладки, конструкций из&nbsp;железобетонных элементов, деревянных бревен или бруса, с&nbsp;помощью каркасной технологии, а&nbsp;также комбинируя перечисленные выше варианты.</p>
                    </div>
                    <div class="content_images">
                      <div class="content_images_two">
                        <a
                          href="https://www.i-project.by/portfolio_newsite/baltic_house/exterior/01_baltic_home_exterior.webp"
                          data-fancybox="gallery"
                        >
                          <StaticImage src="../../images/portfolio/baltic_house/exterior/01_baltic_home_exterior.jpg" alt="" />
                        </a>
                        <StaticImage src="../../images//portfolio/baltic_house/exterior/before/1.jpg" alt="" />
                      </div>
                    </div>
                    <li>3. Обновление фасада с&nbsp;добавлением пристройки</li>
                    <div class="content_text">
                      <p class="content_p">Если размер участка позволяет, создать дополнительные площади можно за&nbsp;счет пристройки. Перед ее&nbsp;возведением необходимо дополнительно провести геодезические и&nbsp;геологические исследования участка.</p>
                      <p class="content_p">Помимо функциональной задачи пристройка может решать архитектурную, в&nbsp;том числе, исправлять геометрию здания. Старый дом с&nbsp;новой современной пристройкой, например, верандой из&nbsp;стекла, может выглядеть очень необычно и&nbsp;стильно.</p>
                    </div>
                    <div class="content_images">
                      <div class="content_images_three">
                        <StaticImage src="../../images/portfolio/protos_reconstraction/before/03_protos_before.jpg" alt="" />
                        <StaticImage src="../../images/portfolio/protos_reconstraction/before/04_protos_before.jpg" alt="" />
                        <StaticImage src="../../images/portfolio/protos_reconstraction/before/06_protos_before.jpg" alt="" />
                      </div>
                      <div class="before_after">
                        <ImgComparisonSlider class="slider-opacity-and-size" value="50">
                          <figure slot="first" width="100%" class="before">
                            <StaticImage src="../../images/portfolio/protos_reconstraction/11_1_protos_reconstraction.jpg" alt="" />
                            <figcaption>Стало</figcaption>
                          </figure>
                          <figure slot="second" width="100%" class="after">
                            <StaticImage src="../../images/portfolio/protos_reconstraction/before/01_protos_before.jpg" alt="" />
                            <figcaption>Было</figcaption>
                          </figure>
                        </ImgComparisonSlider>
                      </div>
                    </div>
                    
                  </ul>
                  <h2 class="content_h2" id="reconstruction_4">Какие материалы применяются для обновления фасадов</h2>
                  <div class="content_text">
                    <p class="content_p">Неотъемлемой частью процесса реконструкции здания является утепление стен качественными материалами. Это позволит повысить класс энергоэффективности здания и&nbsp;снизить энергозатраты.</p>
                    <p class="content_p">Большую популярность благодаря своим отличным визуальным и&nbsp;эксплуатационным характеристикам приобрел керамогранит. Он&nbsp;характеризуется прочностью, экологичностью, не&nbsp;горючестью и&nbsp;стойкостью к&nbsp;агрессивной среде. Сегодня керамогранит применяют для создания вентилируемых фасадов при внешней облицовке зданий. Помимо отделочной функции такой фасад способствует эффективному утеплению внешней части здания.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/protos_reconstraction/13_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/13_protos_reconstraction.jpg" alt="" />
                      </a>
                    </div>
                    <div class="pattern">
                      <StaticImage src="../../images/portfolio/protos_reconstraction/pattern.jpg" alt="" />
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Еще один вариант эффектного и&nbsp;надежного материала для отделки фасада в&nbsp;процессе реконструкции&nbsp;&mdash; клинкерный кирпич. Это материал, который прошел проверку временем. Производители клинкера предлагают огромное многообразие лицевого кирпича самых разных размеров, форм и&nbsp;текстур. Клинкерную плитку можно смело клеить как на&nbsp;аквапанели, так и&nbsp;непосредственно на&nbsp;фасад, не&nbsp;боясь, что она отскочит.
                    </p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://www.i-project.by/portfolio_newsite/luban/03_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/03_luban.jpg" alt="" />
                      </a>
                      <a
                        href="https://www.i-project.by/portfolio_newsite/luban/05_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/05_luban.jpg" alt="" />
                      </a>
                    </div>
                    <div class="pattern">
                      <StaticImage src="../../images/portfolio/luban/pattern.jpg" alt="" />
                    </div>
                  </div>
                  <h2 class="content_h2" id="reconstruction_5">Перепланировка при реконструкции</h2>
                  <div class="content_text">
                    <p class="content_p">Существует множество вариантов перепланировки здания в&nbsp;процессе реконструкции, особенно если речь идет про одноэтажное здание. Стены и&nbsp;перегородки можно полностью или частично демонтировать, а&nbsp;также возвести новые, добавить или ликвидировать оконные и&nbsp;дверные проемы, изменить их&nbsp;размеры. При необходимости, можно корректировать и&nbsp;несущие конструкции или делать в&nbsp;них необходимые проемы, не&nbsp;забывая разработать проект усиления. Просчитывать и&nbsp;проводить эти манипуляции должны исключительно специалисты-конструкторы.</p>
                    <p class="content_p">Стоит отметить, что кроме создания новой планировки в&nbsp;процессе реконструкции создается и&nbsp;новый интерьер в&nbsp;соответствии с&nbsp;предпочтениями хозяев и&nbsp;функциональным назначением каждого помещения.</p>
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

export default reconstruction
const breakpointColumnsObj = {
  default: 4,
  768: 1
};