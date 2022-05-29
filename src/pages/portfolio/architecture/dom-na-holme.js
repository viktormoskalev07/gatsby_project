import React from 'react'
import Layout from "../../../components/layout-black"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsArch from "../../../components/breadcrumbs-arch.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Seo from "../../../components/seo"

const domNaHolme = () => {
  return (
    <Layout>
      <Seo  title={"Дом на холме 450 м2, визуализации | I-PROJECT"} description={"Наша студия спроектировала идеальный дом из стекла и бетона в Подмосковье."}
            location={"https://www.i-project.by/portfolio/architecture/dom-na-holme"}
            image={"https://www.i-project.by/wp-content/uploads/2020/08/d3-1-min-800x600.jpg"}/>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsArch />
            <h1 class="project_title">Дом на&nbsp;холме, 450м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <a
              href="https://www.i-project.by/portfolio_newsite/dom_na_holme/08_dom_na_holme.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/dom_na_holme/08_dom_na_holme.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/architecture/dom-na-holme/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-na-holme/#anchor_2" title="План дома" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-na-holme/#anchor_3" title="Фасад с улицы" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-na-holme/#anchor_4" title="Парковочное место" /></li>
                <li><AnchorLink to="/portfolio/architecture/dom-na-holme/#anchor_5" title="Lounge-зона" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2022</span></p>
                <p class="project_info_p">Локация: <span>Подмосковье, Россия</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/dom_na_holme/02_dom_na_holme.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_na_holme/02_dom_na_holme.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/dom_na_holme/08_dom_na_holme.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_na_holme/08_dom_na_holme.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/dom_na_holme/07_dom_na_holme.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_na_holme/07_dom_na_holme.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Особенность архитектурного решения заключена в&nbsp;сочетании идеально выверенной геометрии пространства с&nbsp;продуманной планировочной и&nbsp;композиционной структурой. Чистые бетонные плоскости стен чередуются с&nbsp;крупноформатными джамбо-стеклами (6&nbsp;на 3,2&nbsp;м).</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">План дома</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/09_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/09_dom_na_holme.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/10_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/10_dom_na_holme.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Дом общей площадью 450 м.кв. находится в&nbsp;удалении от&nbsp;типовых построек в&nbsp;зеленой зоне с&nbsp;красивыми пейзажами. Окружающее пространство гармонично вписывается в&nbsp;интерьер и&nbsp;становится его неотъемлемой частью.</p>
                <p class="content_p">Входная зона представлена тамбуром-прихожей. Совмещение двух функций в&nbsp;одном помещении позволяет сэкономить полезное пространство дома. Сюда жильцы могут попасть как из&nbsp;гаража, так и&nbsp;с&nbsp;крыльца под навесом. Тамбур ведет в&nbsp;гардеробную и&nbsp;общую зону.</p>
              </div>
              <h2 class="content_h2" id="anchor_3">Фасад с улицы</h2>
              <div class="content_text">
                <p class="content_p">Со&nbsp;стороны улицы и&nbsp;проезда фасад частично закрыт. Основная видовая зона направлена в&nbsp;сторону участка, где находится большая терраса и&nbsp;открытый бассейн.</p>
                <p class="content_p">В&nbsp;самом доме также есть lounge-зона с&nbsp;крытым бассейном, сауной, душевой и&nbsp;санузлом. Спуститься в&nbsp;цокольное помещение, где находится чаша бассейна и&nbsp;дополнительное оборудование, можно по&nbsp;лестнице.</p>
              </div>
              <div class="content_images">
              <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/01_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/01_dom_na_holme.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/02_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/02_dom_na_holme.jpg" alt="" />
                  </a>
                </div>
              </div>
              <h2 class="content_h2" id="anchor_4">Парковочное место</h2>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/04_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/04_dom_na_holme.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/07_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/07_dom_na_holme.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Первый этаж условно разделен на&nbsp;две части: совмещенная со&nbsp;столовой и&nbsp;кухней гостиная. Здесь&nbsp;же находится гостевой санузел. С&nbsp;первого этажа через холл можно попасть в&nbsp;SPA-зону.</p>
                <p class="content_p">В&nbsp;кухонной зоне использован нестандартный прием&nbsp;&mdash; пространство просвечивается насквозь. Благодаря этому приему, а&nbsp;также использованию больших окон, с&nbsp;любой точки первого этажа открываются шикарные виды.</p>
              </div>
              <h2 class="content_h2" id="anchor_5">Lounge-зона</h2>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                  href="https://www.i-project.by/portfolio_newsite/dom_na_holme/03_dom_na_holme.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/dom_na_holme/03_dom_na_holme.jpg" alt="" />
                </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Помимо стандартного набора бытовой техники и&nbsp;мебели в&nbsp;кухне размещается двухуровневая барная стойка, каждый уровень которой выполняет свою особую функцию.</p>
                <p class="content_p">В&nbsp;зоне гостиной находится большой п-образный диван и&nbsp;пара кресел. Диван как ключевой элемент интерьера направлен в&nbsp;первую очередь на&nbsp;виды за&nbsp;окном и&nbsp;только частично&nbsp;&mdash; на&nbsp;телевизор.</p>
                <p class="content_p">В&nbsp;хорошую погоду благодаря большим окнам и&nbsp;раздвижным системам первый этаж визуально объединяется с&nbsp;террасой и&nbsp;бассейном.</p>
              </div>
              <div class="content_images">
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/08_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/08_dom_na_holme.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">На&nbsp;второй этаж ведет элегантная лестница на&nbsp;металлических косоурах. Она выступает одним из&nbsp;важных элементов, формирующих интерьер.</p>
                <p class="content_p">На&nbsp;втором этаже расположены две спальни, холл с&nbsp;фитнес-зоной и&nbsp;санузлом. При каждой спальней имеется собственный санузел, а&nbsp;при хозяйской мастер-спальне также имеется гардеробная.</p>
                <p class="content_p">Дом отлично подходит семье со&nbsp;взрослыми детьми, которые уже не&nbsp;живут постоянно с&nbsp;родителями, но&nbsp;периодически приезжают погостить.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/05_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/05_dom_na_holme.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/dom_na_holme/06_dom_na_holme.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/dom_na_holme/06_dom_na_holme.jpg" alt="" />
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

export default domNaHolme