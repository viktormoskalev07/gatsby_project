import React from 'react'
import Layout from "../components/layout-black"
import "../components/styles/cost.scss"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../components/fancybox.js";
import { AnimatedLine } from '../subitems/portfolio/animatedLine'
import Seo from "../components/seo"
import { CalculatorLink } from "../components/calculator/calculatorLink"
import { useInView } from "react-intersection-observer"

import { Video } from "../subitems/cost-video/video"
import CostVideo from "../video/cost_video.mp4"
import CostVideoMobile from "../video/cost_video_mob.mp4"


const Cost = () => {
  const { ref, inView  } = useInView({
    triggerOnce: true,
  });
  
  return (
    <Layout>
      <Seo  title={"Стоимость дизайн проекта | I-PROJECT"} description={"Стоимость услуги дизайн проект: что влияет на стоимость"}
            location={"https://i-project.by/cost"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <div class="wrapper">
        <h1 class="cost_title">Стоимость дизайн проекта</h1>
        <AnimatedLine />
      </div>
      <div class="wrapper">
        <div className="cost_text">
          <p class="cost_text_p">Основную ценность наших услуг можно показать через схему реализации дизайн проекта. Мы&nbsp;находимся максимально близко к&nbsp;клиенту и&nbsp;помогаем решать ему вопросы, которые возникают в&nbsp;процессе реализации.</p>
          <p class="cost_text_p">Помимо вопросов поставки материалов или контроля качества работы, нужно следить за&nbsp;тем, чтобы подрядчики не&nbsp;создавали проблем для специалистов из&nbsp;смежных областей. Оперативная реакция на&nbsp;возникающие проблемы и&nbsp;продуманный микроменджмент позволили довести до&nbsp;результата большое количество квартир и&nbsp;домов.</p>
        </div>
        <Fancybox>
          <a
            href="https://i-project.by/portfolio_newsite/cost/cost_schema_mobile.webp"
            data-fancybox="gallery"
            >
              <StaticImage className="cost_schema_mobile" src="../images/cost/cost_schema_mobile.jpg" alt="Схема работы команды iproject с клиентом и нашими подрядчиками" />
          </a>
        </Fancybox>
        <div className="cost_schema">
          <div className="cost_schema_block1">
            <div className="cost_schema__client">
              <p className="cost_schema__client_p">Наш клиент</p>
            </div>
            <div className="cost_schema__realize_lines_block">
              <div className="cost_schema__realize_line_bottom"></div>
            </div>
            <div className={"cost_schema__realize" + (inView? " active " : " ")}>
              <p className="cost_schema__realize_p">Реализованный объект</p>
            </div>
          </div>
          <div className="cost_schema__iproject">
            <p className="cost_schema__iproject_p">Автор проекта</p>
            <div className="cost_schema__iproject_item cost_schema__iproject_item1">
              <p className="cost_schema__iproject_item_p">Дизайн проект,<br />Архитектурный проект</p>
            </div>
            <div className="cost_schema__iproject_item cost_schema__iproject_item2">
              <p className="cost_schema__iproject_item_p">Сводный проект</p>
            </div>
            <div className="cost_schema__iproject_line_bottom"></div>
          </div>
          <div className="cost_schema_contractors">
            <div className="cost_schema_contractor">
              <p className="cost_schema_contractor_title">Смежные проектировщики</p>
              <div className="cost_schema_contractor_items">
                <ul className="cost_schema_contractor_list">
                  <li className="cost_schema_contractor_li">Конструктивные решения (КР)</li>
                  <li className="cost_schema_contractor_li">Отопление и&nbsp;вентиляция (ОВ)</li>
                  <li className="cost_schema_contractor_li">Водопровод и&nbsp;канализация (ВК)</li>
                </ul>
                <ul className="cost_schema_contractor_list">
                  <li className="cost_schema_contractor_li">Электрооборудование и&nbsp;автоматизация (ЭО + &laquo;Умный Дом&raquo;)</li>
                  <li className="cost_schema_contractor_li">Инженерная геодезия (топосъемка)</li>
                  <li className="cost_schema_contractor_li">Инженерная геология (бурение скважин, анализ грунта)</li>
                </ul>
              </div>
            </div>
            <div className="cost_schema_contractor">
              <div className="cost_schema_contractor_title_div">
                <p className="cost_schema_contractor_title">Поставщики товаров и&nbsp;услуг</p>
              </div>
              <div className="cost_schema_contractor_items">
                <p className="cost_schema_contractor_p">Салоны и&nbsp;магазины по&nbsp;продаже: электрооборудования, сантехоборудования, строительных материалов, отделочных материалов, мебели, штор, предметов интерьера и&nbsp;т.п.</p>
              </div>
            </div>
            <div className="cost_schema_contractor cost_schema_contractor3">
              <div className="cost_schema_contractor_title_div">
                <p className="cost_schema_contractor_title">Производители работ (Мебель)</p>
              </div>
              <div className="cost_schema_contractor_items">
                <ul className="cost_schema_contractor_list cost_schema_contractor_list3">
                  <li className="cost_schema_contractor_li">Менеджеры</li>
                  <li className="cost_schema_contractor_li">Проектировщики</li>
                  <li className="cost_schema_contractor_li">Конструкторы</li>
                  <li className="cost_schema_contractor_li">Монтажники</li>
                  <li className="cost_schema_contractor_li">Логисты</li>
                </ul>
              </div>
            </div>
            <div ref={ref} className="cost_schema_contractor cost_schema_contractor4">
              <p className="cost_schema_contractor_title">Производители работ (Строительство и&nbsp;ремонт)</p>
              <div className="cost_schema_contractor_items">
                <p className="cost_schema_contractor_p">Прорабы, кладочники, монолитчики, штукатуры, маляры, плиточники,сантехники, электрики, оконщики, жестянщики, кровельщики, благоустраители, геодезисты, геологи и&nbsp;т.&nbsp;п.</p>
              </div>
              <div className="cost_schema_contractor4_line_bottom"></div>
            </div>
          </div>
        </div>
        <Video mobileSrc={CostVideoMobile} desktopSrc={CostVideo} />
        <CalculatorLink />
      </div>
    </Layout>
  )
}

export default Cost