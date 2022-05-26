import * as React from "react"
import { useEffect, useState } from "react"



const API ='http://backend.i-project.by/pageCounter.php?page='


export const PageViewCounter = ({slug , defaultNumber}) => {

    const [number , setNumber] = useState(defaultNumber);
    const [hide , setHide] = useState(true);
    const fieldName = slug.replace(/\//g , '_');

      useEffect(  ()=>{
        const request = async (slug)=>{
          let number = 0
          try{
            const data=  await fetch(API+slug);
            number =  await data.json();
          } catch {

          }
          setNumber(number)

        }
        const alreadyCounted=   window.localStorage.getItem(fieldName);
        if(!alreadyCounted) {

          request()
        }

      }, [])

  return (
           <span style={hide?{opacity:0}:{}}>
                {number}
           </span>


  )
}
