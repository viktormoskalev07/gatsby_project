import * as React from "react"
import advantage_1 from "../../images/icons/advantage_1.svg"
import advantage_1_mob from "../../images/icons/advantage_1_mob.svg"
import advantage_2 from "../../images/icons/advantage_2.svg"
import advantage_2_mob from "../../images/icons/advantage_2_mob.svg"
import advantage_3 from "../../images/icons/advantage_3.svg"
import advantage_3_mob from "../../images/icons/advantage_3_mob.svg"
import advantage_4 from "../../images/icons/advantage_4.svg"
import advantage_4_mob from "../../images/icons/advantage_4_mob.svg"
import advantage_5 from "../../images/icons/advantage_5.svg"
import advantage_5_mob from "../../images/icons/advantage_5_mob.svg"
import advantage_6 from "../../images/icons/advantage_6.svg"
import advantage_6_mob from "../../images/icons/advantage_6_mob.svg"
import { useState } from "react"


export const Advantages = () => {
  const [open , setOpen] =useState(false);
  return (
    <section className="advantage">
      <h2 className="advantage_title" id="advantage_title">Наши преимущества</h2>
      <div className="advantage_items">
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_1} alt="" className="advantage_item_images_desk" />
            <img src={advantage_1_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">Индивидуальный подход</h3>
            <p className="advantage_item_p">Всегда находим компромисс между вашими потребностями и&nbsp;нашими
              творческими амбициями. Умеем слушать, говорить и&nbsp;делать.</p>
          </div>
        </div>
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_2} alt="" className="advantage_item_images_desk" />
            <img src={advantage_2_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">Реализованные проекты</h3>
            <p className="advantage_item_p">В&nbsp;нашем портфолио более 100 реализованных проектов, от&nbsp;интерьеров
              квартир и&nbsp;домов до&nbsp;архитектуры зданий и&nbsp;объектов реконструкции.</p>
          </div>
        </div>
      </div>
      <div className={"advantage_items advantage_items_sp" + (open? '   ' :" advantage_items_mob" )  }>
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_3} alt="" className="advantage_item_images_desk" />
            <img src={advantage_3_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">15&nbsp;лет практики и&nbsp;опыта</h3>
            <p className="advantage_item_p">Мы&nbsp;не&nbsp;будем ставить эксперименты на&nbsp;ваших объектах
              и&nbsp;проверять как работает&nbsp;то, что в&nbsp;теории должно работать. Предложим вам такие решения,
              за&nbsp;которые не&nbsp;придется краснеть.</p>
          </div>
        </div>
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_4} alt="" className="advantage_item_images_desk" />
            <img src={advantage_4_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">Удобная документация</h3>
            <p className="advantage_item_p">Наши чертежи&nbsp;— подробные и&nbsp;понятные. На&nbsp;них отображена вся
              информация, необходимая для строительства, эстетично и&nbsp;доходчиво.</p>
          </div>
        </div>
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_5} alt="" className="advantage_item_images_desk" />
            <img src={advantage_5_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">Авторский надзор</h3>
            <p className="advantage_item_p">Позволяет реализовать все задуманное под нашим контролем качественно
              и&nbsp;в&nbsp;срок. Мы&nbsp;привыкли доводить свои проекты до&nbsp;конца.</p>
          </div>
        </div>
        <div className="advantage_item">
          <div className="advantage_item_images">
            <img src={advantage_6} alt="" className="advantage_item_images_desk" />
            <img src={advantage_6_mob} alt="" className="advantage_item_images_mob" />
          </div>
          <div className="advantage_item_text">
            <h3 className="advantage_item_title">Реалистичная визуализация</h3>
            <p className="advantage_item_p">Делаем фото-реалистичную 3D-визуализацию для каждого проекта. Даем
              возможность детально рассмотреть свой будущий дом или квартиру прежде, чем приступим
              к&nbsp;реализации.</p>
          </div>
        </div>
      </div>
      <button onClick={()=>setOpen(!open)} className="advantage_button">{ open?   'Скрыть ':'Показать все'}</button>
    </section>
  )
}
