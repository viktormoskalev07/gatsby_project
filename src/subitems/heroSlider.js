import * as React from "react"
import { styles } from "./heroSlider.module.css"
import { useEffect } from "react"

export const HeroSlider = () => {
const config =  [
  {
    text: 'dfdfdf1',
    interval : 6,
  },   {
    text: 'dfdfdf2',
    interval : 6,
  },   {
    text: 'dfdfdf3',
    interval : 6,
  },

]
  useEffect(()=>{



  },[])

  return (
    <div className={styles}>
    <Line text={"Дизайн"}/>
    </div>
  )
}


const Line = ({text})=>{


  return      <p className="services_video_title main_video_title"><span>{text}</span><br />интерьера</p>
}