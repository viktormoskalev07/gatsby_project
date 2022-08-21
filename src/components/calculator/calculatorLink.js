import React from "react"
import { navigate } from "gatsby"


export const CalculatorLink = ( ) => {
const navHandler =()=>{
  navigate('/calculator', {state:{
    fromPage :window.location.href
    }})
}
  return  (
    <>
      <section>
        <div className="calculate_block" id="calculate_block">
          <h3 className="calculate_block_text">Рассчитайте стоимость вашего дизайн проекта и&nbsp;получите коммерческое предложение на&nbsp;вашу почту</h3>
          <button onClick={navHandler}  className="calculate_block_link">Рассчитать стоимость</button>
        </div>
      </section>
      {/* <button    onClick={navHandler}  className= {style.calculatorLink}  >Рассчитать стоимость</button> */}
    </>
  )


}
 