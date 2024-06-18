import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const IncontentReviewCompact = () => {
  const [openProcessList , setOpenProcessList] = useState(false);
  const toggleProcessList =()=>{
    setOpenProcessList(!openProcessList);
  };
  const hide = openProcessList? {display:"none"}:{};
  return (
    <div className="review_inproject">
      <div className="review_inproject_item">
        <StaticImage src="../../images/reviews/alexandrov_review.jpg" alt="" className="review_inproject_image"/>
        <div className="review_inproject_right">
          <h4 className="review_inproject_title">Отзыв клиента</h4>
          <div className="review_inproject_wrap">
            <div>
              <div className={"review_inproject_text" + ( openProcessList?" open" : "")}>
                <p className="review_inproject_p">Общество с&nbsp;ограниченной ответственностью &laquo;Александров&raquo; выражает благодарность Алесандру Игнатьеву и&nbsp;его компании I-PROJECT за&nbsp;успешную работу по&nbsp;разработке проекта и&nbsp;реализации интерьера офиса компании.</p>
              </div>
            </div>
            <a
              href="https://i-project.by/portfolio_newsite/compact/alexandrov_review.webp"
              data-fancybox="gallery-1"
              className="review_inproject_image_link"
            >
              <StaticImage src="../../images/reviews/alexandrov_review.jpg" className="review_inproject_image_mob" alt="" />
            </a>
          </div>
          <div className={"review_inproject_text_hidden" + ( openProcessList?" open" : "")}>
            <p className="review_inproject_p">Мы&nbsp;остались очень довольны результатом и&nbsp;получили замечательный интерьер, в&nbsp;котором приятно находится сотрудникам и&nbsp;клиентам компании.</p>
            <p className="review_inproject_p">Весь комплекс работ/услуг по&nbsp;дизайну и&nbsp;последующей реализации был выполнен качественно и&nbsp;в&nbsp;срок.</p>
            <p className="review_inproject_p">Рекомендуем компанию I-PROJECT в&nbsp;качестве належного партнера.</p>
            <p className="review_inproject_p">Надеемся также на&nbsp;дальнейшее сотрудничество с&nbsp;I-PROJECT.</p>
          </div>
          <button onClick={toggleProcessList} className="review_button" style={hide}>Показать полностью</button>
        </div>
      </div>
    </div>
  )
}