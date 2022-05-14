import React from 'react'
import Layout from "../../../components/layout-black"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import BreadcrumbsInterier from "../../../components/breadcrumbs-interier.js";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { YouTobe } from "../../../subitems/youToobe"
import  thumbnail  from  "../../../images/portfolio/korolya/01_korolya.jpg"

const korolya = () => {
  return (
    <Layout>
      <Fancybox>
        <div class="wrapper">
          <div class="project">
            <BreadcrumbsInterier />
            <h1 class="project_title">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске, 145&nbsp;м<sup>2</sup></h1>
          </div>
          <div class="project_main_photo">
            <YouTobe
              param={'start=1'}
              image={thumbnail}
              title={"Интерьер квартиры на ул.Короля в Минске"}
              embed={'EcVhCUcLoV0'}>
              <StaticImage src={'../../../images/portfolio/korolya/01_korolya.jpg'}  />
            </YouTobe>
          </div>
        </div>
        <div class="content_body">
          <div class="content_body_absolute">
            <div class="left_sidebar">
              <ul>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_1" title="Описание проекта" /></li>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_2" title="Планировка квартиры" /></li>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_3" title="Гостиная, совмещенная с&nbsp;кухней" /></li>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_4" title="Мастер-спальня" /></li>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_5" title="Санузлы" /></li>
                <li><AnchorLink to="/portfolio/interier/korolya/#anchor_6" title="Другие помещения в&nbsp;квартире" /></li>
              </ul>
            </div>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="project_info">
                <p class="project_info_p">Год: <span>2021</span></p>
                <p class="project_info_p">Локация: <span>Минск</span></p>
                <p class="project_info_p">Архитектор: <span>Александр Игнатьев</span></p>
              </div>
              <div class="content_task_block" id="anchor_1">
                <a
                  href="https://www.i-project.by/portfolio_newsite/korolya/03_korolya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/korolya/03_korolya.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/korolya/10_korolya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/korolya/10_korolya.jpg" alt="" />
                </a>
                <a
                  href="https://www.i-project.by/portfolio_newsite/korolya/04_korolya.webp"
                  data-fancybox="gallery"
                >
                  <StaticImage src="../../../images/portfolio/korolya/04_korolya.jpg" alt="" />
                </a>
                <div class="content_task">
                  <span class="content_task_span">Описание</span>
                  <p class="content_task_p">Квартира в&nbsp;новостройке площадью 145&nbsp;м<sup>2</sup>, расположенная в&nbsp;тихом центре Минска с&nbsp;прекрасным видом за&nbsp;окнами.</p>
                  <p class="content_task_p">Заказчики, семейная пара&nbsp;&mdash; интеллигентные, состоявшиеся, любящие путешествовать зрелые люди с&nbsp;уже взрослыми и&nbsp;отдельно живущими детьми, пришли в&nbsp;студию по&nbsp;рекомендации.</p>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_2">Планировка квартиры</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/21_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/21_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/22_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/22_korolya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Квартира в&nbsp;монолитно-каркасном доме, поэтому одним из&nbsp;атрибутов планировки явились несущие колонны. Они естественным образом дали точку отсчёта для зонирования. В&nbsp;гостиной, благодаря&nbsp;им, была придумана стеллажная <Link to="/articles/hranenie" className="link">система хранения</Link>, что позволило отделить зону коридора, закрыть вход в&nbsp;санузел, и&nbsp;в&nbsp;то&nbsp;же время оставить ощущение воздуха и&nbsp;света. В&nbsp;спальне&nbsp;&mdash; появился портал у&nbsp;окна с&nbsp;рабочим местом заказчицы; в&nbsp;прихожей&nbsp;&mdash; большая гардеробная и&nbsp;постирочная.</p>
              </div>
              <h2 class="content_h2" id="anchor_3">Гостиная, совмещенная с&nbsp;кухней</h2>
            </div>
          </div>
          <div class="content_images_one_big">
            <a
              href="https://www.i-project.by/portfolio_newsite/korolya/01_korolya.webp"
              data-fancybox="gallery"
            >
              <StaticImage src="../../../images/portfolio/korolya/01_korolya.jpg" alt="" />
            </a>
          </div>
          <div class="wrapper">
            <div class="right_content">
              <div class="content_images">
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/02_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/02_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/04_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/04_korolya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/05_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/05_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/06_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/06_korolya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Изначально заказчица сама собиралась заниматься интерьером, но&nbsp;поняла, что не&nbsp;может справится, и&nbsp;требуется профессиональная помощь. Ей&nbsp;хотелось идти в&nbsp;ногу со&nbsp;временем, но&nbsp;в&nbsp;тоже время она не&nbsp;могла отказаться от&nbsp;каких-то своих представлений о&nbsp;комфорте и&nbsp;уюте. Постоянно были метания от&nbsp;одного к&nbsp;другому.</p>
              </div>
              <div class="content_images">
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/07_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/07_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/08_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/08_korolya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Этот проект&nbsp;&mdash; результат компромисса, в&nbsp;результате которого удалось сохранить авторскую задумку и&nbsp;удовлетворить требования заказчицы, которая принимала активное участие в&nbsp;совместном выборе мебели и&nbsp;аксессуаров.</p>
                <p class="content_p">Самое важное в&nbsp;этом проекте&nbsp;&mdash; удалось органично сочетать несколько жанров. С&nbsp;одной стороны это современный и&nbsp;технологичный интерьер, отвечающий духу времени, с&nbsp;другой&nbsp;&mdash; он&nbsp;пронизан уважением к&nbsp;пожеланиям заказчиков, юность которых пришлась на&nbsp;другую эпоху. Здесь есть и&nbsp;отсылка к&nbsp;60-м, и&nbsp;багет, и&nbsp;фацеты на&nbsp;кухне, и&nbsp;птички на&nbsp;шторах, и&nbsp;в&nbsp;то&nbsp;же время современные светильники, выверенная архитектура пространства.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_4">Мастер-спальня</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/14_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/14_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/12_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/12_korolya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_one">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/15_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/15_korolya.jpg" alt="" />
                  </a>
                </div>
                <div class="content_images_two_left_narrow">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/13_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/13_korolya.jpg" alt="" />
                  </a>
                  <StaticImage src="../../../images/portfolio/korolya/13-1_korolya.jpg" alt="" />
                </div>
              </div>
              <div class="content_text">
                <p class="content_p">Приёмы в&nbsp;оформлении интерьера: выделение зон с&nbsp;помощью цвета, смешение стилей, применение панелей МДФ в&nbsp;отделке стен, интегрирование несущих колонн в&nbsp;общую планировочную структуру.</p>
                <p class="content_p">Цветовая гамма: смелое сочетание сложных цветов, в&nbsp;основном&nbsp;&mdash; приглушенных.</p>
                <p class="content_p">Основная идея проекта: сделать интерьер, который будет отражать внутренний мир заказчика.</p>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_5">Санузлы</h2>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/16_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/16_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/11_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/11_korolya.jpg" alt="" />
                  </a>
                </div>
                <div class="pattern">
                  <StaticImage src="../../../images/portfolio/korolya/pattern.jpg" alt="" />
                </div>
                <div class="content_images_two">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/17_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/17_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/20_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/20_korolya.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content_images">
                <h2 class="content_h2" id="anchor_6">Другие помещения в&nbsp;квартире</h2>
                <div class="content_text">
                  <p class="content_p">Удобно, когда рядом с&nbsp;вешалкой есть зеркало во&nbsp;весь рост, в&nbsp;котором можно взглянуть на&nbsp;себя перед выходом, и&nbsp;комфортная оттоманка, на&nbsp;которую можно присесть и&nbsp;обуть обувь. Идеально, когда при прихожей имеется гардеробная.</p>
                  <p class="content_p">И&nbsp;конечно удобно, когда гостиная начинается не&nbsp;сразу с&nbsp;порога, как сейчас модно, а&nbsp;через прихожую.</p>
                  <p class="content_p">Мы&nbsp;хотели поменять входную дверь, но&nbsp;поскольку снаружи вид всех дверей требовалось сохранить неизменным, пришлось ее&nbsp;разобрать, и&nbsp;заменить внутреннюю панель на&nbsp;панель из&nbsp;крашенного МДФ.</p>
                  <p class="content_p">Панелями из&nbsp;этого&nbsp;же материала, в&nbsp;том&nbsp;же цвете, отделали откосы и&nbsp;прилегающие стены. Одна из&nbsp;панелей, правая, открывается от&nbsp;нажатия и&nbsp;за&nbsp;ней прячутся все распределительные электрощиты.</p>
                  <p class="content_p">Заказчики сперва не&nbsp;могли понять, почему стены в&nbsp;прихожей обязательно зашивать панелями&nbsp;&mdash; ведь можно их&nbsp;покрасить или поклеить обои. Пришлось обстоятельно и&nbsp;настойчиво убеждать, чтобы получить чистое и&nbsp;практичное решение, которым все остались довольны.</p>

                </div>
                <div class="content_images_three">
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/09_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/09_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/18_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/18_korolya.jpg" alt="" />
                  </a>
                  <a
                    href="https://www.i-project.by/portfolio_newsite/korolya/19_korolya.webp"
                    data-fancybox="gallery"
                  >
                    <StaticImage src="../../../images/portfolio/korolya/19_korolya.jpg" alt="" />
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

export default korolya
