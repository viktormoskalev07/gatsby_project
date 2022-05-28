import * as React from "react"
import { useEffect, useState } from "react"





export const PageViewCounter = ({    defaultNumber}) => {

    const [number , setNumber] = useState(defaultNumber);
    const [hide , setHide] = useState(true);
    // const fieldName = slug.replace(/\//g , '_');

 
      useEffect(  ()=>{
        const fieldName = window.location.pathname.replace(/\//g , '_')
        const requestAndUp = async ()=>{
          let number = 0
          try{
            const data=  await fetch(process.env.SET_COUNTER_POST +fieldName);
            number =  await data.json();
          } catch {   }
          setNumber(number)
          setHide(false)
        }
        const getCounter =  async ()=>{
          let number = 0
          try{
            const data=  await fetch(process.env.GET_COUNTER);
            number =  await data.json();
          } catch {  }
          console.log(number)
          // setNumber(number)
          // setHide(false)
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

      }, [])

  return (
           <span style={hide?{opacity:0}:{color:'inherit'}}>
                {number}
           </span>


  )
}
