import React, { useState } from 'react'
import Layout from "../components/layout-black"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import { YouTobe } from "../subitems/pagevideo/youToobe"

const Video = () => {
  const [open , setOpen] =useState(false);
  return (
    <Layout>
      <Seo  title={"Видео материалы и презентации | I-PROJECT"} description={"На странице собраны видео наших реализованных проектов: квартир, домов и офисов. На видео можно увидеть процесс реализации или презентацию объекта."}
            location={"https://i-project.by/video"}
            image={"https://i-project.by/portfolio_newsite/korolya/01_korolya.webp"}/>
      <section>
        <div className="wrapper">
          <h1 className="pagevideo_title">Видео</h1>
          <div className="pagevideo_grid">
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/01.webp'}
                title={"Обзор интерьера дома от I-PROJECT"}
                embed={'rV3dhWrDcMU'}>
                <StaticImage src={'../images/pagevideo/01.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Обзор интерьера дома</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/02.webp'}
                title={"Гармоничный дом. Интерьер"}
                embed={'5zXfED0tuQw'}>
                <StaticImage src={'../images/pagevideo/02.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Гармоничный дом. Интерьер (400м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/03.webp'}
                title={"Гармоничный дом. Архитектура"}
                embed={'kxzQ-g1t_WQ'}>
                <StaticImage src={'../images/pagevideo/03.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Гармоничный дом. Архитектура (400м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/23.webp'}
                title={"Интерьер квартиры в Минске для семьи с двумя детьми"}
                embed={'nLeSdhbcI_A'}>
                <StaticImage src={'../images/pagevideo/23.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Интерьер квартиры в Минске для семьи с двумя детьми (90м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/04.webp'}
                title={"Обзор архитектурных решений и ландшафтного дизайна"}
                embed={'d7himngzT4s'}>
                <StaticImage src={'../images/pagevideo/04.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Обзор архитектурных решений и&nbsp;ландшафтного дизайна</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/05.webp'}
                title={"Интерьер квартиры на ул.Короля в Минске"}
                embed={'d7himngzT4s'}>
                <StaticImage src={'../images/pagevideo/05.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске. (145м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <YouTobe
                image={'../images/pagevideo/24.webp'}
                title={"Обзор дизайна интерьера офиса"}
                embed={'OQpDR0Miv_U'}>
                <StaticImage src={'../images/pagevideo/24.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Обзор дизайна интерьера офиса ООО&nbsp;&laquo;Александров&raquo; (50м<sup>2</sup>)</p>
            </div>
            <button onClick={()=>setOpen(!open)} className={"pagevideo_button" + (open? " pagevideo_button_hidden" : "")}>Показать все</button>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/06.webp'}
                title={"Дизайн интерьера офисов группы компаний «Протос»"}
                embed={'_FHzDPN9lU8'}>
                <StaticImage src={'../images/pagevideo/06.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера офисов группы компаний «Протос» (200м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/07.webp'}
                title={"Реконструкция офисного здания группы компаний «Протос»"}
                embed={'d4MFvx0II4s'}>
                <StaticImage src={'../images/pagevideo/07.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Реконструкция офисного здания группы компаний «Протос» (200м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/08.webp'}
                title={"Строительство дома I-PROJECT"}
                embed={'KRf8WVs99-o'}>
                <StaticImage src={'../images/pagevideo/08.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Строительство дома I-PROJECT</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/09.webp'}
                title={"Дизайн интерьера квартир"}
                embed={'LffJJGN9ong'}>
                <StaticImage src={'../images/pagevideo/09.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера квартир</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/25.webp'}
                title={"Дизайн интерьера офиса Compact"}
                embed={'7P7pibFNjRo'}>
                <StaticImage src={'../images/pagevideo/25.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера офиса ООО&nbsp;&laquo;Александров&raquo; (50м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/10.webp'}
                title={"Дизайн квартиры в жилом комплексе D3"}
                embed={'fv9YJ7cNTjI'}>
                <StaticImage src={'../images/pagevideo/10.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн квартиры в&nbsp;жилом комплексе D3. (120м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/11.webp'}
                title={"Сила цвета. Дизайн квартиры в жилом комплексе D3"}
                embed={'UDFLeVULySg'}>
                <StaticImage src={'../images/pagevideo/11.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Сила цвета. Дизайн квартиры в&nbsp;жилом комплексе&nbsp;D3.</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/12.webp'}
                title={"Дизайн и архитектура"}
                embed={'JYz64ADPdt4'}>
                <StaticImage src={'../images/pagevideo/12.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн и&nbsp;архитектура</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/13.webp'}
                title={"Дизайн интерьера дома"}
                embed={'AL0wJDCA3pg'}>
                <StaticImage src={'../images/pagevideo/13.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера дома</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/14.webp'}
                title={"Архитектура I-PROJECT"}
                embed={'4K-zaabXrGc'}>
                <StaticImage src={'../images/pagevideo/14.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Архитектура I-PROJECT</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/15.webp'}
                title={"ПРО интерьер с&nbsp;Александром Игнатьевым"}
                embed={'PNcrGQA_tR4'}>
                <StaticImage src={'../images/pagevideo/15.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">ПРО интерьер с&nbsp;Александром Игнатьевым</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/16.webp'}
                title={"Двушка на Панфилова. Дизайн квартиры в Минске"}
                embed={'GRFSiz-Or50'}>
                <StaticImage src={'../images/pagevideo/16.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске. (85м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/17.webp'}
                title={"Дом с балтийским характером. Экстерьер"}
                embed={'gXVnpRAr5p4'}>
                <StaticImage src={'../images/pagevideo/17.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дом с&nbsp;балтийским характером. Экстерьер (500м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/18.webp'}
                title={"Дом с балтийским характером. Интерьер"}
                embed={'qT_tsEeFD-s'}>
                <StaticImage src={'../images/pagevideo/18.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дом с&nbsp;балтийским характером. Интерьер (500м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/19.webp'}
                title={"Дизайн интерьера квартиры на ул.Сторожевская"}
                embed={'7q8HRSZYk_s'}>
                <StaticImage src={'../images/pagevideo/19.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера квартиры на&nbsp;ул.Сторожевская. (130м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/20.webp'}
                title={"Дизайн интерьера квартиры на ул.Сторожевская"}
                embed={'6GB79vo1bZA'}>
                <StaticImage src={'../images/pagevideo/20.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Дизайн интерьера квартиры на&nbsp;ул.Сторожевская. (130м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/21.webp'}
                title={"Игра с отражениями. Дизайн квартиры в Минске"}
                embed={'ki7KwSmPG0g'}>
                <StaticImage src={'../images/pagevideo/21.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске. (100м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <YouTobe
                image={'../images/pagevideo/22.webp'}
                title={"Хорошее настроение. Дизайн квартиры в Минске"}
                embed={'TbQZLyJnJ34'}>
                <StaticImage src={'../images/pagevideo/22.webp'}  />
              </YouTobe>
              <p className="pagevideo_item_name">Хорошее настроение. Дизайн квартиры в&nbsp;Минске. (140м<sup>2</sup>)</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Video