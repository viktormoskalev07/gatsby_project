import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_COMPLIMENT, databaseIdFromUrl } from "../../../API"



export const Compliment = () => {
  const [open , setOpen] =useState(false);
  const [counter , setCounter] =useState( 'loading');
  useEffect(()=>{
    const page = databaseIdFromUrl();
    const checkedStatus =   window.localStorage.getItem(page+"compliment"  );
    if(checkedStatus==='true'){
      setOpen(true)
    }
    axios(API_COMPLIMENT.get+"?page="+page)  .catch((e)=>{
      console.log(e)
    }).then((data)=>{
      if(data?.status===200){
        setCounter(data.data)
      }
    })
  },[])
 const  sendLikeHandler = ()=>{
    const page = databaseIdFromUrl();
     setOpen(true);
      window.localStorage.setItem(page+"compliment" , 'true')
     axios(API_COMPLIMENT.set+"?page="+page)
       .catch((e)=>{
       console.log(e)
     }).then((data)=>{
        if(data?.status===200){
          setCounter(data.data)
        }
     })
  }
  return (
    <button
      disabled={open}
      style={{pointerEvents:open?"none":"all"}}
            onClick={sendLikeHandler} className={"compliment" + (open? " compliment_thanks" : '')}>
      <span style={{display:'block'}} className="compliment_p">{ open? 'Спасибо за оценку':'Понравилась работа'}</span>
      <span style={{display:'none'}} >{ counter}</span>
    </button>
  )
}
