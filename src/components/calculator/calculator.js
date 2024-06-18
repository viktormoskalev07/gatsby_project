import React, { useEffect } from "react"
import { UseNoScroll } from "../../hooks/useNoScroll"
import { pureJs } from "./pureJs"
import * as style from "./calculator.module.scss"
import "./calculator.css"
export const CalculatorScreen = ( {location}  ) => {
  UseNoScroll();
  const fromPage = location?.state?.fromPage || "/";
  const backBtn = ()=>{
    document.location.href = fromPage;
  }

  useEffect(()=>{
    pureJs({
      dollarRate:3.2,backFunc:backBtn
    });
    return ()=>{
      document.location.reload()
    }
  },[])


  return <div id="modal" className={"modal_background " + style.form} >
    <div className="modal_core">
      <div className="modal_head">
        <div className="modal_header">
          <h2 className="modal_title" id="question">Какой у вас тип объекта?</h2>
          <div id="closeModal" onClick={backBtn} className="modal_close_icon_svg">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M0 1.70212L1.93394 0.00610352L38.9719 37.2967L37.038 38.9929L0 1.70212Z" fill="#8E8E8E" />
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M38.9719 1.70212L37.038 0.00610352L0 37.2967L1.93394 38.9929L38.9719 1.70212Z" fill="#8E8E8E" />
            </svg>
          </div>
        </div>
        <div className="modal_sidebar">
          <div className="modal_sidebar_line"></div>
        </div>
      </div>
      <form encType="multipart/form-data" action="#" id="formAnswers" className="formAnswers">
      </form>
    </div>
    <div className="cal_modal_button" id="modalButton">
      <div className="modal_back js-modal-back"></div>
      <button className="modal_next_step" id="nextButton">
        <div className="modal_next_step_text">Далее</div>
        <div className="modal_next_step_numbers" id="stepNumbers"></div>
      </button>
    </div>
    <button className="modal_send" id="sendButton">Отправить</button>
    <div className={ 'loader'}><img src="/loader.svg" alt="" />  </div>
  </div>
}