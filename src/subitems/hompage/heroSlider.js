import * as React from "react"
import { animationClass  , beforeAnimation   } from "./heroSlider.module.scss"
import { useEffect, useState } from "react"
const config =  [
  {
    text:  {
      top:'Дизайн ',
      bottom:"интерьера",
    },
    interval :8,
  },        {
    text:  {
      top:' Архитектура ',
      bottom:"для жизни",
    },
    interval :10,
  },        {
    text:  {
      top:'Воплощение ',
      bottom:"проектов",
    },
    interval :8,
  },
]
export const HeroSlider = () => {


  const [text, setText ] = useState(config[0].text);
  useEffect(()=>{
    const timeouts = config.map((item)=>{
      return{
        function :()=>{setText(item.text);  }
      }
    })

    let clear ;
    let counter = 0
      const interval =()=>{
          clear = setTimeout(()=>{
            if(counter < timeouts.length-1){
              counter++
            }else {
              counter = 0 ;
            }
              timeouts[counter].function();
              interval();
          }, config[counter].interval*1000)
      }
    interval()
        return ()=> clearTimeout(clear)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  return (
 
      <Line topText={text.top} bottomText={text.bottom}  />

  

  )
}


const Line = ({topText ,bottomText })=>{
  const defaultClass = " "
  const [getAnimation , setAnimation] = useState(defaultClass);

  useEffect(()=>{
    setAnimation(defaultClass);
  const anim =   setTimeout(()=>{
      setAnimation( animationClass)
    },100)

    return ()=>{
    clearTimeout (anim);
    }
  },[bottomText ,topText])


  return      <p className={beforeAnimation + " services_video_title main_video_title " + getAnimation}><span>{topText}</span><br /><span className={'subText'}> {bottomText}  </span> </p>
}