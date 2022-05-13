import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Masonry from 'react-masonry-css'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import IndexVideo from "../video/index.mp4"
import IndexVideoMobile from "../video/index_mob.mp4"
import advantage_1 from "../images/icons/advantage_1.svg"
import advantage_1_mob from "../images/icons/advantage_1_mob.svg"
import advantage_2 from "../images/icons/advantage_2.svg"
import advantage_2_mob from "../images/icons/advantage_2_mob.svg"
import advantage_3 from "../images/icons/advantage_3.svg"
import advantage_3_mob from "../images/icons/advantage_3_mob.svg"
import advantage_4 from "../images/icons/advantage_4.svg"
import advantage_4_mob from "../images/icons/advantage_4_mob.svg"
import advantage_5 from "../images/icons/advantage_5.svg"
import advantage_5_mob from "../images/icons/advantage_5_mob.svg"
import advantage_6 from "../images/icons/advantage_6.svg"
import advantage_6_mob from "../images/icons/advantage_6_mob.svg"
import { HeroSlider } from "../subitems/heroSlider"

export default function Home() {
  return (
    <Layout>
      <div class="main_video">
        <video autoPlay={true} muted={true} loop={true} type="video/mp4" width="100%" height="100%" className="main_video_desktop">
          <source src={IndexVideo} type="video/mp4" />
        </video>
        <video src={IndexVideoMobile} autoPlay={true} muted={true} loop={true} playsinline={true} type="video/mp4" className="main_video_mobile" width="100%" height="100%"></video>
        <div class="wrapper">
          <div class="services_video_text">
            <HeroSlider/>

          </div>
        </div>
      </div>
      <div class="wrapper">
        <h1 class="main_title_h2">Студия дизайна интерьера и&nbsp;архитектуры I-PROJECT</h1>
        <div class="services_block">
          <div class="services_block_grid">
            <Link to="/portfolio" className="services_block_int_mob">
              <p class="services_block_int_mob_title">Дизайн интерьера</p>
            </Link>
            <div class="services_block_item services_block_int">
              <div class="services_block_int_content">
                <div>
                  <h2 class="services_block_int_title">Дизайн интерьера</h2>
                  <p class="services_block_int_text">Придумываем, разрабатываем и&nbsp;воплощаем в&nbsp;жизнь интерьеры любой сложности для всех типов жилых и&nbsp;общественных помещений. Большое портфолио реализованных проектов.</p>
                </div>
                <div class="services_block_int_links">
                  <Link to="/uslugi/dizajn-interera" className="services_block_int_link">Квартиры</Link>
                  <Link to="/uslugi/dizajn-interera-domov" className="services_block_int_link">Дома</Link>
                  <Link to="/uslugi/dizajn-interera-ofisov" className="services_block_int_link">Офисы</Link>
                </div>
              </div>
              <StaticImage src="../images/services_interior.png" alt="" className="services_block_int_img" />
            </div>
            <Link to="/uslugi/arxitekturnoe-proektirovanie" className="services_block_item services_block_arc">
              <h2 class="services_block_arc_title">Архитектурное проектирование</h2>
            </Link>
            <Link to="/uslugi/stroitelstvo-i-rekonstrukciya" className="services_block_item services_block_rep">
              <h2 class="services_block_rep_title">Строительство и&nbsp;реконструкция</h2>
            </Link>
          </div>
          <div class="services_block_flex">
            <Link to="/uslugi/avtorskoe-soprovozhdenie" className="services_block_item services_block_sup">
              <h2 class="services_block_sup_title">Авторское сопровождение</h2>
              <p class="services_block_sup_text">Осуществляем контроль за&nbsp;строительством, соблюдением сроков и&nbsp;полному соответствию дизайн проекту.</p>
            </Link>
            <Link to="/uslugi/komplektaciya-obekta" className="services_block_item services_block_com">
              <h2 class="services_block_com_title">Комплектация объектов</h2>
              <p class="services_block_com_text">Комплектуем объект, формируемый в&nbsp;результате реализации дизайн проекта или архитектурного проекта, всеми необходимыми материалами.</p>
            </Link>
            <Link to="#" className="services_block_item services_block_agr">
              <h2 class="services_block_agr_title">Согласование проекта</h2>
              <p class="services_block_agr_text">Мы&nbsp;разрабатываем свои проекты в&nbsp;соответствии со&nbsp;строительными нормами и&nbsp;правилами Республики Беларусь.</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_body_absolute">
          <div class="left_sidebar">
            <ul>
              <li><AnchorLink to="/#advantage_title" title="Наши преимущества" /></li>
              <li><AnchorLink to="/#portfolio_title" title="Новые работы" /></li>
              <li><AnchorLink to="/#process_title" title="Как мы&nbsp;работаем" /></li>
              {/* <li>Рассчитать стоимость</li> */}
              <li><AnchorLink to="/#articles_title" title="Последние статьи" /></li>
              <li><AnchorLink to="/#principle_title" title="Наши принципы" /></li>
              <li><AnchorLink to="/#faq_title" title="Вопрос / ответ" /></li>
            </ul>
          </div>
        </div> 
        <div class="wrapper">
          <div class="right_content">
            <section class="advantage">
              <h2 class="advantage_title" id="advantage_title">Наши преимущества</h2>
              <div class="advantage_items">
                <div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_1} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_1_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">Индивидуальный подход</h3>
                    <p class="advantage_item_p">Всегда находим компромисс между вашими потребностями и&nbsp;нашими творческими амбициями. Умеем слушать, говорить и&nbsp;делать.</p>
                  </div>
                </div>
                <div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_2} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_2_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">Реализованные проекты</h3>
                    <p class="advantage_item_p">В&nbsp;нашем портфолио более 100 реализованных проектов, от&nbsp;интерьеров квартир и&nbsp;домов до&nbsp;архитектуры зданий и&nbsp;объектов реконструкции.</p>
                  </div>
                </div>
              </div>
              <button class="advantage_button">Показать все</button>
              <div class="advantage_items advantage_items_mob">
                <div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_3} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_3_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">15&nbsp;лет практики и&nbsp;опыта</h3>
                    <p class="advantage_item_p">Мы&nbsp;не&nbsp;будем ставить эксперименты на&nbsp;ваших объектах и&nbsp;проверять как работает&nbsp;то, что в&nbsp;теории должно работать. Предложим вам такие решения, за&nbsp;которые не&nbsp;придется краснеть.</p>
                  </div>
                </div><div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_4} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_4_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">Удобная документация</h3>
                    <p class="advantage_item_p">Наши чертежи&nbsp;— подробные и&nbsp;понятные. На&nbsp;них отображена вся информация, необходимая для строительства, эстетично и&nbsp;доходчиво.</p>
                  </div>
                </div><div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_5} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_5_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">Авторский надзор</h3>
                    <p class="advantage_item_p">Позволяет реализовать все задуманное под нашим контролем качественно и&nbsp;в&nbsp;срок. Мы&nbsp;привыкли доводить свои проекты до&nbsp;конца.</p>
                  </div>
                </div><div class="advantage_item">
                  <div class="advantage_item_images">
                    <img src={advantage_6} alt="" class="advantage_item_images_desk" />
                    <img src={advantage_6_mob} alt="" class="advantage_item_images_mob" />
                  </div>
                  <div class="advantage_item_text">
                    <h3 class="advantage_item_title">Реалистичная визуализация</h3>
                    <p class="advantage_item_p">Делаем фото-реалистичную 3D-визуализацию для каждого проекта. Даем возможность детально рассмотреть свой будущий дом или квартиру прежде, чем приступим к&nbsp;реализации.</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 class="main_portfolio_title" id="portfolio_title">Новые работы</h2>
              <div class="content_text">
                <p class="content_p">Студия дизайна и&nbsp;архитектуры I-PROJECT оказывает полный цикл услуг по&nbsp;дизайну интерьера, архитектуре и&nbsp;строительству. Сопровождаем наших клиентов от&nbsp;проектирования интерьера до&nbsp;комплектации построенного объекта, представляя их&nbsp;интересы на&nbsp;каждом этапе.</p>
                <p class="content_p">В&nbsp;нашем <Link to="/portfolio/" className="link">портфолио</Link> большое количество реализованных объектов, которые получились именно благодаря комплексному подходу.</p>
              </div>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="portfolio_grid main_portfolio"
                columnClassName="my-masonry-grid_column">
                <Link to="/portfolio/architecture/luban/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/luban/00_luban.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дом для жизни. Архитектура, 400м<sup>2</sup></h3>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/baikonur/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/baikonur/00_baikonur.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн офисов в&nbsp;составе ЖК&nbsp;Байконур в&nbsp;г.Москва, 120м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/korolya/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/korolya/00_korolya.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h2 className="portfolio_grid_block_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145м<sup>2</sup></h2>
                    <p className="portfolio_grid_block_realize">Реализовано</p>
                  </div>
                </Link>
                <Link to="/portfolio/interier/simple-house/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/simple_house/00_simple_house.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">Дизайн интерьера обычного дома, 250м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/interier/zelenyi/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/zelenyi/00_zelenyi.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h3 className="portfolio_grid_block_title">50 оттенков зеленого. Интерьер дома, 250м<sup>2</sup></h3>
                  </div>
                </Link>
                <Link to="/portfolio/architecture/dom-na-holme/" className="portfolio_grid_link">
                  <StaticImage src="../images/portfolio/dom_na_holme/01_dom_na_holme.jpg" alt="" />
                  <div class="portfolio_grid_block">
                    <h2 className="portfolio_grid_block_title">Дом на&nbsp;холме, 450м<sup>2</sup></h2>
                  </div>
                </Link>
                <></>
                <Link to="/portfolio/" className="portfolio_grid_link_all">
                  <p className="portfolio_grid_link_all_p">Все проекты</p>
                </Link>
              </Masonry>
            </section>
          </div>
        </div>
        <div class="process_bcg">
          <div class="wrapper">
            <div class="right_content">
              <section>
                <h2 className="main_process_title" id="process_title">Как мы&nbsp;работаем</h2>
                <div class="title_line"></div>
                <div class="content_text_columns">
                  <div class="content_text_column_1">
                    <h3 className="main_process_stitle">Проектирование</h3>
                    <p class="content_p">Если вам подошли наши условия, подписываем договор и&nbsp;приступаем к&nbsp;работе. Выезжаем на&nbsp;замер вашего объекта или осмотр участка. Придумываем планировочную концепцию или делаем эскизный проект, которые лягут в&nbsp;основу удобного и&nbsp;красивого интерьера или архитектурного решения.</p>
                    <p class="content_p">Создаем образ будущего интерьера или архитектуры в&nbsp;виде фотореалистичной 3D-визуализации, затем разрабатываем подробную проектную документацию.</p>
                  </div>
                  <div class="content_text_column_2">
                    <h3 className="main_process_stitle">Реализация</h3>
                    <p class="content_p">Приступаем к&nbsp;строительству и&nbsp;комплектуем проект всеми необходимыми материалами и&nbsp;оборудованием.</p>
                    <p class="content_p">Для контроля качества работы подрядчиков мы&nbsp;оказываем услугу авторского сопровождения, которая позволяет гарантировать соответствие дизайн проекту. Мы&nbsp;согласовываем поставки материалов для строительных работ, что позволяет реализовывать проекты наших клиентов в&nbsp;указанные сроки.</p>
                  </div>
                </div>
                <div class="process_block">
                  <div class="process_block_text">
                    <p class="process_block_fp">7&nbsp;шагов от&nbsp;идеи до&nbsp;воплощения</p>
                    <p class="process_block_sp">Мы&nbsp;работаем полным циклом: от&nbsp;проектирования до&nbsp;реализации. Объем работ может варьироваться в&nbsp;зависимости от&nbsp;масштабов вашего проекта.</p>
                    <Link to="/process" class="process_block_link">Подробнее</Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="right_content">
            <section>
              <h2 className="main_articles_title" id="articles_title">Последние статьи</h2>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="articles_page"
                columnClassName="my-masonry-grid_column">
                <Link to="/articles/beliy-interier" className="articles_page_item articles_page_item7">
                  <h2 className="articles_page_item_title_medium articles_page_item_title_white">Белый цвет в&nbsp;интерьере</h2>
                </Link>
                <Link to="/articles/hranenie" className="articles_page_item articles_page_item6">
                  <h3 className="articles_page_item_title_medium articles_page_item_title_black">Как организовать хранение вещей в&nbsp;доме и&nbsp;квартире</h3>
                </Link>
                <Link to="/articles/spalnya" className="articles_page_item articles_page_item5">
                  <h3 className="articles_page_item_title_small articles_page_item_title_white">Спальня мечты: секреты идеального дизайна</h3>
                </Link>
                <Link to="/articles/dveri" className="articles_page_item articles_page_item3">
                  <h3 className="articles_page_item_title_small articles_page_item_title_white">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h3>
                </Link>
                <Link to="/articles/krovlya" className="articles_page_item articles_page_item2">
                  <h3 className="articles_page_item_title_medium articles_page_item_title_white">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h3>
                </Link>
                <Link to="/articles/architectura" className="articles_page_item articles_page_item4">
                  <h3 className="articles_page_item_title_small articles_page_item_title_white">Архитектура частного дома: на&nbsp;что важно обратить внимание</h3>
                </Link>
              </Masonry>
            </section>
            <section class="main_principle_scroll">
              <h2 class="main_principle_title" id="principle_title">Наши принципы</h2>
              <SimpleBar forceVisible="y" autoHide={false}>
                  <div class="main_principle">
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Прочность. Польза. Красота.</h3>
                      <p class="main_principle_item_text">На&nbsp;100% разделяем эту формулу знаменитой триады Витрувия. Некоторые понимают&nbsp;ее, как последовательность, считая, что самое важное&nbsp;&mdash; это прочность, на&nbsp;втором месте идет польза и&nbsp;на&nbsp;последнем&nbsp;&mdash; красота.</p>
                      <p class="main_principle_item_text">На&nbsp;самом деле, Витрувий вкладывал иной смысл в&nbsp;свою триаду&nbsp;&mdash; это абсолютное триединство: польза, прочность и&nbsp;красота&nbsp;&mdash; три равнозначных и&nbsp;необходимых элемента, без которых не&nbsp;может существовать архитектура и&nbsp;интерьер, который является ее&nbsp;неотъемлемой частью.</p>
                    </div>
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Сделать просто&nbsp;&mdash; не&nbsp;просто</h3>
                      <p class="main_principle_item_text">Просто&nbsp;&mdash; не&nbsp;равно примитивно. Задача архитектора, дизайнера&nbsp;&mdash; придумать такое решение, которое будет лаконичным, функциональным и&nbsp;красивым. Мы&nbsp;против бутафории и&nbsp;неестественных излишеств в&nbsp;архитектуре и&nbsp;интерьере.</p>
                      <p class="main_principle_item_text">Только благодаря органично и&nbsp;вдумчиво организованной геометрии пространства, оптимальному балансу света и&nbsp;цвета, использованию натуральных материалов и&nbsp;современных технологий можно получить &laquo;простые&raquo; решения, которые радуют глаз&nbsp;&mdash; эффектные и&nbsp;эффективные.</p>
                    </div>
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Главное&nbsp;&mdash; качество</h3>
                      <p class="main_principle_item_text">Мы&nbsp;не&nbsp;продаем архитектуру и&nbsp;дизайн на&nbsp;развес, большим тиражом. Не&nbsp;гонимся за&nbsp;количеством. Берем в&nbsp;работу столько объектов, сколько можем довести до&nbsp;конца. Каждый объект для нас уникален, и&nbsp;мы&nbsp;вкладываем в&nbsp;него частичку своей души.</p>
                      <p class="main_principle_item_text">Не&nbsp;всегда и&nbsp;не&nbsp;сразу клиент может увидеть разницу между хорошей и&nbsp;не&nbsp;очень хорошей работой. Для таких случаев у&nbsp;нас есть внутренний цензор&nbsp;&mdash; творческая совесть, которая не&nbsp;позволяет предлагать половинчатые или несостоятельные решения и&nbsp;больно кусается.</p>
                    </div>
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Интерьер&nbsp;&mdash; часть архитектуры</h3>
                      <p class="main_principle_item_text">Мы&nbsp;не&nbsp;рассматриваем интерьер в&nbsp;отрыве от&nbsp;архитектуры. Интерьер&nbsp;&mdash; это взаимосвязь между объемами, светом и&nbsp;цветом, сформированная по&nbsp;тем&nbsp;же законам и&nbsp;принципам, что и&nbsp;архитектура.</p>
                      <p class="main_principle_item_text">Безусловно, интерьер в&nbsp;большей степени подвержен веяниям моды, и&nbsp;его &laquo;начинка&raquo; чаще подвергается преобразованиям, но&nbsp;базовые установки хорошего интерьера и&nbsp;хорошей архитектуры идентичны: они должны быть удобными, надежными и&nbsp;визуально привлекательными (другими словами&nbsp;&mdash; прочными, полезными и&nbsp;красивыми).</p>
                    </div>
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Выбор&nbsp;&mdash; это важно</h3>
                      <p class="main_principle_item_text">Клиенты выбирают архитектора и&nbsp;дизайнера по&nbsp;целому ряду критериев, пытаясь найти своего&nbsp;&mdash; того самого, с&nbsp;которым они вместе придут к&nbsp;желаемому результату, с&nbsp;которым будет легко и&nbsp;комфортно. Это нормально.</p>
                      <p class="main_principle_item_text">Мы&nbsp;тоже оставляем за&nbsp;собой право на&nbsp;выбор. Бывает так, что работа нам не&nbsp;интересна или находится за&nbsp;пределами наших компетенций. А&nbsp;бывает и&nbsp;так, что степень загрузки не&nbsp;позволяет взяться за&nbsp;новый объект. Мы&nbsp;беремся за&nbsp;работу только в&nbsp;том случае, когда уверены на&nbsp;100%, что можем сделать ее&nbsp;качественно и&nbsp;в&nbsp;срок.</p>
                    </div>
                    <div class="main_principle_item">
                      <h3 class="main_principle_item_title">Клиент всегда прав</h3>
                      <p class="main_principle_item_text">Это не&nbsp;означает, что мы&nbsp;делаем только&nbsp;то, что говорит клиент. Напротив&nbsp;&mdash; мы&nbsp;постоянно предлагаем идеи, просвещаем и&nbsp;переубеждаем, порой горячо спорим&nbsp;&mdash; ведь не&nbsp;секрет, что в&nbsp;спорах рождается истина.</p>
                      <p class="main_principle_item_text">Мы&nbsp;с&nbsp;легкостью пойдем на&nbsp;уступки там, где это возможно. При этом, нам почти всегда удается убедить клиента разделить с&nbsp;нами общую точку зрения по&nbsp;вопросам, имеющим принципиальное значение. Так или иначе&nbsp;&mdash; последнее слово всегда остается за&nbsp;клиентом.</p>
                    </div>
                  </div>
              </SimpleBar>
            </section>
            <section>
              <div class="faq" id="faq_title">
                <h3 class="faq_title">Вопрос / ответ</h3>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>За&nbsp;что обычно вас ценят клиенты?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Нас ценят за&nbsp;комплексный подход. Мы&nbsp;коммуникабельны, умеем слушать и&nbsp;слышать клиента, при этом нам не&nbsp;надо объяснять что и&nbsp;как нужно делать&nbsp;&mdash; мы&nbsp;сами все расскажем и&nbsp;покажем. У&nbsp;нас никогда не&nbsp;бывает дефицита креативных идей для заказчика, и&nbsp;это будут такие идеи&nbsp;&mdash; которые мы&nbsp;точно сможем реализовать.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Сколько стоит сделать интерьер как на&nbsp;картинках?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Можно точно рассчитать стоимость проекта, строительных работ и&nbsp;черновых материалов. Дальше появляется вариативность, по&nbsp;аналогии с&nbsp;выбором авто: у&nbsp;всех автомобилей будет по&nbsp;одному двигателю и&nbsp;по&nbsp;четыре колеса, но&nbsp;ехать и&nbsp;выглядеть они будут по-разному. Так и&nbsp;с&nbsp;интерьерами. Скажем, плитка для отделки стен может стоить 15$ за&nbsp;м<sup>2</sup>, а&nbsp;может и&nbsp;150$, причем на&nbsp;картинках разница между ними не&nbsp;будет слишком разительной, но&nbsp;живьем&nbsp;&mdash; вы&nbsp;ее&nbsp;100% почувствуете. Подобная история будет повторяться по&nbsp;многим составным компонентам интерьера. Одни клиенты не&nbsp;готовы к&nbsp;компромиссам, и&nbsp;хотят получить лучший вариант из&nbsp;возможных, другие&nbsp;&mdash; придерживаются принципа разумной достаточности. Если правило &laquo;средней температуры по&nbsp;больнице&raquo; применить к&nbsp;интерьерам, то&nbsp;можно получить ориентировочную стоимость квадратного метра готового интерьера &laquo;как на&nbsp;картинках&raquo; в&nbsp;среднем: 1000$ за&nbsp;м<sup>2</sup>.</p>
                  </div>
                </div>
                <div class="faq_item">
                  <div class="faq_item_block">
                    <h4>Занимаетесь&nbsp;ли вы&nbsp;продажей готовых проектов?</h4>
                  </div>
                  <div class="faq_item_block_hidden">
                    <p>Нет. Мы&nbsp;занимаемся только индивидуальными проектами.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const breakpointColumnsObj = {
  default: 3,
  768: 1,
  
};