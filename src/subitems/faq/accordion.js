import * as React from "react"
import { useState } from "react"


export const Accordion = ({config}) => {
   const [open , setOpen] =useState(
     config.map(()=>{
       return false
     })
   );
  return (
    <>

      {
        config.map((item , i )=>{
          return   <Item
            setOpen={()=>{
              return setOpen(   config.map((item , key )=>{
                 return  i===key
               }
               ))}}
            key={i} open={open[i]} text={item.text} title={item.title}/>
        })
      }
    </>


  )
}

const Item = ({title , text , open , setOpen })=>{
  return   <div className="faq_item">
    <div onClick={setOpen} className="faq_item_block">
      <h4    dangerouslySetInnerHTML={{__html:title}}/>
    </div>
    <div style={open?{display:'block'}:{}} className="faq_item_block_hidden">
      <p   dangerouslySetInnerHTML={{__html:text}} />
    </div>
  </div>
}