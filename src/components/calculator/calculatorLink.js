import React from "react"
import { navigate } from "gatsby"
//import ym from 'gatsby-plugin-yandex-metrika';


export const CalculatorLink = ( ) => {
const navHandler =()=> {
  navigate('/calculator', {state:{
    fromPage :window.location.href
    }})
};
const openCalculator = () => {
  typeof window !== "undefined" && window.ym(71004781, "reachGoal", "calculator_open")
};
  return  (
    <>
      <section>
        <div className="calculate_block" id="calculate_block">
          <h3 className="calculate_block_text">Рассчитайте стоимость вашего дизайн проекта и&nbsp;получите коммерческое предложение на&nbsp;вашу почту</h3>
          <button 
            onClick={() => {
              navHandler();
              openCalculator();
            }}
            className="calculate_block_link">
              Рассчитать стоимость
          </button>
        </div>
      </section>
      {/* <button    onClick={navHandler}  className= {style.calculatorLink}  >Рассчитать стоимость</button> */}
    </>
  )


}