import * as React from "react"
import { useState } from "react"


export const Compliment = () => {
  const [open , setOpen] =useState(false);
  return (
    <button onClick={()=>setOpen(!open)} className={"compliment" + (open? " compliment_thanks" : '')}><p className="compliment_p">{ open? 'Спасибо за оценку':'Понравилась работа'}</p></button>
  )
}
