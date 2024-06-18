import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const IncontentReviewProtos = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className="review_inproject">
      <div className="review_inproject_item">
        <StaticImage src="../../images/reviews/protos_review.jpg" alt="" className="review_inproject_image"/>
        <div className="review_inproject_right">
          <h4 className="review_inproject_title">Отзыв клиента</h4>
          <div className="review_inproject_wrap">
            <div>
              <div className={"review_inproject_text" + ( openProcessList?" open" : "")}>
                <p className="review_inproject_p">Компания &laquo;Протос&raquo; благодарит Александра Игнатьева и&nbsp;компанию I-PROJECT за&nbsp;реализацию проекта &laquo;Реконструкция офисного здания холдинга Группа компаний &bdquo;Протос&ldquo;&raquo;.</p>
              </div>
            </div>
            <a
              href="https://i-project.by/portfolio_newsite/compact/protos_review.webp"
              data-fancybox="gallery-1"
              className="review_inproject_image_link"
            >
              <StaticImage src="../../images/reviews/protos_review.jpg" className="review_inproject_image_mob" alt="" />
            </a>
          </div>
          <div className={"review_inproject_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_inproject_p">Разработка проекта реконструкции здания выполнена на&nbsp;высоком профессиональном уровне, качественно и&nbsp;в&nbsp;установленные сроки. При выполнении архитектурного проектирования в&nbsp;полном объеме были учтены требования нормативно-технической документации, современные тенденции и&nbsp;все пожелания Заказчика, и&nbsp;как результат&nbsp;&mdash; мы&nbsp;имеем современный и&nbsp;комфортный офис.</p>
            <p className="review_inproject_p">Подтверждением этому стала и&nbsp;высокая оценка специалистов: за&nbsp;реализацию проекта &laquo;Интерьер офиса группы компаний &bdquo;Протос&ldquo;&raquo; творческий коллектив компании I-PROJECT и&nbsp;автор проекта Александр Игнатьев были награждены ОО&nbsp;&laquo;Белорусский союз архитекторов&raquo; в&nbsp;рамках XX&nbsp;Республиканского конкурса Дипломом 1&nbsp;степени в&nbsp;номинации &laquo;Реконструкция зданий и&nbsp;сооружений&raquo; и&nbsp;Дипломом II&nbsp;степени в&nbsp;номинации &laquo;Интерьеры зданий и&nbsp;сооружений&raquo;.</p>
            <p className="review_inproject_p">C&nbsp;уверенностью можем сказать, что I-PROJECT высокопрофессиональная компания, оперативно и&nbsp;качественно решащая поставленные задачи.</p>
            <p className="review_inproject_p">Будем рады новым совместным проектам!</p>
          </div>
          <button onClick={toggleProcessList} className="review_button" style={hide}>Показать полностью</button>
        </div>
      </div>
    </div>
  )
}