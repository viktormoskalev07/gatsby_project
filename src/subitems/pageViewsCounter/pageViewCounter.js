import * as React from "react"
import { useEffect, useState } from "react"
import {  API_DEV , API_PROD } from "../../../API"
import { useStaticCounter } from "../../hooks/useStaticCounter"





export const PageViewCounter = ({    location}) => {
  let path = location.pathname
  if(path[path.length-1] ==="/"){
    path=path.substring(0, path.length - 1)
  }
  const fieldName = path.replace(/\//g , '_')

    const [number , setNumber] = useState(useStaticCounter(fieldName));
    const [hide , setHide] = useState(true);

    const API =process.env.NODE_ENV==="development"?API_DEV: API_PROD

      useEffect(  ()=>{
        const requestAndUp = async ()=>{
          let number = 1
          try{
            const data=  await fetch( API.set(fieldName));
            number =  await data.json();
          } catch {  }
          setNumber(number)
          setHide(false)
        }
        const getCounter =  async ()=>{
          let number = 0
          try{
            const data=  await fetch(API.get(fieldName));
            number =  await data.json();
          } catch {  }

          setNumber(number)
          setHide(false)
        }
        
        const alreadyCounted=   window.localStorage.getItem(fieldName);
        if(!alreadyCounted) {
          window.localStorage.setItem(fieldName , 'true');
          const noCheating =  window.localStorage.getItem(fieldName);
          if(noCheating){
            requestAndUp()
          }

        } else {
          getCounter()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
           <span style={hide?{opacity:0}:{color:'inherit'}}>
                {number}
           </span>
  )
}
