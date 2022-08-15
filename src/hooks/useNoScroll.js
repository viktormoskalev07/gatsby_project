import React, { useEffect } from "react"

export const UseNoScroll = () => {
useEffect( ()=>{
  document.querySelector('html').style.overflow='hidden';
  return ()=> {
    document.querySelector("html").style.overflow = ""
  };
},[])

};

