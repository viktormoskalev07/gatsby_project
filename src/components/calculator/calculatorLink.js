import React from "react"
import * as style from "./calculator.module.scss"
import { navigate } from "gatsby"


export const CalculatorLink = ( ) => {
const navHandler =()=>{
  navigate('/calculator/', {state:{
    fromPage :window.location.href
    }})
}
  return  (
    <>
      <button    onClick={navHandler}  className= {style.calculatorLink}  >Рассчитать стоимость</button>
    </>
  )


}
 