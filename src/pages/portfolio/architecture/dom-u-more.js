import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const domMore = () => {
  return (
    <Layout>
      <Seo  title={"Дом у Моря. Архитектурное решение и интерьер, фото | I-PROJECT"} description={"Первое место на Международном биеннале «Леонардо 2019». В конкурсе принимали участие работы из 28 стран за 2016,2017,2018, 2019гг."}
            location={"https://i-project.by/portfolio/architecture/dom-u-more"}
            image={"https://i-project.by/portfolio_newsite/dom_u_more/01_dom_u_more.webp"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом у&nbsp;моря. Архитектурное решение + Интерьер, 1000м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://i-project.by/portfolio_newsite/dom_u_more/02_dom_u_more.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/dom_u_more/02_dom_u_more.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_2" title="Архитектурное решение" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_3" title="Первый этаж" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_4" title="Гостиная" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_5" title="Кухня-столовая" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_6" title="Второй этаж" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-u-more/#anchor_7" title="Мастер-спальня" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2016</span></p>
                <p class="project_info_p">Локация: <span>Испания</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://i-project.by/portfolio_newsite/dom_u_more/01_dom_u_more.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_u_more/01_dom_u_more.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/dom_u_more/07_dom_u_more.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_u_more/07_dom_u_more.jpg" alt="" />
                </a>
                <a
                  href="https://i-project.by/portfolio_newsite/dom_u_more/14_dom_u_more.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_u_more/14_dom_u_more.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Проект дома в&nbsp;курортном городе Марбелья на&nbsp;южном побережье Испании. Место, на&nbsp;котором требовалось разместить виллу, идеально сочетает горные и&nbsp;морские пейзажи. Создавая новое пространство в&nbsp;такой среде, главное для архитектора&nbsp;&mdash; не&nbsp;навредить и&nbsp;максимально задействовать красоту окружающей природы. На&nbsp;архитектурном сленге это называется&nbsp;&mdash; &laquo;заимствовать ландшафт&raquo;.</p>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_2">Архитектурное решение</h2>
              <div class="content_text">
                <p class="content_p">Чтобы море и&nbsp;горы стали частью дома, нужно было создать максимально свободно пространство без лишних стен, колонн и&nbsp;балок. Для создания такой планировочной структуры было использовано нетривиальное инженерное решения, сочетающее специальные металлические и&nbsp;железобетонные конструкции, что позволило сформировать очень широкие безопорные пролеты.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/01_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/01_dom_u_more.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/14_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/14_dom_u_more.jpg" alt="" />
                  </a>
                </div>
                <div class="rewards">
                  <div class="reward_item rewards_white">
                    <StaticImage src="../../../images/rewards/reward_5.jpg" alt="" class="reward_image"/>
                    <p class="reward_text">Проект получил первое место на&nbsp;Международном биеннале &laquo;Леонардо 2019&raquo;, в&nbsp;котором участвовали более 300 работ из&nbsp;28&nbsp;стран. Победителей определяло международное жюри, в&nbsp;состав вошли известные архитекторы из&nbsp;США, Австрии, Нидерландов, России и&nbsp;Беларуси.</p>
                  </div>
                </div>
              </div>
              <h2 class="content_h2">Цветовая гамма</h2>
              <div class="content_text">
                <p class="content_p">В&nbsp;качестве основной цветовой гаммы выступают естественные цвета окружающего природного ландшафта, неба, моря, скал. Для отделки стен выбраны белый, серый и&nbsp;древесный цвета, а&nbsp;также их&nbsp;оттенки. Они используются в&nbsp;качестве нейтрального фона, который не&nbsp;мешает любоваться природой. В&nbsp;качестве цветовых акцентов в&nbsp;интерьере используются пейзажи за&nbsp;окном и&nbsp;современная живопись.</p>
                <p class="content_p"></p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_3">Первый этаж</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/15_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/15_dom_u_more.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">На&nbsp;первом этаже находится совмещенная зона гостиной, кухни и&nbsp;столовой, а&nbsp;также закрытая спальня с&nbsp;ванной комнатой и&nbsp;гардеробной. Гостевой санузел и&nbsp;общая гардеробная примыкают к&nbsp;прихожей.</p>
                <p class="content_p">Климат позволяет использовать раздвижную оконную систему, открыв которую можно объединить пространство первого этажа с&nbsp;террасой и&nbsp;открытым бассейном. Таким образом хозяева получают атмосферное место, где можно принимать большое количество гостей и&nbsp;проводить вечеринки.</p>
              </div>
              <h2 class="content_h2" id="anchor_4">Гостиная</h2>
              <div class="content_text">
                <p class="content_p">Благодаря внушительной площади, здесь удалось разместить сразу несколько групп диванов. Одна развернута в&nbsp;сторону морского побережья, другая&nbsp;&mdash; в&nbsp;сторону камина, третья расположена в&nbsp;коктейльной зоне рядом с&nbsp;дополнительной барной стойкой. Такое решение очень удобно для тех случаев, когда в&nbsp;доме собирается много гостей. Они могут свободно разбиваться на&nbsp;группы и&nbsp;непринужденно общаться.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/03_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/03_dom_u_more.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/04_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/04_dom_u_more.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/05_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/05_dom_u_more.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_5">Кухня-столовая</h2>
              <div class="content_text">
                <p class="content_p">Кроме стола и&nbsp;кухонного гарнитура со&nbsp;встроенной бытовой техникой тут находится длинная барная стойка. Над одной из&nbsp;рабочих поверхностей&nbsp;&mdash; окно по&nbsp;всей длине. Этот прием не&nbsp;только увеличивает количество естественного света, который поступает в&nbsp;комнату, но&nbsp;и&nbsp;позволяет хозяевам наслаждаться шикарными видами из&nbsp;любой точки дома. Их&nbsp;кухни открывается свободный доступ в&nbsp;столовую с&nbsp;обеденной группой.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/06_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/06_dom_u_more.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Второй этаж</h2>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/16_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/16_dom_u_more.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_7">Мастер-спальня</h2>
              <div class="content_text">
                <p class="content_p">Здесь находится открытая мастер-спальня со&nbsp;вторым светом и&nbsp;удивительными видами на&nbsp;море. При желании можно раздвинуть окна и&nbsp;наслаждаться практически полным соприкосновением с&nbsp;природой. Спальню органично дополняют ванная и&nbsp;душевая, свободно оборудованные в&nbsp;общем с&nbsp;ней пространстве, вмещающем также два островных умывальника с&nbsp;подвесными зеркалами. В&nbsp;непосредственном доступе находится и&nbsp;закрытая зона спа с&nbsp;парной, хамамом и&nbsp;душевой, с&nbsp;выходом на&nbsp;террасу, оборудованную джакузи.</p>
                <p class="content_p"></p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/13_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/13_dom_u_more.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/09_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/09_dom_u_more.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/11_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/11_dom_u_more.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/12_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/12_dom_u_more.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/08_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/08_dom_u_more.jpg" alt="" />
                  </a>
                  <a
                    href="https://i-project.by/portfolio_newsite/dom_u_more/10_dom_u_more.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_u_more/10_dom_u_more.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </Fancybox>
    </Layout>
  )
}

export default domMore
