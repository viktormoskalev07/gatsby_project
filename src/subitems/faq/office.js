import * as React from "react"
import { Accordion } from "./accordion"


export const Faq = () => {
  const config  = [
    {
      title:' Сколько времени понадобится на&nbsp;ремонт офиса?',
      text:'<p>От&nbsp;6-ти до&nbsp;12-ти месяцев. Важно также понимать, что речь идет о&nbsp;создании уникального интерьера по&nbsp;индивидуальному проекту, не&nbsp;путать с&nbsp;так называемым &laquo;евроремонтом&raquo;.</p>'
    },
  ]
  return (
      <Accordion  config={config}/>
  )
}