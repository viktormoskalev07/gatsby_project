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

const krovlya = ({location }) => {
  return (
    <Layout>
      <Seo  title={"Плоская и скатная кровля: за и против | I-PROJECT"} description={"Вместе с дизайнерами попробуем выяснить все плюсы и минусы скатной, плоской и эксплуатируемой кровли."}
            location={"https://i-project.by/articles/krovlya"}
            image={"https://i-project.by/portfolio_newsite/articles/article_1-2.jpg"}/>
      <section class="article">
        <BreadcrumbsArticles />
        <div class="article_bcg article_bcg2">
          <div class="wrapper">
            <div class="article_title">
              <h1 class="article_title_h1">Плоская и&nbsp;скатная кровля: за&nbsp;и&nbsp;против</h1>
              <p class="article_view_number article_view_number_hwhite"> <PageViewCounter  location={location}  /></p>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/articles/krovlya/#krovlya_1" title="Скатная крыша" /></li>
                <li><AnchorLink to="/articles/krovlya/#krovlya_2" title="Плоская крыша" /></li>
              </ul>
            </div>
          </div> 
          <div class="wrapper">
            <div class="right_content">
              <Fancybox>
                <div class="wrapper_article">
                  <div class="content_text">
                    <p class="content_p">Форма крыши и&nbsp;тип кровельного покрытия являются важным моментом в&nbsp;проектировании частного дома. От&nbsp;этого зависит не&nbsp;только внешний вид, но&nbsp;и&nbsp;долговечность, функциональность и&nbsp;безопасность всей постройки. Именно поэтому выбору типа кровли необходимо уделить особое внимание.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/luban/01_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/01_luban.jpg" alt="Пример скатной, фальцевой кровли" />
                      </a>
                    </div>
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_reconstraction/06_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/06_protos_reconstraction.jpg" alt="Пример плоской, фальцевой кровли" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/sosni/01_sosni.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sosni/01_sosni.jpg" alt="Пример плоской, эксплуатируемой кровли" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Универсального ответа на&nbsp;вопрос, какая кровля лучше&nbsp;&mdash; скатная или плоская&nbsp;&mdash; не&nbsp;существует, потому что решение зависит от&nbsp;конкретной ситуации. Попробуем разобраться в&nbsp;преимуществах каждого варианта.</p>
                  </div>
                  <h2 class="content_h2" id="krovlya_1">Скатная крыша</h2>
                  <div class="content_text">
                    <p class="content_p">Скатная крыша&nbsp;&mdash; классический и&nbsp;более бюджетный вариант, который пользовался популярностью, когда строительные технологии не&nbsp;позволяли воплощать в&nbsp;жизнь другие идеи.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/luban/12_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/12_luban.jpg" alt="Дом с вальмовой кровлей" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/shale/02_shale.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/shale/02_shale.jpg" alt="Дом с двускатной кровлей" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Осадки со&nbsp;скатной крыши удаляются благодаря её&nbsp;геометрии, что позволяет экономить на&nbsp;специальных материалах и&nbsp;дренажной системе. Такие кровли относятся к&nbsp;кровлям с&nbsp;низким уровнем эксплуатационных расходов и&nbsp;не&nbsp;требуют обслуживания.</p>
                    <p class="content_p">Выделяют несколько типов скатных кровель:</p>
                  </div>
                  <ul class="content_list">
                    <li>1. Односкатные (самый простой вариант, который можно использовать практически в&nbsp;любом помещении).</li>
                    <li>2. Двускатные (самый популярный вариант, который при правильном выборе материалов и&nbsp;стропил будет ещё и&nbsp;долговечным).</li>
                    <li>3. Вальмовые (состоят из&nbsp;четырех скатов: двух трапециевидной формы и&nbsp;двух в&nbsp;форме равнобедренных треугольников. Стропильная система включает как длинные, так и&nbsp;короткие ноги).</li>
                    <li>4. Полувальмовые (подвид вальмовой кровли, к&nbsp;которому добавляется фронтон, из-за чего требуется дополнительное усиление конструкции).</li>
                    <li>5. Шатровые (четырехскатные кровли, в&nbsp;которых коньковый прогон заменяется узлом. Такой вариант чаще используется в&nbsp;беседках и&nbsp;банях).</li>
                    <li>6. Мансардные (основная особенность таких кровель&nbsp;&mdash; угол наклона ската варьируется от&nbsp;30&nbsp;до&nbsp;60&nbsp;градусов, с&nbsp;чем связаны сложности в&nbsp;возведении).</li>
                    <li>7. Сводчатые (данный тип кровель редко используется в&nbsp;частном строительстве, так как при возведении применяются стропила скругленной формы).</li>
                    <li>8. Бубновые (тип кровель с&nbsp;особой стропильной системой, возведение которой без профессиональной подготовки практически невозможно).</li>
                    <li>9. Многощипцовые (разновидность двускатных крыш, в&nbsp;которых используется несколько фронтонов-шипцов. Самостоятельное возведение практически невозможно).</li>
                  </ul>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_reconstraction/01_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/01_protos_reconstraction.jpg" alt="Офис с плоской кровлей" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Тип определяется архитектурным решением. Наклон может варьироваться от&nbsp;5&nbsp;до&nbsp;90&nbsp;градусов. В&nbsp;современном строительстве существует большой ассортимент скатных кровель и&nbsp;кровельных материалов для них, благодаря чему можно реализовать интересные дизайнерские идеи.</p>
                    <p class="content_p">Современные производители предлагают широкий выбор кровельных материалов: рулонные кровельные материалы, еврошифер, битумная черепица, профнастил, металлочерепица, фальцевая кровля, композитная, керамическая и&nbsp;цементно-песчаная черепица, а&nbsp;также натуральный сланец.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_6grid">
                      <StaticImage src="../../images/articles/krovlya_1.jpg" alt="кровельный материал" />
                      <StaticImage src="../../images/articles/krovlya_2.jpg" alt="кровельный материал" />
                      <StaticImage src="../../images/articles/krovlya_3.jpg" alt="кровельный материал" />
                      <StaticImage src="../../images/articles/krovlya_4.jpg" alt="кровельный материал" />
                      <StaticImage src="../../images/articles/krovlya_5.jpg" alt="кровельный материал" />
                      <StaticImage src="../../images/articles/krovlya_6.jpg" alt="кровельный материал" />
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Они отличаются по&nbsp;цене, сложности монтажа и&nbsp;сроку эксплуатации. Кроме этих характеристик при выборе кровли стоит учитывать также особенности эксплуатации строения, форму крыши, особенности кровельной системы, монтажа, обслуживания и&nbsp;ремонта.</p>
                    <p class="content_p">Так, в&nbsp;числе самых долговечных материалов&nbsp;&mdash; фальцевая кровля, керамическая черепица и&nbsp;натуральный сланец, которые также характеризуются высокой сложностью монтажа, поэтому работу с&nbsp;ними стоит доверять профессионалам.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_one">
                      <a
                        href="https://i-project.by/portfolio_newsite/luban/3d/06_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/3d/06_luban.jpg" alt="Пример дома с фальцевой кровлей" />
                      </a>
                    </div>
                    <div class="content_images_two_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/luban/08_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/08_luban.jpg" alt="Пример дома с фальцевой кровлей" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_reconstraction/07_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/07_protos_reconstraction.jpg" alt="Пример офиса с фальцевой кровлей" />
                      </a>
                    </div>
                  </div>
                  <h2 class="content_h2" id="krovlya_2">Плоская крыша</h2>
                  <div class="content_text">
                    <p class="content_p">Плоская кровля&nbsp;&mdash; актуальный и&nbsp;более дорогостоящий вариант, который позволяет сделать дизайн оригинальным и&nbsp;эффективно использовать полезное пространство дома и&nbsp;участка. Существуют стереотипы о&nbsp;том, что плоские крыши ненадёжные и&nbsp;проблемные. Многие даже не&nbsp;догадываются, что если использовать грамотное проектное решение, правильные материалы и&nbsp;качественно выполнить работу, плоская кровля прослужит много десятилетий и&nbsp;не&nbsp;доставит вам хлопот.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_reconstraction/04_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/04_protos_reconstraction.jpg" alt="Пример плоской, неэксплуатируемой кровли" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/baltic_house/exterior/04_baltic_home_exterior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/exterior/04_baltic_home_exterior.jpg" alt="Пример плоской, эксплуатируемой кровли" />
                      </a>
                    </div>
                  </div>
                  
                  <div class="content_text">
                    <p class="content_p">Плоскую кровлю можно сделать эксплуатируемой и&nbsp;использовать приобретенное полезное пространство самыми разными способами: организовать lounge-зону, разбить газон с&nbsp;цветником, оборудовать теплицу или зимний сад, игровую и&nbsp;спортивную площадку или даже бассейн. Такое решение может быть практически безальтернативным в&nbsp;случае, если площадь вашего участка под застройку невелика, и&nbsp;вы&nbsp;планируете проводить значительную часть времени на&nbsp;свежем воздухе.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <a
                        href="https://i-project.by/portfolio_newsite/sosni/02_sosni.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/sosni/02_sosni.jpg" alt="Плоская крыша, эксплуатируемая кровля" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/baltic_house/exterior/01_baltic_home_exterior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/exterior/01_baltic_home_exterior.jpg" alt="Плоская, эксплуатируемая кровля" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Обслуживание плоской крыши&nbsp;&mdash; профилактические осмотры, очистка водостоков, работа с&nbsp;антеннами, дымоходами, вентиляционными каналами и&nbsp;самим настилом&nbsp;&mdash; гораздо проще. Кроме того, на&nbsp;кровле подобного формата удобнее монтировать различное оборудование, например, наружные блоки кондиционеров. В&nbsp;случае со&nbsp;скатной крышей их&nbsp;необходимо крепить на&nbsp;фасаде.</p>
                    <p class="content_p">При возведении дома с&nbsp;плоской кровлей, учитывать особенности этой конструкции нужно еще на&nbsp;этапе проектирования здания. Чаще всего используются железобетонные перекрытия, поэтому нужно выбирать такой материал стен, который выдерживает высокую нагрузку. Также нужно тщательно подходить к&nbsp;выбору гидроизоляционных материалов&nbsp;&mdash; рулонных, мембранных, мастичных. Стоит отметить, что гидроизоляция&nbsp;&mdash; это лишь один из&nbsp;множества слоев, формирующих плоский кровельный &laquo;пирог&raquo;.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two">
                      <StaticImage src="../../images/articles/krovlya_7.jpg" alt="Эксплуатируемая кровля" />
                      <StaticImage src="../../images/articles/krovlya_8.jpg" alt="Эксплуатируемая кровля" />
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">В&nbsp;качестве основания плоской кровли, как правило, используются железобетонные плиты, иногда профилированная сталь. Незначительный уклон&nbsp;&mdash; не&nbsp;более 3&nbsp;градусов&nbsp;&mdash; делают с&nbsp;помощью песчано-цементной или керамзито-цементной стяжки.</p>
                    <p class="content_p">Сколько слоев и&nbsp;из&nbsp;какого материала они выполнены, зависит от&nbsp;типа скатной кровли: эксплуатируемая или неэксплуатируемая.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_three_left_narrow">
                      <a
                        href="https://i-project.by/portfolio_newsite/luban/03_luban.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/luban/03_luban.jpg" alt="Дом с плоской и эксплуатируемой кровлей" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/baltic_house/exterior/12_baltic_home_exterior.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/baltic_house/exterior/12_baltic_home_exterior.jpg" alt="Дом с террасой, эксплуатируемая кровля" />
                      </a>
                      <a
                        href="https://i-project.by/portfolio_newsite/protos_reconstraction/15_protos_reconstraction.webp"
                        data-fancybox="gallery"
                      >
                        <StaticImage src="../../images/portfolio/protos_reconstraction/15_protos_reconstraction.jpg" alt="Плоская, неэксплуатируемая кровля" />
                      </a>
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Если кровля эксплуатируемая, её&nbsp;можно использовать различными способами: организовать lounge-зону, разбить газон с&nbsp;цветником, оборудовать теплицу или зимний сад, игровую и&nbsp;спортивную площадку или даже бассейн. Такое решение может быть практически безальтернативным в&nbsp;случае, если площадь вашего участка под застройку невелика, и&nbsp;вы&nbsp;планируете проводить значительную часть времени на&nbsp;свежем воздухе.</p>
                    <p class="content_p">Классическая эксплуатируемая кровля состоит из&nbsp;железобетонного основания, пароизоляционного слоя, теплоизолятора и&nbsp;гидрозащиты. Последний слой&nbsp;&mdash; террасное покрытие, например, тротуарная плитка на&nbsp;песчаной подушке или пластиковых держателях.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_left_narrow">
                      <StaticImage src="../../images/articles/krovlya_9.jpg" alt="Традиционная классическая кровля" />
                      <StaticImage src="../../images/articles/krovlya_10.jpg" alt="Схема традиционная классическая кровля" />
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">При устройстве эксплуатируемой зеленой кровли используется классическая технология плоской кровли, однако, особое внимание уделяется качественной и&nbsp;надежной защите от&nbsp;воды. В&nbsp;таком случае после гидро- и&nbsp;теплоизоляции укладывается геотекстиль и&nbsp;дренаж, функцию которого может выполнять гравий и&nbsp;щебенка.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_left_narrow">
                      <StaticImage src="../../images/articles/krovlya_11.jpg" alt="Инверсионная кровля" />
                      <StaticImage src="../../images/articles/krovlya_12.jpg" alt="Схема эксплуатируемая кровли" />
                    </div>
                  </div>
                  <div class="content_text">
                    <p class="content_p">Затем идет еще один слой геотекстиля, на&nbsp;который насыпается земля и&nbsp;высаживаются растения. Важно, чтобы созданием зеленой кровли занимались профессионалы, а&nbsp;также чтобы они использовали высококачественные материалы.</p>
                  </div>
                  <div class="content_images">
                    <div class="content_images_two_left_narrow">
                      <StaticImage src="../../images/articles/krovlya_13.jpg" alt="Пример зеленой экспуатируемой крыши" />
                      <StaticImage src="../../images/articles/krovlya_14.jpg" alt="Схема зеленой экспуатируемой крыши" />
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
            <Link to="/articles/dveri" className="articles_page_item articles_page_item3">
              <h4 className="articles_page_item_title_small articles_page_item_title_white">Как выбрать межкомнатные двери: советы и&nbsp;рекомендации</h4>
              <p className="articles_page_item_view_number articles_page_item_view_number_white"> <GetPageView slug={'/articles/dveri'}/> </p>
            </Link>
          </Masonry>
        </div>
      </section>
    </Layout>
  )
}

export default krovlya
const breakpointColumnsObj = {
  default: 4,
  768: 1
};