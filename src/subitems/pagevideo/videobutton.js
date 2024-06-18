import * as React from "react"
import { useState } from "react"
import { YouToobeItem } from "../pagevideo/youToobeItem"


export const VideoButton = () => {
  const [open , setOpen] =useState(false);
  return (
    <section>

      <div className="wrapper">
          <h1 className="pagevideo_title">Видео</h1>
          <div className="pagevideo_grid">
            <div className="pagevideo_item">
              <YouToobeItem
                param={"start=0"}
                title={"Обзор интерьера дома от I-PROJECT"}
                embed={'rV3dhWrDcMU'}
                className="pagevideo_item" />
              <p className="pagevideo_item_name">Обзор интерьера дома</p>
            </div>
            <div className="pagevideo_item">
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/5zXfED0tuQw" title="Гармоничный дом. Интерьер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Гармоничный дом. Интерьер (400м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/kxzQ-g1t_WQ" title="Гармоничный дом. Архитектура" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Гармоничный дом. Архитектура (400м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/d7himngzT4s" title="Обзор архитектурных решений и ландшафтного дизайна" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Обзор архитектурных решений и&nbsp;ландшафтного дизайна</p>
            </div>
            <div className="pagevideo_item">
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/EcVhCUcLoV0" title="Интерьер квартиры на ул.Короля в Минске" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Интерьер квартиры на&nbsp;ул.Короля в&nbsp;Минске. (145м<sup>2</sup>)</p>
            </div>
            <div className="pagevideo_item">
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/OQpDR0Miv_U" title="Дизайн интерьера офиса Compact" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Обзор дизайна интерьера офиса Compact (50м<sup>2</sup>)</p>
            </div>
            <button onClick={()=>setOpen(!open)} className={"pagevideo_button" + (open? " pagevideo_button_hidden" : "")}>Показать все</button>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/_FHzDPN9lU8" title="Дизайн интерьера офисов группы компаний «Протос»" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн интерьера офисов группы компаний «Протос». (200м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/d4MFvx0II4s" title="Реконструкция офисного здания группы компаний «Протос»" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Реконструкция офисного здания группы компаний «Протос». (200м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/KRf8WVs99-o" title="Строительство дома I-PROJECT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Строительство дома I-PROJECT</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/LffJJGN9ong" title="Дизайн интерьера квартир" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн интерьера квартир</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/fv9YJ7cNTjI" title="Дизайн квартиры в жилом комплексе D3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн квартиры в&nbsp;жилом комплексе D3. (120м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/UDFLeVULySg" title="Сила цвета. Дизайн квартиры в жилом комплексе D3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Сила цвета. Дизайн квартиры в&nbsp;жилом комплексе&nbsp;D3.</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/JYz64ADPdt4" title="Дизайн и архитектура" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн и&nbsp;архитектура</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/AL0wJDCA3pg" title="Дизайн интерьера дома" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн интерьера дома</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/4K-zaabXrGc" title="Архитектура I-PROJECT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Архитектура I-PROJECT</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/PNcrGQA_tR4" title="Интервью с основателем нашей студии Александром Игнатьевым" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Интервью с&nbsp;основателем нашей студии Александром Игнатьевым</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/GRFSiz-Or50" title="Двушка на Панфилова. Дизайн квартиры в Минске" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Двушка на&nbsp;Панфилова. Дизайн квартиры в&nbsp;Минске. (85м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/gXVnpRAr5p4" title="Дом с балтийским характером. Экстерьер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дом с&nbsp;балтийским характером. Экстерьер (500м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/qT_tsEeFD-s" title="Дом с балтийским характером. Интерьер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дом с&nbsp;балтийским характером. Интерьер (500м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/7q8HRSZYk_s" title="Дизайн интерьера квартиры на ул.Сторожевская" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн интерьера квартиры на&nbsp;ул.Сторожевская. (130м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/6GB79vo1bZA" title="Дизайн интерьера квартиры на ул.Сторожевская" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Дизайн интерьера квартиры на&nbsp;ул.Сторожевская. (130м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/ki7KwSmPG0g" title="Игра с отражениями. Дизайн квартиры в Минске" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Игра с&nbsp;отражениями. Дизайн квартиры в&nbsp;Минске. (100м<sup>2</sup>)</p>
            </div>
            <div className={"pagevideo_item" + (open? " pagevideo_item_mobile_show" :" pagevideo_item_mobile_hidden")}>
              <iframe className="pagevideo_item_iframe" width="100%" height="auto" src="https://www.youtube.com/embed/TbQZLyJnJ34" title="Хорошее настроение. Дизайн квартиры в Минске" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="pagevideo_item_name">Хорошее настроение. Дизайн квартиры в&nbsp;Минске. (140м<sup>2</sup>)</p>
            </div>
          </div>
        </div>
      </section>
    
  )
}
